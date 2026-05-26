function GlassCard({
  as: Component = "div",
  children,
  className = "",
  ...props
}) {
  return (
    <Component
      className={`glass-panel min-w-0 max-w-full wrap-break-word p-4 transition duration-300 hover:border-cyan-glow/30 hover:shadow-glow-soft sm:p-6 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default GlassCard;
