/* eslint-disable @next/next/no-html-link-for-pages */
import { PUBLIC_CONTACT_EMAIL } from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div>
          <a className="wordmark" href="/" aria-label="WiT Web Co home">
            <span>WiT</span>
            <small>WEB CO.</small>
          </a>
          <p>Serving Greater Philadelphia</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`} data-track="email_click">{PUBLIC_CONTACT_EMAIL}</a>
          <a href="/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
