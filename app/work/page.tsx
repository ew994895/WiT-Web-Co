import type { Metadata } from "next";
/* eslint-disable @next/next/no-html-link-for-pages */
import { ProjectGrid } from "../components/ProjectGrid";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Live Website Demos — WiT Web Co.",
  description: "Explore four live concept websites designed and built by WiT Web Co. for hospitality, media, electrical, and HVAC brands.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Live Website Demos — WiT Web Co.",
    description: "Explore four complete concept websites designed and built by WiT Web Co.",
    type: "website",
    siteName: "WiT Web Co.",
    url: "/work",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Live Website Demos — WiT Web Co.",
    description: "Explore four complete concept websites designed and built by WiT Web Co.",
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
          <p className="eyebrow"><span /> Live concept showcase</p>
          <div className="inner-hero-grid">
            <h1>Don&apos;t take our<br /><em>word for it.</em></h1>
            <div>
              <p>Open each complete demo, click around, and picture what the same level of strategy, personality, and polish could do for your business.</p>
              <a className="text-link" href="#concept-demos">Explore every demo <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="work-showcase" id="concept-demos" aria-labelledby="concept-title">
          <div className="showcase-intro section-shell">
            <p className="section-kicker light">Designed and built by WiT Web Co.</p>
            <h2 id="concept-title">Four industries.<br /><em>Four distinct systems.</em></h2>
            <p>These are self-initiated concept projects—not paid client claims. They exist to show the kind of complete, responsive digital work WiT Web Co. can create.</p>
          </div>
          <div className="section-shell"><ProjectGrid /></div>
        </section>

        <section className="page-cta section-shell">
          <p className="section-kicker">Your business deserves its own direction</p>
          <h2>Inspired by a demo?<br /><em>Let&apos;s make yours.</em></h2>
          <a className="button button-dark" href="/#contact" data-track="cta_start_project">Start a conversation <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
