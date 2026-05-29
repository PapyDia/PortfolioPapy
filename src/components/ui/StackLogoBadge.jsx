import { stackIcons } from "../../constants/stackIcons";

function getInitials(name = "") {
  const parts = name.match(/[A-Za-z0-9]+/g) ?? [];

  if (parts.length === 0) {
    return "?";
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return parts
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function StackLogoBadge({
  name,
  className = "",
  sizeClassName = "size-16 sm:size-20",
}) {
  const iconConfig = stackIcons[name];
  const Icon = iconConfig?.Icon;
  const iconClassName =
    iconConfig?.iconClassName ?? "text-[color:var(--app-tech-badge-text)]";

  return (
    <div
      className={`group relative flex shrink-0 flex-col items-center justify-center gap-1 overflow-hidden rounded-full border border-[color:var(--app-tech-badge-border)] bg-[var(--app-tech-badge-bg)] p-1.5 text-center text-[color:var(--app-tech-badge-text)] shadow-[var(--app-tech-badge-shadow)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:scale-103 hover:border-[color:var(--app-accent-border)] hover:bg-[var(--app-accent-soft)] hover:shadow-[var(--app-shadow-soft)] sm:p-2 ${sizeClassName} ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-1 rounded-full border border-[color:var(--app-tech-badge-inner-border)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[18%] top-[10%] h-[28%] w-[56%] rounded-full bg-[var(--app-shine-soft)] blur-md"
      />

      <span className="relative grid size-6 shrink-0 place-items-center sm:size-8 lg:size-9">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-[var(--app-glow-cyan)] blur-lg"
        />
        {Icon ? (
          <Icon
            aria-hidden="true"
            className={`relative z-10 size-5 sm:size-6 lg:size-7 ${iconClassName}`}
            focusable="false"
          />
        ) : (
          <span
            aria-hidden="true"
            className="relative z-10 text-[0.65rem] font-bold text-[color:var(--app-tech-badge-text)] sm:text-xs"
          >
            {getInitials(name)}
          </span>
        )}
      </span>

      <span className="relative z-10 max-w-full px-0.5 text-[0.52rem] font-medium leading-tight wrap-break-word text-[color:var(--app-tech-badge-text)] sm:text-[0.6rem] lg:text-[0.68rem]">
        {name}
      </span>
    </div>
  );
}

export default StackLogoBadge;
