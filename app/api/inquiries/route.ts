import { getDatabase } from "../../../db";
import { env } from "cloudflare:workers";
import { sendInquiryEmail } from "../../lib/inquiry-email";
import { PUBLIC_CONTACT_EMAIL } from "../../lib/site";

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

    if (!inquiry.name || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(inquiry.email) || !inquiry.project || !inquiry.message) {
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

    const notified = await sendInquiryEmail(inquiry, {
      apiKey: typeof env.RESEND_API_KEY === "string" ? env.RESEND_API_KEY : "",
      from: typeof env.INQUIRY_FROM_EMAIL === "string" ? env.INQUIRY_FROM_EMAIL : "",
      to: PUBLIC_CONTACT_EMAIL,
    });

    // Storage already succeeded. Do not report an accepted email as a failed
    // submission just because updating its bookkeeping status fails.
    try {
      await database.prepare("UPDATE inquiries SET delivery_status = ? WHERE id = ?")
        .bind(notified ? "email_accepted" : "notification_failed", inquiry.id).run();
    } catch {
      console.error("Inquiry notification status update failed.");
    }

    if (!notified) {
      return Response.json({
        ok: false,
        message: `Your inquiry was saved, but we could not send the email notification. Please email ${PUBLIC_CONTACT_EMAIL} directly so we can respond.`,
      }, { status: 503 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, message: "We could not send that just yet. Please email us directly." }, { status: 500 });
  }
}
