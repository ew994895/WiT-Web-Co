import { ContactForm } from "./components/ContactForm";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { ProjectGrid } from "./components/ProjectGrid";
import { getContactEmail } from "./lib/site";

const steps = [
  ["01", "Listen", "We get close to the business, the audience, and what success should look like."],
  ["02", "Shape", "We turn the strongest ideas into a focused direction you can see and react to."],
  ["03", "Build", "We design and develop the real thing with direct feedback and visible progress."],
  ["04", "Launch", "We test the details, connect measurement, and make sure you are ready to run."],
];

const services = [
  {
    number: "01",
    name: "Web Design",
    description: "Distinctive, accessible interfaces that make your brand clear and the next step obvious.",
  },
  {
    number: "02",
    name: "Web Development",
    description: "Fast websites and progressive web apps built on clean, maintainable foundations.",
  },
  {
    number: "03",
    name: "iOS & Android Apps",
    description: "Useful mobile products taken from strategy and interface design through release.",
  },
  {
    number: "04",
    name: "Graphic Design",
    description: "Memorable brand, campaign, digital, and print graphics with a consistent point of view.",
  },
  {
    number: "05",
    name: "Photography",
    description: "Purposeful brand, product, and team imagery for websites, social content, and print.",
  },
  {
    number: "06",
    name: "SEO",
    description: "Technical and on-page foundations that help the right people discover your business.",
  },
  {
    number: "07",
    name: "Social Media Marketing",
    description: "Focused strategy and creative that build a recognizable presence across social channels.",
  },
];

export default function Home() {
  const contactEmail = getContactEmail();

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />

      <main id="main-content">
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Independent digital studio · West Chester, PA</p>
          <h1>Digital work with <em>wit.</em><br />Built to grow.</h1>
          <p className="hero-intro">
            Websites, iOS and Android apps, brand design, content, and marketing
            for growing businesses ready to look sharp and move with purpose.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact" data-track="cta_start_project">Start a project <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/services" data-track="view_services">Explore services &amp; pricing <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero-showcase" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="browser-card">
            <div className="browser-bar"><i /><i /><i /><span>witweb.co / services</span></div>
            <div className="browser-body">
              <p>ONE STUDIO · STRATEGY TO LAUNCH</p>
              <div className="browser-title">Web. Brand.<br /><b>Apps.</b></div>
              <div className="browser-grid">
                <article><span>01</span><strong>Web</strong><small>Sharp + responsive</small></article>
                <article><span>02</span><strong>Mobile</strong><small>iOS + Android</small></article>
              </div>
            </div>
          </div>
          <div className="sticker sticker-top">One studio<br /><b>full range</b></div>
          <div className="sticker sticker-bottom">MAKE<br /><b>IT MEAN</b><br />BUSINESS</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>WEB DESIGN <span>✦</span> APP DEVELOPMENT <span>✦</span> SEO <span>✦</span> GRAPHIC DESIGN <span>✦</span> PHOTOGRAPHY <span>✦</span> SOCIAL MEDIA <span>✦</span> WEB DESIGN <span>✦</span> APP DEVELOPMENT <span>✦</span> SEO <span>✦</span> GRAPHIC DESIGN <span>✦</span> PHOTOGRAPHY <span>✦</span> SOCIAL MEDIA <span>✦</span></div>
      </div>

      <section className="home-services" id="services" aria-labelledby="services-title">
        <div className="home-services-heading section-shell">
          <div>
            <p className="section-kicker light">What we do</p>
            <h2 id="services-title">Everything your<br /><em>digital presence needs.</em></h2>
          </div>
          <div className="home-services-intro">
            <p>Choose one focused service or bring them together into one clear, connected project.</p>
            <a className="text-link text-link-light" href="/services">Details &amp; pricing <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="home-service-grid section-shell">
          {services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="demo-section" aria-labelledby="demo-title">
        <div className="section-heading section-shell">
          <div>
            <p className="section-kicker">Live concept demos</p>
            <h2 id="demo-title">See what we can<br /><em>actually build.</em></h2>
          </div>
          <p>Four complete, interactive concept websites across local service, hospitality, and media brands. Open every demo and explore the work yourself.</p>
        </div>
        <div className="section-shell">
          <ProjectGrid compact />
        </div>
        <div className="work-action section-shell">
          <a className="button button-dark" href="/work" data-track="view_work">View the full showcase <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-art" aria-hidden="true">
          <div className="about-monogram">E<span>W</span></div>
          <p>THINK<br />MAKE<br />LAUNCH</p>
          <div className="about-dot" />
        </div>
        <div className="about-copy">
          <p className="section-kicker">Led by Ethan Witkowski</p>
          <h2 id="about-title">Direct collaboration.<br /><em>No agency fog.</em></h2>
          <p className="about-lead">WiT Web Co. is an independent West Chester studio for people who want thoughtful digital work without the layers, lag, or jargon.</p>
          <p>You work directly with the person shaping the strategy, design, and build. That means clearer conversations, fewer handoffs, and a website that feels like your business—not a template.</p>
          <a className="text-link" href="#contact" data-track="cta_start_project">Tell me what you&apos;re building <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="process-section section-shell" aria-labelledby="process-title">
        <div className="process-heading">
          <p className="section-kicker">How it works</p>
          <h2 id="process-title">Simple process.<br /><em>Serious care.</em></h2>
        </div>
        <div className="process-grid">
          {steps.map(([number, step, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{step}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="section-kicker light">Have a project in mind?</p>
          <h2 id="contact-title">Let&apos;s make<br /><em>something good.</em></h2>
          <p>Share the rough idea, the big ambition, or the thing that is not working. We&apos;ll start there.</p>
          <div className="contact-note">
            <span>↳</span> Usually responds within two business days.
          </div>
        </div>

        <ContactForm contactEmail={contactEmail} />
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
