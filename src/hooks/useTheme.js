import { useCallback, useEffect, useState } from "react";

const THEME_STORAGE_KEY = "portfolio-theme";
const DEFAULT_THEME = "dark";
const VALID_THEMES = new Set(["dark", "light"]);
const THEME_COLORS = {
  dark: "#020617",
  light: "#f8fafc",
};

function isValidTheme(theme) {
  return VALID_THEMES.has(theme);
}

function getStoredTheme() {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  try {
    const storedTheme = window.localStorage?.getItem(THEME_STORAGE_KEY);

    return isValidTheme(storedTheme) ? storedTheme : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

function applyTheme(theme) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme]);
}

function persistTheme(theme) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage?.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Theme persistence should never break the UI.
  }
}

function useTheme() {
  const [theme, setThemeState] = useState(getStoredTheme);

  const setTheme = useCallback((nextTheme) => {
    const safeTheme = isValidTheme(nextTheme) ? nextTheme : DEFAULT_THEME;

    setThemeState(safeTheme);
    applyTheme(safeTheme);
    persistTheme(safeTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [setTheme, theme]);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return {
    theme,
    isLight: theme === "light",
    setTheme,
    toggleTheme,
  };
}

export default useTheme;
