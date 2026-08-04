"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export function Navbar() {
  const { language, toggleLanguage, copy } = useLanguage();

  return (
    <header className="site-header">
      <nav className="nav-shell glass" aria-label={copy.navLabel}>
        <Link className="brand" href="/" aria-label={copy.homeLabel}>
          <BrandMark />
          Vesper
        </Link>
        <div className="nav-links">
          <div className="dropdown-container">
            <span className="dropdown-trigger" style={{ cursor: 'pointer' }}>
              {copy.nav.products} <span aria-hidden="true" style={{ fontSize: '0.6em', opacity: 0.6 }}>▼</span>
            </span>
            <div className="dropdown-menu">
              <Link href="/dsp">DSP</Link>
              <Link href="/woofer">Woofer</Link>
              <Link href="/harness" style={{ color: '#34d399' }}>Harness</Link>
            </div>
          </div>
          <Link href="/#experience">{copy.nav.features}</Link>
          <Link href="/#faq">{copy.nav.faq}</Link>
        </div>
        <button
          className="nav-language"
          type="button"
          aria-label={copy.switchLabel}
          onClick={toggleLanguage}
        >
          <span>{language.toUpperCase()}</span>
          <i aria-hidden="true">⇄</i>
          <strong>{copy.switchText}</strong>
        </button>
      </nav>
    </header>
  );
}
