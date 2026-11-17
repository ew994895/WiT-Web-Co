/* eslint-disable @next/next/no-html-link-for-pages */
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="page-intro section-shell">
        <p className="eyebrow">Error 404</p>
        <h1>Page not found</h1>
        <div className="actions">
          <a className="button" href="/">Back home <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="/services">View services <span aria-hidden="true">↗</span></a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
