import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../lib/metadata";
import { PUBLIC_CONTACT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  ...pageMetadata(
    "/sms-terms",
    "Shift Text Pilot SMS Terms — Wit Web Co",
    "SMS terms for the Wit Web Co shift-reporting pilot.",
  ),
  robots: { index: false, follow: false, noarchive: true },
};

export default function SmsTermsPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="legal-page section-shell">
        <h1>Shift Text Pilot: SMS Terms</h1>
        <p className="legal-updated">Effective November 19, 2026</p>
        <div className="legal-content">
          <section>
            <h2>About the program</h2>
            <p>This pilot is operated by Ethan Witkowski, doing business as Wit Web Co.</p>
            <p>Participants who voluntarily select the SMS consent checkbox on the <a href="https://tally.so/r/PR9xr5">pilot signup form</a> receive automated shift-reporting texts at the mobile number provided.</p>
            <p>Messages include one daily shift reminder, an enrollment confirmation, and support or opt-out responses. Message frequency varies with participation.</p>
          </section>
          <section>
            <h2>Participation and shift replies</h2>
            <p>Participants can reply with their actual shift start and end times or OFF for a day off. Pilot reports reflect information submitted by participants.</p>
            <p>Participation is optional. Consent to receive texts is not a condition of purchasing services.</p>
          </section>
          <section>
            <h2>Rates and delivery</h2>
            <p><strong>Message and data rates may apply.</strong> Wit Web Co does not charge participants to join this pilot.</p>
            <p>Delivery depends on mobile networks and device availability. Wireless carriers are not liable for delayed or undelivered messages.</p>
          </section>
          <section>
            <h2>Unsubscribe or get help</h2>
            <p><strong>To unsubscribe:</strong> Reply STOP. After an opt-out confirmation, recurring reminders will stop.</p>
            <p><strong>For help:</strong> Reply HELP or email <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`}>{PUBLIC_CONTACT_EMAIL}</a>.</p>
          </section>
          <section>
            <h2>Privacy</h2>
            <p>Read the <Link href="/sms-privacy">Shift Text Pilot Privacy Policy</Link> for information about data handling.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
