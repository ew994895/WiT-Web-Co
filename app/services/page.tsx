import type { Metadata } from "next";
/* eslint-disable @next/next/no-html-link-for-pages */
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Services & Pricing — WiT Web Co.",
  description: "Website strategy, design, and development packages with helpful suggested investment ranges.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & Pricing — WiT Web Co.",
    description: "Website strategy, design, and development packages with helpful suggested investment ranges.",
    type: "website",
    siteName: "WiT Web Co.",
    url: "/services",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Services & Pricing — WiT Web Co.",
    description: "Website strategy, design, and development packages with helpful suggested investment ranges.",
    images: [],
  },
};

const packages = [
  {
    number: "01",
    name: "Launch site",
    fit: "For a new business, campaign, event, or single focused offer.",
    range: "$1,500–$3,000",
    timeline: "Usually 2–4 weeks",
    includes: ["One conversion-focused page", "Content and page strategy", "Custom responsive design", "Contact or signup flow", "Launch support"],
  },
  {
    number: "02",
    name: "Growth site",
    fit: "For an established business ready for a sharper, more useful web presence.",
    range: "$3,500–$7,500",
    timeline: "Usually 4–8 weeks",
    includes: ["Up to 8 core pages", "Messaging and site architecture", "Custom design system", "Responsive development", "SEO and analytics setup"],
    featured: true,
  },
  {
    number: "03",
    name: "Custom build",
    fit: "For web apps, interactive tools, advanced integrations, or an idea outside the usual box.",
    range: "$7,500–$15,000+",
    timeline: "Scoped around the idea",
    includes: ["Product and experience strategy", "Custom interface design", "Advanced front-end development", "Integrations and workflows", "Testing and launch planning"],
  },
];

const capabilities = [
  ["Strategy", "Discovery, positioning, content direction, and a clear plan before pixels."],
  ["Design", "Distinctive interfaces, responsive layouts, and reusable visual systems."],
  ["Development", "Fast, accessible builds with clean foundations and practical handoff."],
  ["Brand support", "A focused visual refresh when the website needs a stronger identity."],
  ["Care plans", "Updates, refinements, and support from $150–$500 per month."],
  ["Focused sprints", "Small improvements or one-off builds quoted around a tight goal."],
];

export default function ServicesPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="inner-hero services-hero section-shell">
          <p className="eyebrow"><span /> Services &amp; suggested pricing</p>
          <div className="inner-hero-grid">
            <h1>Clear options.<br /><em>Flexible scope.</em></h1>
            <div>
              <p>Start with a useful ballpark, then shape the right project around your goals, timeline, and content.</p>
              <a className="button button-dark" href="/#contact">Talk through your project <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="pricing-section" aria-labelledby="pricing-title">
          <div className="section-heading section-shell">
            <div>
              <p className="section-kicker">Three places to start</p>
              <h2 id="pricing-title">Pick the shape that<br /><em>feels closest.</em></h2>
            </div>
            <p>These ranges are guidance, not rigid packages. Every proposal is shaped after a short discovery conversation.</p>
          </div>
          <div className="package-grid section-shell">
            {packages.map((item) => (
              <article className={item.featured ? "package-card featured" : "package-card"} key={item.number}>
                <div className="package-top">
                  <span>{item.number}</span>
                  {item.featured && <small>Most popular</small>}
                </div>
                <h3>{item.name}</h3>
                <p className="package-fit">{item.fit}</p>
                <div className="package-price">
                  <small>Suggested investment</small>
                  <strong>{item.range}</strong>
                  <span>{item.timeline}</span>
                </div>
                <ul>
                  {item.includes.map((included) => <li key={included}>{included}</li>)}
                </ul>
                <a className={item.featured ? "button button-lime" : "text-link"} href="/#contact">Ask about this option <span aria-hidden="true">↗</span></a>
              </article>
            ))}
          </div>
          <p className="pricing-note section-shell">Final scope and price depend on content readiness, functionality, integrations, and timing. Flexible payment milestones are available.</p>
        </section>

        <section className="capabilities-section" aria-labelledby="capabilities-title">
          <div className="capabilities-heading section-shell">
            <p className="section-kicker light">What we can do</p>
            <h2 id="capabilities-title">The thinking, the look,<br />and <em>the build.</em></h2>
          </div>
          <div className="capability-grid section-shell">
            {capabilities.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-cta section-shell">
          <p className="section-kicker">Not sure which one fits?</p>
          <h2>Bring the rough idea.<br /><em>We&apos;ll find the shape.</em></h2>
          <a className="button button-dark" href="/#contact">Start a conversation <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
