import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Selected Work — WiT Web Co.",
  description: "Concept products, brand systems, and independent digital work from WiT Web Co.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Work — WiT Web Co.",
    description: "Concept products, brand systems, and independent digital work from WiT Web Co.",
    type: "website",
    siteName: "WiT Web Co.",
    url: "/work",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Selected Work — WiT Web Co.",
    description: "Concept products, brand systems, and independent digital work from WiT Web Co.",
    images: [],
  },
};

export default function WorkPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="inner-hero section-shell">
          <p className="eyebrow"><span /> Selected work</p>
          <div className="inner-hero-grid">
            <h1>Purpose first.<br /><em>Nerve included.</em></h1>
            <div>
              <p>A selection of concept products, brand explorations, and independent work built to be clear, useful, and memorable.</p>
              <Link className="text-link" href="/services">See what we can build for you <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="work-section work-page-section" aria-label="Selected projects">
          <div className="project-list section-shell">
            <article className="project project-rankit">
              <div className="project-copy">
                <span className="project-number">01 / CONCEPT PRODUCT</span>
                <h2>RankIt</h2>
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
                <h2>OrthoForge</h2>
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
                <span className="project-number">03 / INDEPENDENT PORTFOLIO</span>
                <h2>Portfolio</h2>
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

        <section className="page-cta section-shell">
          <p className="section-kicker">Your project could be next</p>
          <h2>Have an idea worth<br /><em>making real?</em></h2>
          <Link className="button button-dark" href="/#contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
