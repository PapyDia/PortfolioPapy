import GlassCard from './GlassCard'

function ProcessStep({ index = 0, step }) {
  const offsetClass = index % 2 === 0 ? '' : 'lg:translate-y-8'

  return (
    <GlassCard className={`relative overflow-hidden ${offsetClass}`}>
      <div className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-cyan-glow/10 blur-3xl" />

      <div className="relative flex gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-cyan-glow/25 bg-cyan-glow/10 text-sm font-semibold text-cyan-glow shadow-glow-soft">
          {step.number}
        </span>

        <div>
          <h3 className="text-xl font-semibold text-ice-50">{step.title}</h3>
          <p className="mt-3 leading-7 text-text-muted">{step.description}</p>
        </div>
      </div>
    </GlassCard>
  )
}

export default ProcessStep
