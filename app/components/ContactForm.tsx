"use client";

import { FormEvent, useState } from "react";

export function ContactForm({ contactEmail }: { contactEmail?: string }) {
  const [formNotice, setFormNotice] = useState("");

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!contactEmail) {
      setFormNotice("No information was sent. Add a public contact email to activate this form.");
      return;
    }

    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`New WiT Web Co inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject: ${data.get("project")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setFormNotice("Your email app should open with the inquiry ready to send.");
  }

  return (
    <form className="contact-form" onSubmit={submitInquiry}>
      <label>
        <span>Your name</span>
        <input type="text" name="name" autoComplete="name" placeholder="How should we address you?" required />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" autoComplete="email" inputMode="email" placeholder="you@company.com" required />
      </label>
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
      <label>
        <span>Tell us a little more</span>
        <textarea name="message" autoComplete="off" rows={4} placeholder="What are you building, and why now?" required />
      </label>
      <button className="button button-lime" type="submit">
        {contactEmail ? "Create email" : "Preview inquiry"} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-helper">
        {contactEmail
          ? "Your inquiry opens in your email app so you stay in control."
          : "Preview form — no information is transmitted yet."}
      </p>
      <p className="form-notice" role="status" aria-live="polite">{formNotice}</p>
    </form>
  );
}
