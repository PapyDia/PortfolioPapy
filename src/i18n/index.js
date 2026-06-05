import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./locales/ar.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const DEFAULT_LANGUAGE = "fr";
const SUPPORTED_LANGUAGES = new Set(["fr", "en", "ar"]);

function normalizeLanguage(language) {
  return SUPPORTED_LANGUAGES.has(language) ? language : DEFAULT_LANGUAGE;
}

function getStoredLanguage() {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  try {
    return normalizeLanguage(window.localStorage?.getItem(LANGUAGE_STORAGE_KEY));
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function persistLanguage(language) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage?.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Language persistence should never break the UI.
  }
}

export function getLanguageDirection(language) {
  return language === "ar" ? "rtl" : "ltr";
}

function syncDocumentLanguage(language) {
  if (typeof document === "undefined") {
    return;
  }

  const safeLanguage = normalizeLanguage(language);

  document.documentElement.lang = safeLanguage;
  document.documentElement.dir = getLanguageDirection(safeLanguage);
}

const initialLanguage = getStoredLanguage();

syncDocumentLanguage(initialLanguage);

i18n.use(initReactI18next).init({
  fallbackLng: DEFAULT_LANGUAGE,
  lng: initialLanguage,
  resources: {
    ar: {
      translation: ar,
    },
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  const safeLanguage = normalizeLanguage(language);

  persistLanguage(safeLanguage);
  syncDocumentLanguage(safeLanguage);
});

export default i18n;
