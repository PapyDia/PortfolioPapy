const transitionGlowClasses = {
  cyan: "from-[var(--app-glow-cyan)] via-[var(--app-glow-blue)] to-transparent",
  mixed:
    "from-[var(--app-glow-cyan)] via-[var(--app-divider-ice)] to-[var(--app-glow-violet)]",
  violet:
    "from-transparent via-[var(--app-glow-violet)] to-[var(--app-glow-cyan)]",
};

function SectionTransition({ className = "", variant = "mixed" }) {
  const glowClassName =
    transitionGlowClasses[variant] ?? transitionGlowClasses.mixed;

  return (
    <div aria-hidden="true" className={`section-glow-transition ${className}`}>
      <div
        className={`absolute inset-x-[8%] bottom-0 h-20 rounded-full bg-linear-to-r blur-3xl ${glowClassName}`}
      />
      <span className="absolute bottom-3 left-[27%] size-1 rounded-full bg-[var(--app-accent-border)]" />
      <span className="absolute bottom-5 right-[28%] size-1 rounded-full bg-[var(--app-glow-violet)]" />
    </div>
  );
}

export default SectionTransition;
