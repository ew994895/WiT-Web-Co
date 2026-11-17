import { ContactCard } from "../components/ContactCard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../lib/metadata";
import { getContactEmail } from "../lib/site";

const title = "Contact | WiT Web Co.";
const description = "Email Ethan about a new website or a redesign for your Greater Philadelphia small business.";

export const metadata = pageMetadata("/contact", title, description);

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="section-shell contact-layout" id="top">
          <div className="page-intro">
            <p className="eyebrow">Contact</p>
            <h1>Tell me about your website.</h1>
            <p>A few sentences are enough. Tell me what you do, where you work, and what you’d like the site to help with.</p>
          </div>
          <ContactCard contactEmail={getContactEmail()} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
