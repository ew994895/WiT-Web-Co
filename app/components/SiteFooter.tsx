import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <Link className="wordmark footer-mark" href="/" aria-label="WiT Web Co home">
        <span>WiT</span><small>WEB CO.</small>
      </Link>
      <p>Independent web design &amp; development · West Chester, PA</p>
      <div><span>© 2026 WiT Web Co.</span><Link href="/#top">Back to top ↑</Link></div>
    </footer>
  );
}
