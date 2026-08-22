"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm({ contactEmail }: { contactEmail: string }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formNotice, setFormNotice] = useState("");
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFormNotice("Sending your inquiry…");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...payload, startedAt: startedAt.current, sourcePath: window.location.pathname }),
      });
      const result = await response.json() as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "Unable to send your inquiry.");

      form.reset();
      startedAt.current = Date.now();
      setStatus("success");
      setFormNotice("Thanks—your inquiry is in. Expect a reply within two business days.");
      window.dispatchEvent(new CustomEvent("wit:track", { detail: { event: "inquiry_submitted" } }));
    } catch (error) {
      setStatus("error");
      setFormNotice(error instanceof Error ? error.message : "We could not send that just yet. Please email us directly.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submitInquiry}>
      <div className="form-row">
        <label>
          <span>Your name</span>
          <input type="text" name="name" autoComplete="name" placeholder="How should we address you?" maxLength={100} required />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@company.com" maxLength={200} required />
        </label>
      </div>
      <label>
        <span>What do you need?</span>
        <select name="project" autoComplete="off" defaultValue="" required>
          <option value="" disabled>Choose one</option>
          <option>Web design or redesign</option>
          <option>Web development</option>
          <option>iOS or Android app</option>
          <option>Graphic design or branding</option>
          <option>Photography</option>
          <option>SEO</option>
          <option>Social media marketing</option>
          <option>Connected multi-service project</option>
          <option>Something else</option>
        </select>
      </label>
      <div className="form-row">
        <label>
          <span>Approximate budget</span>
          <select name="budget" autoComplete="off" defaultValue="">
            <option value="">Not sure yet</option>
            <option>$1,500–$3,000</option>
            <option>$3,500–$7,500</option>
            <option>$7,500–$15,000</option>
            <option>$15,000+</option>
          </select>
        </label>
        <label>
          <span>Ideal timing</span>
          <select name="timeline" autoComplete="off" defaultValue="">
            <option value="">Flexible</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>Exploring for later</option>
          </select>
        </label>
      </div>
      <label>
        <span>Tell us a little more</span>
        <textarea name="message" autoComplete="off" rows={5} placeholder="What are you building, and why now?" maxLength={4000} required />
      </label>
      <label className="honeypot" aria-hidden="true">
        <span>Website</span>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="button button-lime" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : status === "success" ? "Inquiry sent" : "Send inquiry"} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-helper">
        By sending, you agree to our <a href="/privacy">privacy notice</a>. Prefer email? <a href={`mailto:${contactEmail}`} data-track="email_click">{contactEmail}</a>
      </p>
      <p className={status === "error" ? "form-notice form-notice-error" : "form-notice"} role="status" aria-live="polite">{formNotice}</p>
    </form>
  );
}
