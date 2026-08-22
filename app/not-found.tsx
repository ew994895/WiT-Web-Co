/* eslint-disable @next/next/no-html-link-for-pages */
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found section-shell">
        <p className="section-kicker">404 · Wrong turn</p>
        <h1>This page took<br /><em>the night off.</em></h1>
        <p>The link may have moved, but the good work is still here.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="/">Back home <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="/work">Explore work <span aria-hidden="true">↗</span></a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
