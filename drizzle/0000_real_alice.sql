CREATE TABLE `analytics_events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`event_name` text NOT NULL,
	`path` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_analytics_event_created` ON `analytics_events` (`event_name`,`created_at`);--> statement-breakpoint
CREATE TABLE `inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`project` text NOT NULL,
	`budget` text NOT NULL,
	`timeline` text NOT NULL,
	`message` text NOT NULL,
	`source_path` text NOT NULL,
	`delivery_status` text DEFAULT 'stored' NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_inquiries_created_at` ON `inquiries` (`created_at`);
--> statement-breakpoint
PRAGMA optimize;
