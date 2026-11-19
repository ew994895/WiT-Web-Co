import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../lib/metadata";
import { PUBLIC_CONTACT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  ...pageMetadata(
    "/sms-privacy",
    "Shift Text Pilot Privacy Policy — Wit Web Co",
    "How Wit Web Co handles information for the shift-text pilot.",
  ),
  robots: { index: false, follow: false, noarchive: true },
};

export default function SmsPrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="legal-page section-shell">
        <h1>Shift Text Pilot: Privacy Policy</h1>
        <p className="legal-updated">Effective November 19, 2026</p>
        <div className="legal-content">
          <section>
            <h2>About this policy</h2>
            <p>This policy covers the shift-text pilot operated by Ethan Witkowski, doing business as Wit Web Co.</p>
          </section>
          <section>
            <h2>Information collected</h2>
            <p>Participant names, mobile numbers, consent selections and timestamps, the consent wording presented, shift replies, and message-processing and delivery records.</p>
          </section>
          <section>
            <h2>How information is used</h2>
            <p>To manage enrollment, send permitted reminders, match replies to participants, prepare shift reports, provide support, and honor opt-outs.</p>
          </section>
          <section>
            <h2>Service providers</h2>
            <p>Tally, Make, Twilio, and Google process information as needed to provide the signup, automation, messaging, and spreadsheet services. Their own privacy policies also apply to their processing.</p>
          </section>
          <section>
            <h2>Marketing and consent</h2>
            <p>We do not sell or rent participant information. Mobile numbers and SMS consent are not shared with third parties or affiliates for their marketing or promotional purposes.</p>
            <p>Pilot consent will not be transferred to DL Management or used to enroll participants in another business&apos;s messaging program.</p>
          </section>
          <section>
            <h2>Retention and choices</h2>
            <p>Records are kept as needed to operate and evaluate the pilot, resolve issues, and meet applicable obligations.</p>
            <p>Participants can request access, correction, or deletion by emailing <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`}>{PUBLIC_CONTACT_EMAIL}</a>. Minimal opt-out records may be retained to prevent further reminders.</p>
          </section>
          <section>
            <h2>Contact and program terms</h2>
            <p>For privacy questions, contact <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`}>{PUBLIC_CONTACT_EMAIL}</a>.</p>
            <p>Read the <Link href="/sms-terms">Shift Text Pilot SMS Terms</Link> for program details and opt-out instructions.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
