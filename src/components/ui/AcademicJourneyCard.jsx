const paperTexture = {
  backgroundImage:
    "radial-gradient(circle at 18% 20%, rgba(120, 53, 15, 0.08), transparent 24%), radial-gradient(circle at 82% 10%, rgba(15, 23, 42, 0.055), transparent 22%), linear-gradient(135deg, rgba(255, 255, 255, 0.5), transparent 45%)",
};

function AcademicJourneyCard({ journey }) {
  const narrativeParagraphs = [journey.description, ...journey.paragraphs];

  return (
    <article
      aria-labelledby="academic-journey-title"
      className="relative isolate overflow-hidden rounded-[2rem] border border-amber-900/10 bg-[#F8F1E3] p-5 text-slate-800 shadow-[0_24px_80px_rgba(2,6,23,0.28)] sm:p-8 lg:p-10"
      style={paperTexture}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-amber-900/20 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-5 top-8 hidden w-px bg-amber-900/10 sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 size-28 bg-linear-to-bl from-white/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-52 rounded-full bg-cyan-300/16 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-6 size-44 rounded-full bg-amber-700/10 blur-3xl"
      />

      <div className="relative mx-auto min-w-0 max-w-4xl">
        <p className="inline-flex max-w-full rounded-full border border-amber-900/15 bg-white/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] wrap-break-word text-slate-700 shadow-sm">
          {journey.eyebrow}
        </p>

        <h3
          className="text-balance-safe mt-4 max-w-3xl font-serif text-3xl font-semibold italic leading-tight tracking-tight wrap-break-word text-slate-950 sm:text-4xl"
          id="academic-journey-title"
        >
          {journey.title}
        </h3>

        <div className="relative mx-auto mt-6 max-w-3xl border-l border-amber-900/15 pl-4 sm:mt-7 sm:pl-6">
          <span
            aria-hidden="true"
            className="absolute -left-[0.3125rem] top-2 size-2 rounded-full bg-amber-900/25 shadow-[0_0_0_4px_rgba(248,241,227,0.85)]"
          />
          <div className="space-y-5 text-left text-[0.95rem] leading-8 tracking-[0.01em] text-slate-700 sm:text-base sm:leading-8">
            {narrativeParagraphs.map((paragraph, index) => (
              <p
                className={`text-pretty-safe max-w-full break-words ${
                  index === 0 ? "font-medium text-slate-800" : ""
                }`}
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <ul
          aria-label="Compétences issues du parcours universitaire"
          className="m-0 mt-7 flex min-w-0 max-w-full list-none flex-wrap gap-2 p-0 sm:mt-9"
        >
          {journey.skills.map((skill) => (
            <li
              className="max-w-full rounded-full border border-amber-900/15 bg-white/45 px-3 py-1.5 text-center text-xs font-semibold leading-snug wrap-break-word text-slate-700 shadow-sm"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default AcademicJourneyCard;
