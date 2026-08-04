"use client";

import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="site-footer section-shell">
      <p>{copy.footer}</p>
      <div>
        <a href="https://github.com/minseokk77/vesper-dsp">DSP GitHub</a>
        <a href="https://github.com/minseokk77/vesper-woofer">Woofer GitHub</a>
        <a href="https://github.com/minseokk77/vesper-harness">Harness GitHub</a>
      </div>
    </footer>
  );
}
