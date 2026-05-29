import { forwardRef } from "react";

function getInitials(label = "") {
  const parts = label.match(/[A-Za-z0-9]+/g) ?? [];

  if (parts.length === 0) {
    return "?";
  }

  const initials =
    parts.length === 1
      ? parts[0].slice(0, 2)
      : parts
          .map((part) => part[0])
          .join("")
          .slice(0, 2);

  return initials.toUpperCase();
}

const TechLogo = forwardRef(function TechLogo(
  {
    label,
    Icon,
    className = "",
    iconClassName = "",
    showLabel = false,
    ...props
  },
  ref,
) {
  const sizeClassName = showLabel
    ? "min-h-11 min-w-11 max-w-full gap-2 px-3 py-2 sm:min-h-14 sm:min-w-14 sm:px-4"
    : "size-11 sm:size-14";

  return (
    <span
      {...props}
      aria-label={label}
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[color:var(--app-hero-orb-border)] bg-[var(--app-surface)] text-[color:var(--app-text-main)] shadow-[var(--app-tech-badge-shadow)] backdrop-blur-xl transition duration-300 hover:border-[color:var(--app-accent-border)] hover:bg-[var(--app-accent-soft)] hover:shadow-[var(--app-shadow-soft)] ${sizeClassName} ${className}`}
      ref={ref}
      role="img"
    >
      {Icon ? (
        <Icon
          aria-hidden="true"
          className={`size-5 shrink-0 sm:size-6 ${iconClassName}`}
          focusable="false"
        />
      ) : (
        <span
          aria-hidden="true"
          className="max-w-full truncate text-xs font-semibold leading-none text-[color:var(--app-tech-badge-text)] sm:text-sm"
        >
          {getInitials(label)}
        </span>
      )}

      {showLabel ? (
        <span className="min-w-0 max-w-28 truncate text-xs font-semibold leading-none text-[color:var(--app-tech-badge-text)] sm:max-w-36 sm:text-sm">
          {label}
        </span>
      ) : null}
    </span>
  );
});

export default TechLogo;
