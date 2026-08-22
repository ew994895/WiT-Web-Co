import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const inquiries = sqliteTable("inquiries", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  project: text("project").notNull(),
  budget: text("budget").notNull(),
  timeline: text("timeline").notNull(),
  message: text("message").notNull(),
  sourcePath: text("source_path").notNull(),
  deliveryStatus: text("delivery_status").notNull().default("stored"),
  createdAt: integer("created_at").notNull(),
}, (table) => [index("idx_inquiries_created_at").on(table.createdAt)]);

export const analyticsEvents = sqliteTable("analytics_events", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  eventName: text("event_name").notNull(),
  path: text("path").notNull(),
  createdAt: integer("created_at").notNull(),
}, (table) => [index("idx_analytics_event_created").on(table.eventName, table.createdAt)]);
