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
          {copy.setup.steps.map((step, index) => (
            <div className="step" key={index}>
              <span className="step-number">{('number' in step ? (step as { number?: string | number }).number : `0${index + 1}`) as string}</span>
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
