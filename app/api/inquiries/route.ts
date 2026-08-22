import { getDatabase } from "../../../db";
import { getContactEmail } from "../../lib/site";

type InquiryPayload = {
  name?: unknown;
  email?: unknown;
  project?: unknown;
  budget?: unknown;
  timeline?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
  sourcePath?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  return !origin || origin === new URL(request.url).origin;
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ ok: false, message: "Invalid request." }, { status: 403 });

  try {
    const payload = await request.json() as InquiryPayload;
    if (clean(payload.website, 100)) return Response.json({ ok: true });

    const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : 0;
    if (!startedAt || Date.now() - startedAt < 2500) {
      return Response.json({ ok: false, message: "Please take a moment to review your message." }, { status: 429 });
    }

    const inquiry = {
      id: crypto.randomUUID(),
      name: clean(payload.name, 100),
      email: clean(payload.email, 200),
      project: clean(payload.project, 120),
      budget: clean(payload.budget, 100),
      timeline: clean(payload.timeline, 100),
      message: clean(payload.message, 4000),
      sourcePath: clean(payload.sourcePath, 200) || "/",
    };

    if (!inquiry.name || !inquiry.email.includes("@") || !inquiry.project || !inquiry.message) {
      return Response.json({ ok: false, message: "Please complete the required fields." }, { status: 400 });
    }

    const database = getDatabase();
    await database.prepare(
      "INSERT INTO inquiries (id, name, email, project, budget, timeline, message, source_path, delivery_status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    ).bind(
      inquiry.id,
      inquiry.name,
      inquiry.email,
      inquiry.project,
      inquiry.budget,
      inquiry.timeline,
      inquiry.message,
      inquiry.sourcePath,
      "stored",
      Math.floor(Date.now() / 1000),
    ).run();

    let deliveryStatus = "stored";
    try {
      const emailResponse = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(getContactEmail())}`, {
        method: "POST",
        headers: { "content-type": "application/json", accept: "application/json" },
        body: JSON.stringify({
          _subject: `New WiT Web Co. inquiry from ${inquiry.name}`,
          _template: "table",
          name: inquiry.name,
          email: inquiry.email,
          project: inquiry.project,
          budget: inquiry.budget || "Not specified",
          timeline: inquiry.timeline || "Not specified",
          message: inquiry.message,
          source: inquiry.sourcePath,
        }),
      });
      if (emailResponse.ok) deliveryStatus = "forwarded";
    } catch {
      deliveryStatus = "stored";
    }

    await database.prepare("UPDATE inquiries SET delivery_status = ? WHERE id = ?")
      .bind(deliveryStatus, inquiry.id)
      .run();

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, message: "We could not send that just yet. Please email us directly." }, { status: 500 });
  }
}
