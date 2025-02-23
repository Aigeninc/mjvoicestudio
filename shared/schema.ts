import { pgTable, text, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  subject: varchar("subject", { length: 100 }).notNull()
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 200 }).notNull(),
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  publishedAt: timestamp("published_at").notNull(),
  updatedAt: timestamp("updated_at").notNull()
});

export const insertContactSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  message: true,
  subject: true
});

export const insertBlogPostSchema = createInsertSchema(blogPosts)
  .pick({
    title: true,
    content: true,
    excerpt: true,
  })
  .extend({
    publishedAt: z.coerce.date(),
  });

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;