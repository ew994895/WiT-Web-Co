import { ContactForm } from "./components/ContactForm";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const steps = [
  ["01", "Listen", "We get close to the business, the audience, and what success should look like."],
  ["02", "Shape", "We turn the right ideas into a focused direction you can see and react to."],
  ["03", "Build", "We design and develop the real thing, keeping feedback direct and progress visible."],
  ["04", "Launch", "We test the details, hand over the keys, and make sure you are ready to run."],
];

const services = [
  {
    number: "01",
    name: "Web Design",
    description: "Distinctive, accessible interfaces designed to make your brand clear and every next step feel obvious.",
    tags: ["Responsive", "UX / UI"],
  },
  {
    number: "02",
    name: "Web Development",
    description: "Fast, maintainable websites and progressive web apps built with clean foundations and modern best practices.",
    tags: ["Custom builds", "Web apps"],
  },
  {
    number: "03",
    name: "iOS & Android Apps",
    description: "Useful mobile products shaped from strategy and interface design through development, testing, and release.",
    tags: ["Product design", "App development"],
  },
  {
    number: "04",
    name: "Graphic Design",
    description: "Original brand and campaign graphics that feel consistent, memorable, and ready for digital or print.",
    tags: ["Brand systems", "Campaigns"],
  },
  {
    number: "05",
    name: "Photography",
    description: "Purposeful brand, product, and team imagery made to strengthen websites, social content, flyers, and print.",
    tags: ["Art direction", "Content"],
  },
  {
    number: "06",
    name: "SEO",
    description: "Technical and on-page search foundations that help the right people discover your business and take action.",
    tags: ["Technical SEO", "Content structure"],
  },
  {
    number: "07",
    name: "Social Media Marketing",
    description: "Focused strategy, creative, and campaign support that builds a recognizable presence across social channels.",
    tags: ["Strategy", "Creative"],
  },
];

export default function Home() {
  const contactEmail = process.env.CONTACT_EMAIL;

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
            <a className="button button-dark" href="#contact">Start a project <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="/services">Explore services &amp; pricing <span aria-hidden="true">↗</span></a>
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

      <section className="manifesto section-shell" aria-labelledby="manifesto-title">
        <p className="section-kicker">A strong digital presence does more than sit there.</p>
        <div>
          <h2 id="manifesto-title">Your best digital<br />first impression.</h2>
          <p>
            It should explain what makes you different, make the next step feel
            obvious, and give people a reason to remember you. That&apos;s the bar.
          </p>
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="services-intro section-shell">
          <p className="section-kicker light">Full-service digital studio</p>
          <h2 id="services-title">One partner.<br /><em>Seven ways to grow.</em></h2>
          <p>Bring us one focused project or a connected mix of strategy, creative, technology, and growth support.</p>
        </div>
        <div className="service-list section-shell">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-tags" aria-label={`${service.name} capabilities`}>
                {service.tags.map((tag) => <small key={tag}>{tag}</small>)}
              </div>
            </article>
          ))}
        </div>
        <div className="services-action section-shell">
          <a className="button button-lime" href="/services">Explore services &amp; pricing <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="work-section" aria-labelledby="work-title">
        <div className="section-heading section-shell">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 id="work-title">Ideas made<br /><em>real.</em></h2>
          </div>
          <p>Product thinking, visual systems, and expressive digital experiences built to be useful and hard to forget.</p>
        </div>
        <div className="project-list section-shell">
          <article className="project project-rankit">
            <div className="project-copy">
              <span className="project-number">01 / CONCEPT PRODUCT</span>
              <h3>RankIt</h3>
              <p>A social ranking experience that turns opinions into playful competition.</p>
              <div className="tag-row"><span>Product design</span><span>Front-end</span><span>Interaction</span></div>
            </div>
            <div className="project-art rankit-art" aria-hidden="true">
              <div className="rank-card rank-card-back"><span>02</span><b>Hot take</b><small>Most underrated movie?</small></div>
              <div className="rank-card rank-card-front"><span>01</span><b>Rank your<br />favorites.</b><small>Invite friends →</small></div>
              <div className="score-bubble">9.4</div>
            </div>
          </article>

          <article className="project project-ortho">
            <div className="project-copy">
              <span className="project-number">02 / CONCEPT BRAND + WEBSITE</span>
              <h3>OrthoForge</h3>
              <p>A confident identity and digital home built around movement, care, and progress.</p>
              <div className="tag-row"><span>Brand system</span><span>Web design</span><span>Development</span></div>
            </div>
            <div className="project-art ortho-art" aria-hidden="true">
              <div className="ortho-sun" />
              <div className="ortho-copy"><span>ORTHO / FORGE</span><strong>MOVE<br />FORWARD.</strong></div>
              <div className="ortho-pill">Expert care · Human approach</div>
            </div>
          </article>
        </div>
        <div className="work-action section-shell">
          <a className="button button-dark" href="/work">Explore selected work <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-art" aria-hidden="true">
          <div className="about-monogram">W<span>i</span>T</div>
          <p>THINK<br />MAKE<br />REPEAT</p>
          <div className="about-dot" />
        </div>
        <div className="about-copy">
          <p className="section-kicker">Small by design</p>
          <h2 id="about-title">Close collaboration.<br /><em>No agency fog.</em></h2>
          <p className="about-lead">
            WiT Web Co is an independent studio for ambitious people who want
            thoughtful work without the layers, lag, or jargon.
          </p>
          <p>
            You work directly with the person thinking through the strategy,
            shaping the design, and building the details. Fewer handoffs means
            clearer conversations and better work.
          </p>
          <a className="text-link" href="#contact">Tell us what you&apos;re building <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="process-section section-shell" aria-labelledby="process-title">
        <div className="process-heading">
          <p className="section-kicker">How it works</p>
          <h2 id="process-title">Simple process.<br /><em>Serious care.</em></h2>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
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
            <span>↳</span> {contactEmail ? "Usually responds within two business days." : "Inquiry delivery is being connected before launch."}
          </div>
        </div>

        <ContactForm contactEmail={contactEmail} />
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
