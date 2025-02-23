import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

class GoogleCalendarService {
  private oauth2Client: OAuth2Client;
  private calendar: any;

  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      'http://localhost:5000/api/auth/google/callback'
    );

    this.calendar = google.calendar({ version: 'v3', auth: this.oauth2Client });
  }

  async createEvent(booking: {
    name: string;
    email: string;
    startTime: Date;
    endTime: Date;
    notes?: string;
  }) {
    try {
      const event = {
        summary: `Vocal Training - ${booking.name}`,
        description: booking.notes,
        start: {
          dateTime: booking.startTime.toISOString(),
          timeZone: 'America/Chicago', // Mount Juliet is in Central Time
        },
        end: {
          dateTime: booking.endTime.toISOString(),
          timeZone: 'America/Chicago',
        },
        attendees: [{ email: booking.email }],
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 },
            { method: 'popup', minutes: 30 },
          ],
        },
      };

      const response = await this.calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        resource: event,
        sendUpdates: 'all',
      });

      return response.data.id;
    } catch (error) {
      console.error('Error creating calendar event:', error);
      throw new Error('Failed to create calendar event');
    }
  }

  async getAvailableSlots(startDate: Date, endDate: Date) {
    try {
      const response = await this.calendar.events.list({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        timeMin: startDate.toISOString(),
        timeMax: endDate.toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      });

      const events = response.data.items;
      const businessHours = {
        start: 9, // 9 AM
        end: 17, // 5 PM
      };

      // Generate available slots
      const availableSlots = [];
      let currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) { // Skip weekends
          for (let hour = businessHours.start; hour < businessHours.end; hour++) {
            const slotStart = new Date(currentDate.setHours(hour, 0, 0, 0));
            const slotEnd = new Date(currentDate.setHours(hour + 1, 0, 0, 0));

            const isBooked = events.some((event: any) => {
              const eventStart = new Date(event.start.dateTime);
              const eventEnd = new Date(event.end.dateTime);
              return (
                (slotStart >= eventStart && slotStart < eventEnd) ||
                (slotEnd > eventStart && slotEnd <= eventEnd)
              );
            });

            if (!isBooked) {
              availableSlots.push({
                startTime: slotStart.toISOString(),
                endTime: slotEnd.toISOString(),
              });
            }
          }
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }

      return availableSlots;
    } catch (error) {
      console.error('Error fetching calendar events:', error);
      throw new Error('Failed to fetch available slots');
    }
  }
}

export const googleCalendarService = new GoogleCalendarService();
