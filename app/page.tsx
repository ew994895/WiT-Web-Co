import { ContactForm } from "./components/ContactForm";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const steps = [
  ["01", "Listen", "We get close to the business, the audience, and what success should look like."],
  ["02", "Shape", "We turn the right ideas into a focused direction you can see and react to."],
  ["03", "Build", "We design and develop the real thing, keeping feedback direct and progress visible."],
  ["04", "Launch", "We test the details, hand over the keys, and make sure you are ready to run."],
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
          <p className="eyebrow"><span /> Independent web studio · West Chester, PA</p>
          <h1>Websites with <em>wit.</em><br />Built to work.</h1>
          <p className="hero-intro">
            Strategy, design, and development for growing brands that are ready
            to look sharp, move fast, and mean business.
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
              <p>FROM FIRST IDEA TO LAUNCH</p>
              <div className="browser-title">Plan. Design.<br /><b>Build.</b></div>
              <div className="browser-grid">
                <article><span>01</span><strong>Launch site</strong><small>Focused + fast</small></article>
                <article><span>02</span><strong>Growth site</strong><small>Custom + scalable</small></article>
              </div>
            </div>
          </div>
          <div className="sticker sticker-top">Small studio<br /><b>big thinking</b></div>
          <div className="sticker sticker-bottom">NO<br /><b>BORING</b><br />WEBSITES</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>STRATEGY <span>✦</span> WEB DESIGN <span>✦</span> DEVELOPMENT <span>✦</span> BRAND SYSTEMS <span>✦</span> STRATEGY <span>✦</span> WEB DESIGN <span>✦</span> DEVELOPMENT <span>✦</span> BRAND SYSTEMS <span>✦</span></div>
      </div>

      <section className="manifesto section-shell" aria-labelledby="manifesto-title">
        <p className="section-kicker">A good website does more than sit there.</p>
        <div>
          <h2 id="manifesto-title">Your best digital<br />first impression.</h2>
          <p>
            It should explain what makes you different, make the next step feel
            obvious, and give people a reason to remember you. That&apos;s the bar.
          </p>
        </div>
      </section>

      <section className="offer-preview" aria-labelledby="offer-title">
        <div className="offer-heading section-shell">
          <div>
            <p className="section-kicker light">Ways to work together</p>
            <h2 id="offer-title">Choose a clear<br /><em>place to start.</em></h2>
          </div>
          <p>Focused options for launching something new, improving what you have, or building beyond the usual brochure site.</p>
        </div>
        <div className="offer-grid section-shell">
          <article>
            <span>01</span>
            <h3>Launch site</h3>
            <p>A sharp, focused website for a new business, campaign, event, or offer.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Growth site</h3>
            <p>A custom multi-page website built to make your business clearer and more credible.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Custom build</h3>
            <p>A tailored digital experience when your idea needs more than a standard website.</p>
          </article>
        </div>
        <div className="offer-action section-shell">
          <a className="button button-lime" href="/services">See services &amp; suggested pricing <span aria-hidden="true">↗</span></a>
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
