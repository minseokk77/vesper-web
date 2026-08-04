"use client";

import { useLanguage } from "./LanguageProvider";

export function FinalCta() {
  const { copy } = useLanguage();

  return (
    <section className="final-cta section-shell">
      <div className="statement">
        <h2>
          <span>{copy.final.label}</span>
          <br />
          {copy.final.title}
        </h2>
        <a className="button primary" href="#products">
          {copy.final.action} <span aria-hidden="true">↑</span>
        </a>
      </div>
    </section>
  );
}
