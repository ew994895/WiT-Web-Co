import type { Metadata } from "next";
import { ContactCard } from "../components/ContactCard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { getContactEmail } from "../lib/site";

export const metadata: Metadata = {
  title: "Let’s Talk — WiT Web Co.",
  description: "Tell Ethan about your business, your current website, and what you’d like to build. Every WiT Web Co. project is scoped and quoted individually.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Let’s Talk — WiT Web Co.", description: "A rough idea is enough. Start a conversation about your website.", url: "/contact" },
  twitter: { card: "summary_large_image", title: "Let’s Talk — WiT Web Co.", description: "A rough idea is enough. Start a conversation about your website." },
};

export default function ContactPage() {
  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <SiteHeader />
    <main id="main-content">
      <section className="contact-section contact-page" id="top" aria-labelledby="contact-title"><div className="contact-copy"><p className="section-kicker light">YOUR NEXT CHAPTER STARTS WITH A HELLO</p><h1 id="contact-title">Let’s put<br />your business<br /><em>in its own space.</em></h1><p>Have a website that doesn’t feel like you? An idea that needs a home? Tell me about it.</p><span className="contact-star" aria-hidden="true">✳</span></div><ContactCard contactEmail={getContactEmail()} /></section>
    </main>
    <SiteFooter />
  </>;
}
