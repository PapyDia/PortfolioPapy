function TechBadge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-button border border-ice-300/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-ice-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition duration-300 hover:border-cyan-glow/40 hover:bg-cyan-glow/10 hover:text-ice-50 ${className}`}
    >
      {children}
    </span>
  )
}

export default TechBadge
