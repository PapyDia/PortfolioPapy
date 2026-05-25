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
            'radial-gradient(circle at 84% 20%, rgba(234, 67, 53, 0.14), transparent 34%), radial-gradient(circle at 22% 94%, rgba(251, 188, 5, 0.1), transparent 36%), radial-gradient(circle at 86% 88%, rgba(66, 133, 244, 0.1), transparent 32%)',
        }}
      />

      <span className="absolute right-3 top-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-2.5 py-2 opacity-[0.34] shadow-[0_12px_34px_rgba(234,67,53,0.12)] sm:right-5 sm:top-5 sm:px-3 sm:opacity-[0.56]">
        <svg
          aria-hidden="true"
          className="size-5 shrink-0 text-[#ea4335]/60"
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
          <span className="block h-1 w-10 rounded-full bg-ice-100/20 sm:w-12" />
          <span className="block h-1 w-14 rounded-full bg-[#ea4335]/20 sm:w-16" />
        </span>
      </span>

      <span className="absolute -bottom-2 left-4 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-2.5 opacity-[0.44] shadow-[0_10px_30px_rgba(66,133,244,0.08)] sm:flex">
        <span className="grid size-7 place-items-center rounded-xl bg-[#4285f4]/10">
          <svg
            aria-hidden="true"
            className="size-4 text-[#4285f4]/70"
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
          <span className="block h-1 w-16 rounded-full bg-ice-100/15" />
          <span className="block h-1 w-11 rounded-full bg-[#fbbc05]/20" />
        </span>
      </span>

      <span className="absolute bottom-6 right-5 hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 opacity-[0.42] md:flex">
        <span className="size-2 rounded-full bg-[#34a853]/60 shadow-[0_0_10px_rgba(52,168,83,0.38)]" />
        <span className="block h-1 w-12 rounded-full bg-ice-100/15" />
        <span className="block h-1 w-6 rounded-full bg-[#ea4335]/20" />
      </span>

      <span className="absolute inset-0 bg-linear-to-br from-navy-950/5 via-navy-950/20 to-navy-950/65" />
    </div>
  )
}

export default EmailContactDecor
