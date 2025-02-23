import { contactMessages, type ContactMessage, type InsertContact } from "@shared/schema";
import { bookings, type Booking, type InsertBooking } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContact): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
  updateBooking(id: number, update: Partial<Booking>): Promise<Booking>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, ContactMessage>;
  private bookingsList: Map<number, Booking>;
  private currentMessageId: number;
  private currentBookingId: number;

  constructor() {
    this.messages = new Map();
    this.bookingsList = new Map();
    this.currentMessageId = 1;
    this.currentBookingId = 1;
  }

  async createContactMessage(message: InsertContact): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const newMessage = { ...message, id };
    this.messages.set(id, newMessage);
    return newMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.messages.values());
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const newBooking = {
      ...booking,
      id,
      status: 'pending',
      googleEventId: null,
      createdAt: new Date()
    };
    this.bookingsList.set(id, newBooking);
    return newBooking;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookingsList.values());
  }

  async updateBooking(id: number, update: Partial<Booking>): Promise<Booking> {
    const booking = this.bookingsList.get(id);
    if (!booking) {
      throw new Error('Booking not found');
    }
    const updatedBooking = { ...booking, ...update };
    this.bookingsList.set(id, updatedBooking);
    return updatedBooking;
  }
}

export const storage = new MemStorage();