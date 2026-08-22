import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { PUBLIC_CONTACT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy — WiT Web Co.",
  description: "How WiT Web Co. handles website analytics and project inquiry information.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy — WiT Web Co.", description: "How WiT Web Co. handles website analytics and project inquiry information.", images: [] },
  twitter: { card: "summary", title: "Privacy — WiT Web Co.", description: "How WiT Web Co. handles website analytics and project inquiry information.", images: [] },
};

export default function PrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="legal-page section-shell">
        <p className="eyebrow"><span /> Privacy</p>
        <h1>Clear, simple,<br /><em>respectful.</em></h1>
        <p className="legal-updated">Last updated August 21, 2026</p>
        <div className="legal-content">
          <section>
            <h2>Project inquiries</h2>
            <p>When you send an inquiry, WiT Web Co. receives the name, email address, project selections, and message you provide. We use that information only to review your request, respond, and maintain a record of the conversation.</p>
            <p>Inquiry records are stored securely with the website so a delivery problem does not cause a lead to disappear. If you use the direct email link, your message is handled by your email provider and ours.</p>
          </section>
          <section>
            <h2>Site measurement</h2>
            <p>We record a small set of anonymous events such as page views, project-demo openings, and successful form submissions. These events contain the page path and event name—not your name, email address, message, or a cross-site advertising profile.</p>
            <p>This site does not use advertising cookies or sell personal information.</p>
          </section>
          <section>
            <h2>Your choices</h2>
            <p>You can ask what inquiry information we hold, request a correction, or ask us to remove it by emailing <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`}>{PUBLIC_CONTACT_EMAIL}</a>.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
