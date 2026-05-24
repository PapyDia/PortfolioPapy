import { learningLanguageIcons } from '../../constants/learningLanguageIcons'
import GlassCard from './GlassCard'

function getInitials(label) {
  return label
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function LanguageCard({ language, titleId }) {
  const iconConfig = learningLanguageIcons[language.name]
  const Icon = iconConfig?.Icon
  const iconClassName = iconConfig?.iconClassName ?? 'text-ice-50'
  const initials = getInitials(language.name)

  return (
    <GlassCard
      aria-labelledby={titleId}
      as="article"
      className="relative flex h-full min-w-0 flex-col overflow-hidden p-5 sm:p-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-cyan-glow/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 size-28 rounded-full bg-violet-glow/10 blur-3xl"
      />

      <div className="relative flex min-w-0 items-start gap-4">
        <div className="relative grid size-12 shrink-0 place-items-center rounded-2xl border border-ice-300/15 bg-white/[0.05] shadow-glow-soft backdrop-blur-xl sm:size-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-1 rounded-[1rem] bg-cyan-glow/10 blur-md"
          />
          {Icon ? (
            <Icon
              aria-hidden="true"
              className={`relative z-10 size-6 sm:size-7 ${iconClassName}`}
              focusable="false"
            />
          ) : (
            <span
              aria-hidden="true"
              className="relative z-10 text-sm font-bold text-ice-50"
            >
              {initials}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <span className="inline-flex max-w-full rounded-button border border-cyan-glow/25 bg-cyan-glow/10 px-3 py-1 text-center text-xs font-semibold leading-snug break-words text-cyan-glow">
            {language.category}
          </span>
          <h3
            className="mt-3 max-w-full break-words text-xl font-semibold leading-tight text-ice-50 sm:text-2xl"
            id={titleId}
          >
            {language.name}
          </h3>
        </div>
      </div>

      <p className="text-pretty-safe relative mt-4 max-w-full break-words leading-7 text-text-muted">
        {language.description}
      </p>
    </GlassCard>
  )
}

export default LanguageCard
