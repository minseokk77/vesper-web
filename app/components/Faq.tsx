"use client";

import { useLanguage } from "./LanguageProvider";

export function Faq() {
  const { copy } = useLanguage();

  return (
    <section className="faq section-shell" id="faq">
      <h2>{copy.faq.title}</h2>
      <div className="faq-grid">
        {copy.faq.items.map((faq) => (
          <div className="faq-item" key={faq.question}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
