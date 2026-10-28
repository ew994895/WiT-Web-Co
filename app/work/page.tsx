import type { Metadata } from "next";
/* eslint-disable @next/next/no-html-link-for-pages */
import { ProjectGrid } from "../components/ProjectGrid";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Selected Projects — WiT Web Co.",
  description: "Explore WiT Lead Finder, Witty Games, Roster IQ, and Witty’s Website: independent projects by Ethan Witkowski.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Projects — WiT Web Co.",
    description: "Local business research, browser games, fantasy football, and a personal portfolio by Ethan Witkowski.",
    type: "website",
    siteName: "WiT Web Co.",
    url: "/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Projects — WiT Web Co.",
    description: "Local business research, browser games, fantasy football, and a personal portfolio by Ethan Witkowski.",
  },
};

export default function WorkPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="work-intro section-shell">
          <div className="work-intro-top"><p className="eyebrow"><span /> The work</p><span>INDEPENDENTLY BUILT BY ETHAN WITKOWSKI</span></div>
          <div className="work-intro-grid">
            <h1>Good ideas.<br /><em>Go explore.</em></h1>
            <div><p>Find a local connection. Take a play break. Explore a new idea. These are independent products I’ve built—open one and see what’s possible.</p>
              <nav className="project-jump-links" aria-label="Explore projects"><a href="#leads">01 / Connect</a><a href="#games">02 / Play</a><a href="#roster">03 / Research</a><a href="#portfolio">04 / Discover</a></nav>
            </div>
          </div>
        </section>
        <section className="work-gallery section-shell" aria-label="Independent projects">
          <ProjectGrid />
          <p className="work-ownership">Personal products and experiments by Ethan Witkowski. Built to be used, and always evolving.</p>
        </section>
        <section className="work-closing section-shell">
          <div><p className="section-kicker">Your idea could be next</p><h2>Let’s build something<br /><em>worth opening.</em></h2></div>
          <a className="button button-dark" href="/#contact" data-track="cta_start_project">Tell me your idea <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
