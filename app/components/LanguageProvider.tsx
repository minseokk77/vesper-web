"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { content, Language } from "../content";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  copy: typeof content["ko"] | typeof content["en"];
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ko");

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "ko"
        ? "Vesper | Windows 오디오를 더 정교하게"
        : "Vesper | Refined audio for Windows";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ko" ? "en" : "ko"));
  };

  const copy = content[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, copy, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
