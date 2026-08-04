"use client";

import { useLanguage } from "./LanguageProvider";

const RELEASES = {
  dsp: "https://github.com/minseokk77/vesper-dsp/releases/latest",
  woofer: "https://github.com/minseokk77/vesper-woofer/releases/latest",
  harness: "https://github.com/minseokk77/vesper-harness",
};

export function ProductCards() {
  const { copy } = useLanguage();

  return (
    <section className="products section-shell" id="products">
      <article className="product-card">
        <div className="card-orb orb-blue" />
        <div className="product-top">
          <span className="product-icon">⏣</span>
          <span className="product-badge">HEADPHONES + SPEAKERS</span>
        </div>
        <div className="product-copy">
          <p>{copy.products.dsp.category}</p>
          <h2>Vesper DSP</h2>
          <span>{copy.products.dsp.description}</span>
        </div>
        <ul className="feature-list">
          {copy.products.dsp.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <a href={RELEASES.dsp}>
          {copy.products.dsp.action} <span aria-hidden="true">↗</span>
        </a>
      </article>

      <article className="product-card woofer-card">
        <div className="card-orb orb-violet" />
        <div className="product-top">
          <span className="product-icon">◎</span>
          <span className="product-badge">2.1 CHANNEL</span>
        </div>
        <div className="product-copy">
          <p>{copy.products.woofer.category}</p>
          <h2>Vesper Woofer</h2>
          <span>{copy.products.woofer.description}</span>
        </div>
        <ul className="feature-list">
          {copy.products.woofer.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <a href={RELEASES.woofer}>
          {copy.products.woofer.action} <span aria-hidden="true">↗</span>
        </a>
      </article>

      <article className="product-card harness-card">
        <div className="card-orb orb-emerald" />
        <div className="product-top">
          <span className="product-icon">⌘</span>
          <span className="product-badge">AI WORKFLOW</span>
        </div>
        <div className="product-copy">
          <p>{copy.products.harness.category}</p>
          <h2>Vesper Harness</h2>
          <span>{copy.products.harness.description}</span>
        </div>
        <ul className="feature-list">
          {copy.products.harness.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <a href={RELEASES.harness}>
          {copy.products.harness.action} <span aria-hidden="true">↗</span>
        </a>
      </article>
    </section>
  );
}
