/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "About Ethan — WiT Web Co.",
  description: "Meet Ethan Witkowski, the independent West Chester developer behind WiT Web Co. Local service, real website ownership, and one direct connection.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Ethan — WiT Web Co.", description: "Meet your local web person. Hands-on from the first idea to launch and beyond.", url: "/about" },
  twitter: { card: "summary_large_image", title: "About Ethan — WiT Web Co.", description: "Meet your local web person. Hands-on from the first idea to launch and beyond." },
};

export default function AboutPage() {
  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <SiteHeader />
    <main id="main-content">
      <section className="founder-section about-page" id="top" aria-labelledby="about-title"><div className="section-shell founder-layout"><div className="founder-art" aria-hidden="true"><span>LOCAL ROOTS.<br />HANDS-ON FROM DAY ONE.</span><div>E<span>W</span><i>✳</i></div><p>ETHAN WITKOWSKI<br />DESIGNER. DEVELOPER. YOUR DIRECT LINE.</p></div><div className="founder-copy"><p className="section-kicker">MEET YOUR WEB PERSON</p><h1 id="about-title">Hey, I’m Ethan.<br /><em>The WiT in the work.</em></h1><p className="founder-lead">A local business deserves a local person who cares how it shows up.</p><p>I’m an independent developer in West Chester, PA. With WiT Web Co., you work directly with the person designing, building, and looking after your website.</p><p>I want to help local owners take back their online presence: a site that reflects the business, clear costs, and the freedom to decide what comes next.</p><p>You don’t need a perfect brief or the technical vocabulary. Tell me what you do. We’ll start there.</p><div className="about-links"><a className="text-link" href="/contact">Introduce yourself ↗</a><a className="text-link" href="https://ew994895.github.io/WittysWebsite/" target="_blank" rel="noopener noreferrer" data-track="open_project" aria-label="Explore my personal portfolio (opens in a new tab)">Explore my personal portfolio ↗</a></div></div></div></section>
      <section className="page-cta section-shell">
        <p className="section-kicker">LOCAL ROOTS. YOUR NEXT CHAPTER.</p>
        <h2>Let’s talk about<br /><em>what you’re building.</em></h2>
        <a className="button button-dark" href="/contact" data-track="cta_start_project">Introduce your business ↗</a>
      </section>
    </main>
    <SiteFooter />
  </>;
}
