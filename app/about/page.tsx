import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../lib/metadata";

const title = "About Ethan Witkowski | WiT Web Co.";
const description = "Ethan Witkowski, the independent designer and developer behind WiT Web Co., works with small businesses across Greater Philadelphia.";

export const metadata = pageMetadata("/about", title, description);

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="section-shell page-intro" id="top">
          <h1>I’m Ethan Witkowski.</h1>
          <p>I run WiT Web Co. and work directly with small business owners across Greater Philadelphia.</p>
        </section>

        <section className="section-shell split-section section-block ruled-top" aria-labelledby="about-approach-title">
          <h2 id="about-approach-title">How I work</h2>
          <div>
            <p>I start by asking how customers find you and what they usually need to know before they call, visit, or book. That helps us decide what belongs on your site and what to build first.</p>
            <p>I handle the design, development, and launch myself. You’ll see the site in progress, have a chance to try it, and get the files and access to run it after launch.</p>
            <a className="text-link" href="https://ew994895.github.io/WittysWebsite/" data-track="open_project">See my personal portfolio <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="closing-band" aria-labelledby="about-contact-title">
          <div className="section-shell closing-content">
            <h2 id="about-contact-title">Let’s talk about your website.</h2>
            <a className="button button-light" href="/contact" data-track="cta_start_project">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
