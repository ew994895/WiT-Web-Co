import assert from "node:assert/strict";
import test from "node:test";
import { sendInquiryEmail } from "../app/lib/inquiry-email.ts";

const inquiry = {
  id: "test-inquiry",
  name: "Test Prospect",
  email: "prospect@example.com",
  project: "Web design or redesign",
  budget: "",
  timeline: "Flexible",
  message: "A new website. <script>This should remain plain text.</script>",
  sourcePath: "/",
};
const options = {
  apiKey: "test-key-not-a-real-secret",
  from: "WiT Web Co. <inquiries@example.com>",
  to: "ejwit007@gmail.com",
};

test("sends all inquiry details to the owner with a reply address for the prospect", async () => {
  let calls = 0;
  const accepted = await sendInquiryEmail(inquiry, options, async (url, request) => {
    calls++;
    assert.equal(url, "https://api.resend.com/emails");
    assert.equal(request.method, "POST");
    const body = JSON.parse(request.body);
    assert.deepEqual(body.to, ["ejwit007@gmail.com"]);
    assert.equal(body.reply_to, inquiry.email);
    assert.equal(body.from, options.from);
    assert.equal(body.html, undefined);
    for (const value of Object.values(inquiry).filter(Boolean)) {
      assert.ok(body.text.includes(value));
    }
    assert.equal(request.headers["Idempotency-Key"], "inquiry-test-inquiry");
    assert.ok(request.signal instanceof AbortSignal);
    return Response.json({ id: "email-test-id" });
  });
  assert.equal(accepted, true);
  assert.equal(calls, 1);
});

test("missing credentials or sender never claim success or call the provider", async () => {
  const send = async () => { assert.fail("Provider should not be called"); };
  assert.equal(await sendInquiryEmail(inquiry, { ...options, apiKey: "" }, send), false);
  assert.equal(await sendInquiryEmail(inquiry, { ...options, from: "" }, send), false);
});

test("provider errors, malformed responses, and timeouts are unsuccessful", async () => {
  const responses = [
    () => Response.json({ message: "Invalid sender" }, { status: 403 }),
    () => Response.json({ message: "Rate limited" }, { status: 429 }),
    () => Response.json({}),
    () => new Response("not json"),
    () => { throw new DOMException("Timed out", "TimeoutError"); },
  ];
  for (const response of responses) {
    assert.equal(await sendInquiryEmail(inquiry, options, async () => response()), false);
  }
});
