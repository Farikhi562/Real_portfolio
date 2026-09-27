"use client";

import { useState } from "react";
import { navigation, profile } from "@/data/profile";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <a className="brand" href="/#top" aria-label={`${profile.preferredName}, back to top`} onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">Z</span>
          <span className="brand-name">ZAN<span className="brand-period">.</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item, index) => (
            <a
              className={index === navigation.length - 1 ? "nav-contact" : undefined}
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              {index === navigation.length - 1 ? <span aria-hidden="true"> ↗</span> : null}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
