import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertBookingSchema } from "@shared/schema";
import { googleCalendarService } from "./services/googleCalendar";
import { startOfWeek, endOfWeek } from "date-fns";

export async function registerRoutes(app: Express): Promise<Server> {
  // Keep existing contact route
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const message = await storage.createContactMessage(contactData);
      res.json(message);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact form data" });
    }
  });

  // Add booking routes
  app.get("/api/booking/available-slots", async (req, res) => {
    try {
      const start = startOfWeek(new Date());
      const end = endOfWeek(new Date());
      const slots = await googleCalendarService.getAvailableSlots(start, end);
      res.json(slots);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch available slots" });
    }
  });

  app.post("/api/booking", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(bookingData);

      // Create Google Calendar event
      const eventId = await googleCalendarService.createEvent({
        name: booking.name,
        email: booking.email,
        startTime: new Date(booking.startTime),
        endTime: new Date(booking.endTime),
        notes: booking.notes
      });

      // Update booking with Google Calendar event ID
      const updatedBooking = await storage.updateBooking(booking.id, {
        googleEventId: eventId,
        status: 'confirmed'
      });

      res.json(updatedBooking);
    } catch (error) {
      res.status(400).json({ error: "Failed to create booking" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}