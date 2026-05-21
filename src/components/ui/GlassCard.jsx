function GlassCard({ as: Component = 'div', children, className = '' }) {
  return (
    <Component
      className={`glass-panel p-5 transition duration-300 hover:border-cyan-glow/30 hover:shadow-glow-soft sm:p-6 ${className}`}
    >
      {children}
    </Component>
  )
}

export default GlassCard
