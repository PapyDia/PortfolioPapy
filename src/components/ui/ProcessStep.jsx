import GlassCard from './GlassCard'

function ProcessStep({ index = 0, step }) {
  // Subtle desktop offset suggests a timeline without animation.
  const offsetClass = index % 2 === 0 ? '' : 'lg:translate-y-8'

  return (
    <GlassCard className={`relative min-w-0 overflow-hidden ${offsetClass}`}>
      <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-cyan-glow/10 blur-3xl" />

      <div className="relative flex min-w-0 gap-3 sm:gap-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-2xl border border-cyan-glow/25 bg-cyan-glow/10 text-xs font-semibold text-cyan-glow shadow-glow-soft sm:size-12 sm:text-sm">
          {step.number}
        </span>

        <div className="min-w-0">
          <h3 className="max-w-full break-words text-lg font-semibold leading-tight text-ice-50 sm:text-xl">
            {step.title}
          </h3>
          <p className="text-pretty-safe mt-2 max-w-full break-words leading-7 text-text-muted sm:mt-3">
            {step.description}
          </p>
        </div>
      </div>
    </GlassCard>
  )
}

export default ProcessStep
