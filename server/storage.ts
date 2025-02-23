import { contactMessages, type ContactMessage, type InsertContact } from "@shared/schema";

export interface IStorage {
  createContactMessage(message: InsertContact): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, ContactMessage>;
  private currentId: number;

  constructor() {
    this.messages = new Map();
    this.currentId = 1;
  }

  async createContactMessage(message: InsertContact): Promise<ContactMessage> {
    const id = this.currentId++;
    const newMessage = { ...message, id };
    this.messages.set(id, newMessage);
    return newMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.messages.values());
  }
}

export const storage = new MemStorage();
