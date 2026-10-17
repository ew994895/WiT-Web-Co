import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { PUBLIC_CONTACT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy — WiT Web Co.",
  description: "How WiT Web Co. handles website analytics and project inquiry information.",
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy — WiT Web Co.", description: "How WiT Web Co. handles website analytics and project inquiry information." },
  twitter: { card: "summary_large_image", title: "Privacy — WiT Web Co.", description: "How WiT Web Co. handles website analytics and project inquiry information." },
};

export default function PrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="legal-page section-shell">
        <p className="eyebrow"><span /> Privacy</p>
        <h1>Clear, simple,<br /><em>respectful.</em></h1>
        <p className="legal-updated">Last updated October 16, 2026</p>
        <div className="legal-content">
          <section>
            <h2>Project inquiries</h2>
            <p>When you email WiT Web Co., we receive your email address and the information you choose to share. We use that information only to review your request, respond, and maintain a record of the conversation.</p>
            <p>Contact currently happens by email, handled by your email provider and our Gmail inbox. The website does not currently accept form submissions. Earlier form inquiries may remain in our website database.</p>
          </section>
          <section>
            <h2>Site measurement</h2>
            <p>We record a small set of anonymous events such as page views, project openings, and email-link clicks. These events contain the page path, event name, and time—not your name, email address, message, or a cross-site advertising profile.</p>
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
