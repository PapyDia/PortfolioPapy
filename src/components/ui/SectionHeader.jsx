function SectionHeader({
  align = 'left',
  className = '',
  description,
  eyebrow,
  title,
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'
  const descriptionAlignment = align === 'center' ? 'mx-auto' : ''

  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase text-cyan-glow">
          {eyebrow}
        </p>
      )}

      {title && (
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-ice-50 sm:text-4xl">
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-7 text-text-muted sm:text-lg ${descriptionAlignment}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
