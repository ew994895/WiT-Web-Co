type Inquiry = {
  id: string;
  name: string;
  email: string;
  project: string;
  budget: string;
  timeline: string;
  message: string;
  sourcePath: string;
};

type EmailOptions = {
  apiKey: string;
  from: string;
  to: string;
};

// Only the server calls this function. Visitor input never selects the recipient
// or sender; Reply-To lets the owner reply directly to the prospective client.
export async function sendInquiryEmail(
  inquiry: Inquiry,
  options: EmailOptions,
  send: typeof fetch = fetch,
) {
  if (!options.apiKey || !options.from) return false;

  try {
    const response = await send("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${options.apiKey}`,
        "content-type": "application/json",
        "Idempotency-Key": `inquiry-${inquiry.id}`,
      },
      signal: AbortSignal.timeout(10_000),
      body: JSON.stringify({
        from: options.from,
        to: [options.to],
        reply_to: inquiry.email,
        subject: "New project inquiry — WiT Web Co.",
        text: [
          `Name: ${inquiry.name}`,
          `Email: ${inquiry.email}`,
          `Project: ${inquiry.project}`,
          `Timing: ${inquiry.timeline || "Flexible"}`,
          ...(inquiry.budget ? [`Budget: ${inquiry.budget}`] : []),
          "",
          inquiry.message,
          "",
          `Page: ${inquiry.sourcePath}`,
          `Inquiry ID: ${inquiry.id}`,
        ].join("\n"),
      }),
    });
    if (!response.ok) return false;
    const result = await response.json() as { id?: unknown };
    return typeof result.id === "string" && result.id.length > 0;
  } catch {
    return false;
  }
}
