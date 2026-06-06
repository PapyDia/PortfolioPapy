import { useTranslation } from "react-i18next";

import { getLanguageDirection } from "../../i18n";

const LANGUAGE_STORAGE_KEY = "portfolio-language";

const languages = [
  { code: "fr", label: "FR", fullLabel: "Français" },
  { code: "en", label: "EN", fullLabel: "English" },
  { code: "ar", label: "AR", fullLabel: "العربية" },
];

function syncDocumentLanguage(languageCode) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = languageCode;
  document.documentElement.dir = getLanguageDirection(languageCode);
}

function persistLanguage(languageCode) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage?.setItem(LANGUAGE_STORAGE_KEY, languageCode);
  } catch {
    // Language persistence should never break the UI.
  }
}

function LanguageSwitcher({ className = "inline-flex", size = "default" }) {
  const { i18n, t } = useTranslation();
  const isCompact = size === "compact";
  const activeLanguage = i18n.resolvedLanguage || i18n.language || "fr";
  const selectedLanguage =
    languages.find((language) => activeLanguage.startsWith(language.code))
      ?.code ?? "fr";
  const wrapperSizeClasses = isCompact
    ? "h-9 min-[360px]:h-10"
    : "h-9 min-[360px]:h-11";
  const selectSizeClasses = isCompact
    ? "ps-3 pe-7 text-[0.7rem]"
    : "ps-3 pe-7 text-xs min-[360px]:ps-3.5 min-[360px]:pe-8";
  const arrowPositionClasses = isCompact
    ? "end-2.5"
    : "end-2.5 min-[360px]:end-3";

  const handleLanguageChange = async (languageCode) => {
    if (selectedLanguage === languageCode) {
      return;
    }

    await i18n.changeLanguage(languageCode);
    persistLanguage(languageCode);
    syncDocumentLanguage(languageCode);
  };

  return (
    <label
      className={`relative shrink-0 items-center rounded-full border border-[color:var(--app-border)] bg-[var(--app-surface)] text-[color:var(--app-text-main)] shadow-[var(--app-shadow-soft)] backdrop-blur-md transition hover:border-[color:var(--app-accent-border)] hover:bg-[var(--app-accent-soft)] focus-within:outline focus-within:outline-offset-4 focus-within:outline-[color:var(--app-focus-ring)] ${wrapperSizeClasses} ${className}`}
    >
      <span className="sr-only">{t("common.languageSwitcher")}</span>
      <select
        aria-label={t("common.changeLanguage")}
        className={`language-select h-full cursor-pointer appearance-none rounded-full bg-transparent py-0 font-semibold tracking-[0.08em] text-current outline-none ${selectSizeClasses}`}
        onChange={(event) => handleLanguageChange(event.target.value)}
        value={selectedLanguage}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 size-1.5 -translate-y-1/2 rotate-45 border-b border-e border-current opacity-70 ${arrowPositionClasses}`}
      />
    </label>
  );
}

export default LanguageSwitcher;
