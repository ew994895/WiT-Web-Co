"use client";

import { FormEvent, useEffect, useState } from "react";

const services = [
  {
    number: "01",
    title: "Strategy & positioning",
    body: "Clear goals, sharp messaging, and a site plan built around what your audience actually needs.",
    tags: ["Discovery", "Content direction", "Site architecture"],
  },
  {
    number: "02",
    title: "Web design",
    body: "Distinctive, accessible interfaces that feel unmistakably yours on every screen.",
    tags: ["UI/UX", "Responsive design", "Design systems"],
  },
  {
    number: "03",
    title: "Development",
    body: "Fast, flexible builds with clean foundations and none of the mystery-box handoff.",
    tags: ["Front-end", "CMS-ready", "Performance"],
  },
  {
    number: "04",
    title: "Launch & grow",
    body: "A smooth launch, practical training, and thoughtful support when your business evolves.",
    tags: ["Quality assurance", "Analytics", "Ongoing support"],
  },
];

const steps = [
  ["01", "Listen", "We get close to the business, the audience, and what success should look like."],
  ["02", "Shape", "We turn the right ideas into a focused direction you can see and react to."],
  ["03", "Build", "We design and develop the real thing, keeping feedback direct and progress visible."],
  ["04", "Launch", "We test the details, hand over the keys, and make sure you are ready to run."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formNotice, setFormNotice] = useState("");

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  function previewInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormNotice("Looks good — add your preferred inbox to activate inquiries before launch.");
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="WiT Web Co home">
          <span>WiT</span>
          <small>WEB CO.</small>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk</a>
        </nav>
      </header>

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
            <a className="text-link" href="#work">See our work <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-showcase" aria-label="A preview of WiT Web Co projects">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="browser-card">
            <div className="browser-bar"><i /><i /><i /><span>witweb.co / selected-work</span></div>
            <div className="browser-body">
              <p>FEATURED / 2026</p>
              <div className="browser-title">Ideas,<br />made <b>real.</b></div>
              <div className="browser-grid">
                <article><span>01</span><strong>RankIt</strong><small>Product design</small></article>
                <article><span>02</span><strong>OrthoForge</strong><small>Brand + web</small></article>
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

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading section-shell">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 id="work-title">Built with purpose.<br /><em>Styled with nerve.</em></h2>
          </div>
          <p>A few products and digital experiences shaped to feel clear, credible, and alive.</p>
        </div>

        <div className="project-list section-shell">
          <article className="project project-rankit">
            <div className="project-copy">
              <span className="project-number">01 / PRODUCT EXPERIENCE</span>
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
              <span className="project-number">02 / BRAND + WEBSITE</span>
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

          <article className="project project-portfolio">
            <div className="project-copy">
              <span className="project-number">03 / PERSONAL BRAND</span>
              <h3>Portfolio</h3>
              <p>A personality-led portfolio that makes the work easy to explore and hard to forget.</p>
              <div className="tag-row"><span>Creative direction</span><span>Web design</span><span>Motion</span></div>
            </div>
            <div className="project-art portfolio-art" aria-hidden="true">
              <div className="folio-line">ETHAN / WITKOWSKI</div>
              <div className="folio-type">Make it<br /><i>memorable.</i></div>
              <div className="folio-cursor">VIEW WORK ↗</div>
            </div>
          </article>
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="services-intro section-shell">
          <p className="section-kicker light">What we do</p>
          <h2 id="services-title">From blank page<br />to <em>big impact.</em></h2>
          <p>One focused partner for the thinking, the look, and the build.</p>
        </div>
        <div className="service-list section-shell">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <div className="service-tags">
                {service.tags.map((tag) => <small key={tag}>{tag}</small>)}
              </div>
            </article>
          ))}
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
          <div className="contact-note"><span>↳</span> Usually responds within two business days.</div>
        </div>

        <form className="contact-form" onSubmit={previewInquiry}>
          <label>
            <span>Your name</span>
            <input type="text" name="name" placeholder="How should we address you?" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label>
            <span>What do you need?</span>
            <select name="project" defaultValue="" required>
              <option value="" disabled>Choose one</option>
              <option>New website</option>
              <option>Website redesign</option>
              <option>Product or web app</option>
              <option>Brand + website</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            <span>Tell us a little more</span>
            <textarea name="message" rows={4} placeholder="What are you building, and why now?" required />
          </label>
          <button className="button button-lime" type="submit">Preview inquiry <span aria-hidden="true">↗</span></button>
          <p className="form-helper">Preview form — connect your preferred inbox before launch.</p>
          <p className="form-notice" role="status" aria-live="polite">{formNotice}</p>
        </form>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top" aria-label="Back to top"><span>WiT</span><small>WEB CO.</small></a>
        <p>Independent web design &amp; development · West Chester, PA</p>
        <div><span>© 2026 WiT Web Co.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
