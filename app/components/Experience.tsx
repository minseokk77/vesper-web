"use client";

import { useLanguage } from "./LanguageProvider";

export function Experience() {
  const { copy } = useLanguage();

  return (
    <section className="experience section-shell" id="experience">
      <div className="experience-heading">
        <p className="section-kicker">{copy.experience.label}</p>
        <h2>
          {copy.experience.titleLineOne}
          <br />
          {copy.experience.titleLineTwo}
        </h2>
        <p>{copy.experience.description}</p>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>{copy.experience.features[0].title}</h3>
          <p>{copy.experience.features[0].description}</p>
        </div>
        <div className="feature-card">
          <h3>{copy.experience.features[1].title}</h3>
          <p>{copy.experience.features[1].description}</p>
        </div>
        <div className="feature-card">
          <h3>{copy.experience.features[2].title}</h3>
          <p>{copy.experience.features[2].description}</p>
        </div>
      </div>
    </section>
  );
}
