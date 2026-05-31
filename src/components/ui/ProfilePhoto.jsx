function ProfilePhoto({ src, alt, className = "" }) {
  return (
    <figure
      className={`relative mx-auto w-full max-w-63 sm:max-w-74 lg:max-w-84 ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 z-0 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-3 left-1/2 z-0 size-32 -translate-x-1/2 rounded-full bg-[var(--app-glow-violet)] blur-2xl sm:size-40"
      />

      <div className="profile-photo-frame relative z-10 aspect-square rounded-full border border-[color:var(--app-accent-border)] bg-[var(--app-surface)] p-1.5 shadow-[var(--app-shadow-soft)]">
        <div className="profile-photo-clip ios-safe-circle absolute inset-1.5 rounded-full">
          <img
            alt={alt}
            className="profile-photo-image ios-safe-media absolute inset-0 h-full w-full object-cover object-top"
            decoding="async"
            height="1368"
            loading="lazy"
            src={src}
            width="1023"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border border-[color:var(--app-accent-border)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-2 rounded-full border border-[color:var(--app-border)]"
        />
      </div>
    </figure>
  );
}

export default ProfilePhoto;
