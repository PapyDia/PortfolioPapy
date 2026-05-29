const variants = {
  primary:
    "bg-[var(--app-button-primary-bg)] text-[color:var(--app-button-primary-text)] shadow-[var(--app-shadow-soft)] hover:-translate-y-0.5 hover:bg-[var(--app-button-primary-hover-bg)]",
  secondary:
    "border border-[color:var(--app-button-secondary-border)] bg-[var(--app-button-secondary-bg)] text-[color:var(--app-button-secondary-text)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-[color:var(--app-button-secondary-hover-border)] hover:bg-[var(--app-button-secondary-hover-bg)]",
};

function Button({
  children,
  className = "",
  href,
  variant = "primary",
  ...props
}) {
  const classes = `inline-flex min-h-12 max-w-full touch-manipulation items-center justify-center rounded-button px-5 text-center text-sm font-semibold leading-snug break-words whitespace-normal transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--app-focus-ring)] sm:px-6 ${variants[variant] ?? variants.primary} ${className}`;
  const hasHref = typeof href === "string" && href.trim().length > 0;
  const normalizedHref = hasHref ? href.trim() : undefined;

  if (href !== undefined && !hasHref) {
    return null;
  }

  // An href turns the button into a link, useful for anchor or external CTAs.
  if (hasHref) {
    return (
      <a className={classes} href={normalizedHref} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
