import type { Metadata } from "next";
/* eslint-disable @next/next/no-html-link-for-pages */
import { ProjectGrid } from "../components/ProjectGrid";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Selected Projects — WiT Web Co.",
  description: "Explore Witty Games, Roster IQ, and Witty’s Website: independent projects by Ethan Witkowski.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected Projects — WiT Web Co.",
    description: "Witty Games, Roster IQ, and a personal portfolio by Ethan Witkowski.",
    type: "website",
    siteName: "WiT Web Co.",
    url: "/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Projects — WiT Web Co.",
    description: "Witty Games, Roster IQ, and a personal portfolio by Ethan Witkowski.",
  },
};

export default function WorkPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="inner-hero section-shell">
          <p className="eyebrow"><span /> Independent projects</p>
          <div className="inner-hero-grid">
            <h1>Ideas made<br /><em>into real things.</em></h1>
            <div>
              <p>Explore the games, tools, and personal work I’m building. Each project offers a different look at how I turn an idea into a usable experience.</p>
              <a className="text-link" href="#selected-projects">Explore every site <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="work-showcase" id="selected-projects" aria-labelledby="projects-title">
          <div className="showcase-intro section-shell">
            <p className="section-kicker light">Built by Ethan Witkowski</p>
            <h2 id="projects-title">Three projects.<br /><em>A personal point of view.</em></h2>
            <p>These are my own products and portfolio, not client commissions. They show my approach to playful interactions, information design, and building for the web. The projects continue to evolve.</p>
          </div>
          <div className="section-shell"><ProjectGrid /></div>
        </section>

        <section className="page-cta section-shell">
          <p className="section-kicker">Your business deserves its own direction</p>
          <h2>Have an idea of your own?<br /><em>Let&apos;s make yours.</em></h2>
          <a className="button button-dark" href="/#contact" data-track="cta_start_project">Start a conversation <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
