function SectionHeader({
  align = 'left',
  className = '',
  description,
  eyebrow,
  id,
  title,
}) {
  const alignment =
    align === 'center'
      ? 'mx-auto text-center'
      : 'mx-auto text-center lg:mx-0 lg:text-left'
  const descriptionAlignment =
    align === 'center' ? 'mx-auto' : 'mx-auto lg:mx-0'

  return (
    <div className={`w-full max-w-3xl min-w-0 ${alignment} ${className}`}>
      {eyebrow && (
        <p className="max-w-full break-words text-sm font-semibold uppercase text-cyan-glow">
          {eyebrow}
        </p>
      )}

      {title && (
        <h2
          className="text-balance-safe mt-2 max-w-full break-words text-2xl font-semibold leading-tight text-ice-50 sm:mt-3 sm:text-3xl lg:text-4xl"
          id={id}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`text-pretty-safe mt-3 max-w-2xl break-words text-base leading-7 text-text-muted sm:mt-4 sm:text-lg ${descriptionAlignment}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
