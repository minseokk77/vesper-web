"use client";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ProductCards } from "./components/ProductCards";
import { Experience } from "./components/Experience";
import { Setup } from "./components/Setup";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { useLanguage } from "./components/LanguageProvider";

export default function Home() {
  const { copy } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#main-content">
        {copy.skip}
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <ProductCards />
        <Experience />
        <Setup />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
