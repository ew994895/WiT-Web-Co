import { getDatabase } from "../../../db";

const allowedEvents = new Set([
  "page_view",
  "cta_start_project",
  "view_services",
  "view_work",
  "open_demo",
  "email_click",
  "inquiry_submitted",
]);

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return new Response(null, { status: 403 });

  try {
    const body = await request.json() as { event?: unknown; path?: unknown };
    const event = typeof body.event === "string" ? body.event : "";
    const path = typeof body.path === "string" ? body.path.slice(0, 200) : "/";
    if (!allowedEvents.has(event)) return new Response(null, { status: 400 });

    await getDatabase()
      .prepare("INSERT INTO analytics_events (event_name, path, created_at) VALUES (?, ?, ?)")
      .bind(event, path, Math.floor(Date.now() / 1000))
      .run();
    return new Response(null, { status: 204 });
  } catch {
    return new Response(null, { status: 204 });
  }
}
