"use client";

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
        <a className="brand" href="/" aria-label={copy.homeLabel}>
          <BrandMark />
          Vesper
        </a>
        <div className="nav-links">
          <div className="dropdown-container">
            <span className="dropdown-trigger" style={{ cursor: 'pointer' }}>
              {copy.nav.products} <span aria-hidden="true" style={{ fontSize: '0.6em', opacity: 0.6 }}>▼</span>
            </span>
            <div className="dropdown-menu">
              <a href="/dsp">DSP</a>
              <a href="/woofer">Woofer</a>
              <a href="/harness" style={{ color: '#34d399' }}>Harness</a>
            </div>
          </div>
          <a href="/#experience">{copy.nav.features}</a>
          <a href="/#faq">{copy.nav.faq}</a>
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
