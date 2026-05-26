const transitionGlowClasses = {
  cyan: "from-cyan-glow/11 via-blue-glow/4 to-transparent",
  mixed: "from-cyan-glow/8 via-white/3.5 to-violet-glow/8",
  violet: "from-transparent via-violet-glow/9 to-cyan-glow/6",
};

function SectionTransition({ className = "", variant = "mixed" }) {
  const glowClassName =
    transitionGlowClasses[variant] ?? transitionGlowClasses.mixed;

  return (
    <div aria-hidden="true" className={`section-glow-transition ${className}`}>
      <div
        className={`absolute inset-x-[8%] bottom-0 h-20 rounded-full bg-linear-to-r blur-3xl ${glowClassName}`}
      />
      <span className="absolute bottom-3 left-[27%] size-1 rounded-full bg-cyan-glow/30" />
      <span className="absolute bottom-5 right-[28%] size-1 rounded-full bg-violet-glow/30" />
    </div>
  );
}

export default SectionTransition;
