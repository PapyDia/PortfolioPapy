import { FiMoon, FiSun } from "react-icons/fi";

import useTheme from "../../hooks/useTheme";

function ThemeToggle({ className = "" }) {
  const { isLight, toggleTheme } = useTheme();
  const Icon = isLight ? FiMoon : FiSun;
  const label = isLight ? "Activer le mode sombre" : "Activer le mode clair";

  return (
    <button
      aria-label={label}
      className={`grid size-9 shrink-0 touch-manipulation place-items-center rounded-full border border-[color:var(--app-border)] bg-[var(--app-surface)] text-[color:var(--app-text-main)] backdrop-blur-md transition hover:border-[color:var(--app-accent-border)] hover:bg-[var(--app-accent-soft)] focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-[color:var(--app-focus-ring)] min-[360px]:size-11 ${className}`}
      onClick={toggleTheme}
      title={label}
      type="button"
    >
      <Icon
        aria-hidden="true"
        className="size-4 min-[360px]:size-5"
        focusable="false"
      />
    </button>
  );
}

export default ThemeToggle;
