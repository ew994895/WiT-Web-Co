/* eslint-disable @next/next/no-html-link-for-pages */
import { PUBLIC_CONTACT_EMAIL } from "../lib/site";

export function SiteFooter() {
  return (
    <footer>
      <a className="wordmark footer-mark" href="/" aria-label="WiT Web Co home">
        <span>WiT</span><small>WEB CO.</small>
      </a>
      <p>Websites, apps, creative &amp; digital growth · West Chester, PA</p>
      <div className="footer-links">
        <span>© 2026 WiT Web Co.</span>
        <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`} data-track="email_click">Email</a>
        <a href="/privacy">Privacy</a>
        <a href="/#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
