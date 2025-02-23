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

    // Set credentials directly since we're using service account
    this.oauth2Client.setCredentials({
      access_token: process.env.GOOGLE_ACCESS_TOKEN,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });

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
      // For testing/development, return mock data
      const mockSlots = [];
      const currentDate = new Date();

      // Generate slots for the next 7 days
      for (let i = 0; i < 7; i++) {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + i);

        // Add two slots per day (10 AM and 2 PM)
        const morningSlot = new Date(date);
        morningSlot.setHours(10, 0, 0, 0);
        const afternoonSlot = new Date(date);
        afternoonSlot.setHours(14, 0, 0, 0);

        if (morningSlot > currentDate) {
          mockSlots.push({
            startTime: morningSlot.toISOString(),
            endTime: new Date(morningSlot.getTime() + 60 * 60 * 1000).toISOString() // 1 hour later
          });
        }

        if (afternoonSlot > currentDate) {
          mockSlots.push({
            startTime: afternoonSlot.toISOString(),
            endTime: new Date(afternoonSlot.getTime() + 60 * 60 * 1000).toISOString() // 1 hour later
          });
        }
      }

      return mockSlots;
    } catch (error) {
      console.error('Error fetching calendar events:', error);
      throw new Error('Failed to fetch available slots');
    }
  }
}

export const googleCalendarService = new GoogleCalendarService();