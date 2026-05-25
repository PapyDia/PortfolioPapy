const transitionGlowClasses = {
  cyan: 'from-cyan-glow/[0.11] via-blue-glow/[0.04] to-transparent',
  mixed: 'from-cyan-glow/[0.08] via-white/[0.035] to-violet-glow/[0.08]',
  violet: 'from-transparent via-violet-glow/[0.09] to-cyan-glow/[0.06]',
}

function SectionTransition({ className = '', variant = 'mixed' }) {
  const glowClassName =
    transitionGlowClasses[variant] ?? transitionGlowClasses.mixed

  return (
    <div
      aria-hidden="true"
      className={`section-glow-transition ${className}`}
    >
      <div
        className={`absolute inset-x-[8%] bottom-0 h-20 rounded-full bg-linear-to-r blur-3xl ${glowClassName}`}
      />
      <span className="absolute bottom-3 left-[27%] size-1 rounded-full bg-cyan-glow/30" />
      <span className="absolute bottom-5 right-[28%] size-1 rounded-full bg-violet-glow/30" />
    </div>
  )
}

export default SectionTransition
