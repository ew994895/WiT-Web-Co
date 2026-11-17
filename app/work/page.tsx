import { ProjectGrid } from "../components/ProjectGrid";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { pageMetadata } from "../lib/metadata";

const title = "Selected Projects | WiT Web Co.";
const description = "Explore independent projects built by Ethan Witkowski, the web designer and developer behind WiT Web Co.";

export const metadata = pageMetadata("/work", title, description);

export default function WorkPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="section-shell page-intro" id="top">
          <h1>Selected work</h1>
          <p>Personal products and experiments I designed and built. Each one is live and ready to try.</p>
        </section>
        <section className="section-shell project-section" aria-label="Independent projects">
          <ProjectGrid />
        </section>
        <section className="closing-band" aria-labelledby="work-contact-title">
          <div className="section-shell closing-content">
            <h2 id="work-contact-title">Have a project of your own?</h2>
            <a className="button button-light" href="/contact" data-track="cta_start_project">Tell me about it <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
