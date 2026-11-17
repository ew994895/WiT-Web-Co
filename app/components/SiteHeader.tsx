"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["About", "/about"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <a className="wordmark" href="/" aria-label="WiT Web Co home">
          <span>WiT</span>
          <small>WEB CO.</small>
        </a>

        <button
          ref={buttonRef}
          className="menu-button"
          type="button"
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          {navigation.map(([label, href]) => (
            <a href={href} aria-current={pathname === href ? "page" : undefined} key={href}>{label}</a>
          ))}
          <a
            className="nav-cta"
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            data-track="cta_start_project"
          >
            Contact <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
