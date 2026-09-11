import type { Metadata } from "next";
/* eslint-disable @next/next/no-html-link-for-pages */
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Digital Services — WiT Web Co.",
  description: "Web design and development, iOS and Android apps, graphic design, photography, SEO, and social media marketing.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Services — WiT Web Co.",
    description: "Websites, mobile apps, creative, and digital marketing services for growing businesses.",
    type: "website",
    siteName: "WiT Web Co.",
    url: "/services",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Digital Services — WiT Web Co.",
    description: "Websites, mobile apps, creative, and digital marketing services for growing businesses.",
    images: [],
  },
};

const services = [
  ["Web Design", "Creative, responsive, and accessible interfaces that make your brand clearer and move visitors toward action.", "UX / UI · Responsive"],
  ["Graphic Design", "Brand identities, campaign graphics, and print-ready collateral with a distinctive, consistent visual point of view.", "Brand · Digital · Print"],
  ["Photography", "Purposeful brand, product, and team imagery created for websites, social content, flyers, and large-format print.", "Direction · Production"],
  ["Web Development", "Fast, accessible websites and progressive web apps built on clean, maintainable foundations.", "Websites · PWAs"],
  ["iOS & Android Apps", "Product strategy, UX/UI, mobile development, testing, and release support for useful apps people want to keep using.", "Product · Mobile"],
  ["SEO", "Technical setup, on-page optimization, content structure, and measurement designed to improve qualified discovery.", "Technical · On-page"],
  ["Social Media Marketing", "Channel strategy, campaign creative, content systems, and reporting that build a more recognizable online presence.", "Strategy · Creative"],
];

export default function ServicesPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="inner-hero services-hero section-shell">
          <p className="eyebrow"><span /> Creative, technology &amp; growth</p>
          <div className="inner-hero-grid">
            <h1>One studio.<br /><em>Full digital range.</em></h1>
            <div>
              <p>From the first strategy session to the final launch, connect the services your business actually needs—without juggling a collection of vendors.</p>
              <a className="button button-dark" href="#service-catalog">See every service <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="capabilities-section service-catalog-section" id="service-catalog" aria-labelledby="capabilities-title">
          <div className="capabilities-heading section-shell">
            <p className="section-kicker light">What we can do</p>
            <h2 id="capabilities-title">The strategy, the look,<br />the build, and <em>the reach.</em></h2>
          </div>
          <div className="capability-grid section-shell">
            {services.map(([title, body, tags], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                <small>{tags}</small>
              </article>
            ))}
          </div>
          <div className="catalog-action section-shell">
            <p>Need more than one? We can shape a connected scope around your launch, campaign, or long-term growth plan.</p>
            <a className="button button-lime" href="/#contact">Build your service mix <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="page-cta section-shell">
          <p className="section-kicker">Every project starts with a conversation</p>
          <h2>Bring the ambition.<br /><em>We&apos;ll build the plan.</em></h2>
          <p>Share what you have in mind. We’ll shape the scope, timing, and quote around your project.</p>
          <a className="button button-dark" href="/#contact">Start a conversation <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
