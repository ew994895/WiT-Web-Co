import { services } from "../data/services";
import type { Metadata } from "next";
/* eslint-disable @next/next/no-html-link-for-pages */
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Digital Services — WiT Web Co.",
  description: "Website design, custom web apps, AI integrations, and website care. Every project is scoped and quoted individually.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Services — WiT Web Co.",
    description: "Websites, custom tools, and practical AI integrations for small businesses.",
    type: "website",
    siteName: "WiT Web Co.",
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Services — WiT Web Co.",
    description: "Websites, custom tools, and practical AI integrations for small businesses.",
  },
};


export default function ServicesPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="inner-hero services-hero section-shell">
          <p className="eyebrow"><span /> Websites, tools &amp; ongoing care</p>
          <div className="inner-hero-grid">
            <h1>Your next step.<br /><em>Thoughtfully built.</em></h1>
            <div>
              <p>From the first strategy session to the final launch, connect the services your business actually needs—without juggling a collection of vendors.</p>
              <a className="button button-dark" href="#service-catalog">See every service <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="capabilities-section service-catalog-section" id="service-catalog" aria-labelledby="capabilities-title">
          <div className="capabilities-heading section-shell">
            <p className="section-kicker light">What we can do</p>
            <h2 id="capabilities-title">Start with a need.<br />Build <em>what helps.</em></h2>
          </div>
          <div className="capability-grid section-shell">
            {services.map(({ name, description, tags }, index) => (
              <article key={name}>
                <span>0{index + 1}</span>
                <h3>{name}</h3>
                <p>{description}</p>
                <small>{tags}</small>
              </article>
            ))}
          </div>
          <div className="catalog-action section-shell">
            <p>Need mobile app development, branding, photography, or content support? Bring it to the conversation. We’ll confirm the right approach and scope before committing.</p>
            <a className="button button-lime" href="/#contact">Discuss your project <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="service-detail section-shell" aria-labelledby="ai-title">
          <p className="section-kicker">Practical AI, with a clear purpose</p>
          <h2 id="ai-title">Less repetitive work.<br />More room for your business.</h2>
          <p>Start with one useful workflow: answer common questions from approved business information, summarize incoming inquiries, or prepare drafts for your review.</p>
          <p>We’ll define what the tool can do, where a person stays involved, and how data, usage limits, and ongoing provider costs are handled before building. Scope and quotes are individual to each project.</p>
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
