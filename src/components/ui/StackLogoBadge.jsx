import { stackIcons } from '../../constants/stackIcons'

function getInitials(name = '') {
  const parts = name.match(/[A-Za-z0-9]+/g) ?? []

  if (parts.length === 0) {
    return '?'
  }

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase()
  }

  return parts
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function StackLogoBadge({
  name,
  className = '',
  sizeClassName = 'size-16 sm:size-20',
}) {
  const iconConfig = stackIcons[name]
  const Icon = iconConfig?.Icon
  const iconClassName = iconConfig?.iconClassName ?? 'text-ice-100'

  return (
    <div
      className={`group relative flex shrink-0 flex-col items-center justify-center gap-1 overflow-hidden rounded-full border border-ice-300/15 bg-white/[0.05] p-1.5 text-center text-ice-100 shadow-[0_0_28px_rgba(56,189,248,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-cyan-glow/40 hover:bg-cyan-glow/10 hover:shadow-glow-soft sm:p-2 ${sizeClassName} ${className}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-1 rounded-full border border-white/[0.06]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[18%] top-[10%] h-[28%] w-[56%] rounded-full bg-white/[0.08] blur-md"
      />

      <span className="relative grid size-6 shrink-0 place-items-center sm:size-8 lg:size-9">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-cyan-glow/15 blur-lg"
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
            className="relative z-10 text-[0.65rem] font-bold text-ice-100 sm:text-xs"
          >
            {getInitials(name)}
          </span>
        )}
      </span>

      <span className="relative z-10 max-w-full px-0.5 text-[0.52rem] font-medium leading-tight break-words text-ice-100 sm:text-[0.6rem] lg:text-[0.68rem]">
        {name}
      </span>
    </div>
  )
}

export default StackLogoBadge
