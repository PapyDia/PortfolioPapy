function ProfilePhoto({ src, alt, className = "" }) {
  return (
    <figure
      className={`relative mx-auto w-full max-w-63 sm:max-w-74 lg:max-w-84 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 left-1/2 size-32 -translate-x-1/2 rounded-full bg-[var(--app-glow-violet)] blur-2xl sm:size-40"
      />

      <div className="profile-photo-frame ios-safe-circle relative aspect-square overflow-hidden rounded-full border border-[color:var(--app-accent-border)] bg-[var(--app-surface)] p-1.5 shadow-[var(--app-shadow-soft)] backdrop-blur-xl">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-[var(--app-shine-strong)] via-transparent to-[var(--app-glow-cyan-soft)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-2 rounded-full border border-[color:var(--app-border)]"
        />
        <img
          alt={alt}
          className="profile-photo-image ios-safe-media relative h-full w-full rounded-full object-cover object-top"
          decoding="async"
          height="900"
          loading="lazy"
          src={src}
          width="720"
        />
      </div>
    </figure>
  );
}

export default ProfilePhoto;
