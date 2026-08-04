"use client";

import { useLanguage } from "./LanguageProvider";

export function Setup() {
  const { copy } = useLanguage();

  return (
    <section className="setup section-shell">
      <div className="setup-card">
        <div className="setup-copy">
          <p className="section-kicker">{copy.setup.label}</p>
          <h2>{copy.setup.title}</h2>
          <p>{copy.setup.description}</p>
          <a className="button primary" href="#products">
            {copy.setup.action} <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="setup-steps">
          {copy.setup.steps.map((step) => (
            <div className="step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
