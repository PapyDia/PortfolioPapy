const variants = {
  primary:
    'bg-ice-50 text-navy-950 shadow-glow-soft hover:-translate-y-0.5 hover:bg-ice-100',
  secondary:
    'border border-ice-300/20 bg-white/5 text-ice-50 backdrop-blur-xl hover:-translate-y-0.5 hover:border-cyan-glow/50 hover:bg-cyan-glow/10',
}

function Button({
  children,
  className = '',
  href,
  variant = 'primary',
  ...props
}) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-button px-6 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-glow ${variants[variant] ?? variants.primary} ${className}`

  // An href turns the button into a link, useful for anchor or external CTAs.
  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  )
}

export default Button
