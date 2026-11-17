import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../lib/metadata";
import { services } from "../data/services";

const title = "Web Design Services in Greater Philadelphia | WiT Web Co.";
const description = "Small business websites, redesigns, portfolios, and custom integrations in Greater Philadelphia. Each project is scoped and quoted individually.";

export const metadata = pageMetadata("/services", title, description);

const projectSteps = [
  {
    title: "Scope and quote",
    description: "We talk through your business, your goals, and any site you already have. Your proposal covers pages, features, who supplies content, revisions, timing, payment milestones, and launch support.",
  },
  {
    title: "Design and build",
    description: "You review the design and try the working site before it goes live. Your domain and service accounts stay under your control, with access for me to do the work.",
  },
  {
    title: "Launch and handoff",
    description: "I check the site before launch. After final payment, you get the source, account access, deployment instructions, and licensing details a future developer would need.",
  },
  {
    title: "After launch",
    description: "Send me a change request whenever you need one. I’ll quote the work before scheduling it. Simple sites have no required monthly WiT maintenance plan. We agree on suitable care for stores, databases, and other complex sites.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="section-shell page-intro" id="top">
          <p className="eyebrow">Greater Philadelphia</p>
          <h1>Web design services</h1>
          <p>I build new sites and improve existing ones for small businesses. We agree on the scope, timing, and quote before work starts.</p>
        </section>

        <section className="section-shell split-section section-block ruled-top" aria-labelledby="services-title">
          <h2 id="services-title">What I build</h2>
          <div className="text-list">
            {services.map(({ name, description }) => (
              <article key={name}>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ownership-band" id="ownership-details" aria-labelledby="ownership-details-title">
          <div className="section-shell split-section">
            <div>
              <h2 id="ownership-details-title">From first call to handoff</h2>
              <p>Domain renewal, hosting, business email, and other services may have ongoing fees. Your proposal lists the expected costs and who bills them.</p>
            </div>
            <div className="text-list">
              {projectSteps.map(({ title, description }) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-band" aria-labelledby="services-contact-title">
          <div className="section-shell closing-content">
            <h2 id="services-contact-title">Tell me what you need.</h2>
            <a className="button button-light" href="/contact" data-track="cta_start_project">Start a project <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
