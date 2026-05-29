function EmailContactDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      <span
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 84% 20%, var(--app-glow-cyan), transparent 34%), radial-gradient(circle at 22% 94%, var(--app-glow-violet), transparent 36%), radial-gradient(circle at 86% 88%, var(--app-glow-blue), transparent 32%)",
        }}
      />

      <span className="absolute right-3 top-3 flex items-center gap-2 rounded-2xl border border-[color:var(--app-border)] bg-[var(--app-surface)] px-2.5 py-2 opacity-34 shadow-[var(--app-shadow-soft)] sm:right-5 sm:top-5 sm:px-3 sm:opacity-56">
        <svg
          aria-hidden="true"
          className="size-5 shrink-0 text-[color:var(--app-accent)] opacity-70"
          fill="none"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="M4.5 7.5h15v9h-15zm.6.6 6.9 5 6.9-5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </svg>
        <span className="space-y-1.5">
          <span className="block h-1 w-10 rounded-full bg-[var(--app-border-strong)] sm:w-12" />
          <span className="block h-1 w-14 rounded-full bg-[var(--app-accent-soft)] sm:w-16" />
        </span>
      </span>

      <span className="absolute -bottom-2 left-4 hidden items-center gap-2.5 rounded-2xl border border-[color:var(--app-border)] bg-[var(--app-surface)] px-3 py-2.5 opacity-44 shadow-[var(--app-shadow-soft)] sm:flex">
        <span className="grid size-7 place-items-center rounded-xl bg-[var(--app-accent-soft)]">
          <svg
            aria-hidden="true"
            className="size-4 text-[color:var(--app-accent)] opacity-70"
            fill="none"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 8h14v8H5zm.6.5L12 13l6.4-4.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </svg>
        </span>
        <span className="space-y-1.5">
          <span className="block h-1 w-16 rounded-full bg-[var(--app-border-strong)]" />
          <span className="block h-1 w-11 rounded-full bg-[var(--app-accent-soft)]" />
        </span>
      </span>

      <span className="absolute bottom-6 right-5 hidden items-center gap-2 rounded-full border border-[color:var(--app-border)] bg-[var(--app-surface)] px-3 py-2 opacity-42 md:flex">
        <span className="size-2 rounded-full bg-[var(--app-accent)] shadow-[var(--app-shadow-soft)]" />
        <span className="block h-1 w-12 rounded-full bg-[var(--app-border-strong)]" />
        <span className="block h-1 w-6 rounded-full bg-[var(--app-accent-soft)]" />
      </span>

      <span className="absolute inset-0 bg-linear-to-br from-transparent via-[var(--app-glow-cyan-soft)] to-[var(--app-surface-strong)]" />
    </div>
  );
}

export default EmailContactDecor;
