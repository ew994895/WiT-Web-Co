import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { WebsitePreview } from "./components/WebsitePreview";

const offerings = [
  {
    title: "Websites & redesigns",
    description: "Show people what you do, where you work, and how to get in touch. Built for customers looking you up on their phones.",
  },
  {
    title: "Portfolios & catalogs",
    description: "Give customers a place to browse your projects or products and ask about a piece, a service, or a custom order.",
  },
  {
    title: "Tools & updates",
    description: "Add online booking or payments, pick up where an old site left off, or build a tool for a job you do every day.",
  },
];

const questions = [
  {
    question: "How much will my website cost?",
    answer: "I quote each project individually. We agree on the pages, features, timeline, and payment milestones before work starts.",
  },
  {
    question: "Can you work with my existing site?",
    answer: "Yes. I’ll look at what you have first. Updating your current site or keeping the tools you already use may be the best fit.",
  },
  {
    question: "What ongoing costs should I expect?",
    answer: "Your proposal lists expected costs for things like domain renewal, hosting, email, or payment processing. Simple sites have no required monthly WiT maintenance plan. We agree on a care plan for more complex sites.",
  },
  {
    question: "Can someone else maintain my site later?",
    answer: "Yes. Once the project is paid in full, I hand over the source, access, documentation, and licensing details so you or another developer can run it.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="home-hero section-shell" id="top">
          <div className="hero-copy">
            <h1>Web design for <span>Greater Philadelphia.</span></h1>
            <p className="hero-intro">I’m Ethan Witkowski. I design and build websites for small businesses, from the shops on your block to the contractors who work across the region.</p>
            <div className="actions">
              <a className="button" href="/contact" data-track="cta_start_project">
                Discuss your website <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="/work" data-track="view_work">
                See my work <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <WebsitePreview />
        </section>

        <section className="service-band" aria-labelledby="service-area-title">
          <div className="section-shell service-band-inner">
            <h2 id="service-area-title">Where I work</h2>
            <p>Philadelphia and the surrounding suburbs.</p>
          </div>
        </section>

        <section className="section-shell section-block" id="possibilities" aria-labelledby="home-services-title">
          <div className="section-heading">
            <h2 id="home-services-title">What I build</h2>
            <a className="text-link" href="/services">View services <span aria-hidden="true">↗</span></a>
          </div>
          <div className="offerings">
            {offerings.map(({ title, description }) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ownership-band" id="ownership" aria-labelledby="ownership-title">
          <div className="section-shell split-section">
            <h2 id="ownership-title">Your website stays yours.</h2>
            <div>
              <p>You keep control of your domain and accounts. After final payment, I hand over the project files and show you how to run the site. You can come back to me for updates whenever you need them.</p>
              <a className="text-link" href="/services#ownership-details">How the handoff works <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="section-shell split-section section-block" id="about" aria-labelledby="about-title">
          <h2 id="about-title">Work directly with me.</h2>
          <div>
            <p>I handle the design, code, and launch. If you have a question about the project or want to change something, you’ll talk to the person who built it.</p>
            <a className="text-link" href="/about">Meet Ethan <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="section-shell split-section faq-section" aria-labelledby="faq-title">
          <h2 id="faq-title">Common questions</h2>
          <div className="faq-list">
            {questions.map(({ question, answer }) => (
              <details key={question}>
                <summary>{question}<span aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing-band" id="contact" aria-labelledby="contact-title">
          <div className="section-shell closing-content">
            <h2 id="contact-title">Have a site in mind?</h2>
            <a className="button button-light" href="/contact" data-track="cta_start_project">
              Tell me about it <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
