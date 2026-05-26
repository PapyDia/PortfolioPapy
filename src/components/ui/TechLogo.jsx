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
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-ice-300/20 bg-white/4 text-ice-50 shadow-[0_0_24px_rgba(56,189,248,0.12),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:border-cyan-glow/40 hover:bg-cyan-glow/10 hover:shadow-[0_0_28px_rgba(56,189,248,0.2),inset_0_1px_0_rgba(255,255,255,0.12)] ${sizeClassName} ${className}`}
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
          className="max-w-full truncate text-xs font-semibold leading-none text-ice-100 sm:text-sm"
        >
          {getInitials(label)}
        </span>
      )}

      {showLabel ? (
        <span className="min-w-0 max-w-28 truncate text-xs font-semibold leading-none text-ice-100 sm:max-w-36 sm:text-sm">
          {label}
        </span>
      ) : null}
    </span>
  );
});

export default TechLogo;
