import { contactMessages, type ContactMessage, type InsertContact, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { nanoid } from "nanoid";

export interface IStorage {
  createContactMessage(message: InsertContact): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, ContactMessage>;
  private posts: Map<number, BlogPost>;
  private currentMessageId: number;
  private currentPostId: number;

  constructor() {
    this.messages = new Map();
    this.posts = new Map();
    this.currentMessageId = 1;
    this.currentPostId = 1;
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

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentPostId++;
    const now = new Date();
    const slug = this.generateSlug(post.title);

    const newPost: BlogPost = {
      id,
      slug,
      publishedAt: post.publishedAt || now,
      updatedAt: now,
      ...post
    };

    this.posts.set(id, newPost);
    return newPost;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.posts.values())
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.posts.values()).find(post => post.slug === slug);
  }

  private generateSlug(title: string): string {
    const base = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    return `${base}-${nanoid(6)}`;
  }
}

export const storage = new MemStorage();