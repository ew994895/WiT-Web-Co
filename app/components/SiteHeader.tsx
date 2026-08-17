"use client";
/* eslint-disable @next/next/no-html-link-for-pages */

import { useEffect, useRef, useState } from "react";

const navigation = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["About", "/#about"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    if (!menuOpen) return () => document.body.classList.remove("menu-open");

    const focusable = Array.from(
      navRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? [],
    );
    focusable[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="WiT Web Co home" onClick={closeMenu}>
        <span>WiT</span>
        <small>WEB CO.</small>
      </a>

      <button
        ref={buttonRef}
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-controls="main-navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav
        ref={navRef}
        id="main-navigation"
        className={menuOpen ? "nav-links is-open" : "nav-links"}
        aria-label="Main navigation"
      >
        {navigation.map(([label, href]) => (
          <a href={href} onClick={closeMenu} key={href}>{label}</a>
        ))}
        <a className="nav-cta" href="/#contact" onClick={closeMenu}>Let&apos;s talk</a>
      </nav>
    </header>
  );
}
