function ProfilePhoto({ src, alt, className = '' }) {
  return (
    <figure
      className={`relative mx-auto w-full max-w-[15.75rem] sm:max-w-[18.5rem] lg:max-w-[21rem] ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-full bg-cyan-glow/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 left-1/2 size-32 -translate-x-1/2 rounded-full bg-violet-glow/20 blur-2xl sm:size-40"
      />

      <div className="relative aspect-square overflow-hidden rounded-full border border-ice-300/25 bg-white/[0.06] p-1.5 shadow-glow-soft backdrop-blur-xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-white/20 via-transparent to-cyan-glow/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-2 rounded-full border border-white/10"
        />
        <img
          alt={alt}
          className="relative h-full w-full rounded-full object-cover object-top"
          decoding="async"
          height="900"
          loading="lazy"
          src={src}
          width="720"
        />
      </div>
    </figure>
  )
}

export default ProfilePhoto
