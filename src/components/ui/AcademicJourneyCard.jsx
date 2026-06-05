const paperTexture = {
  backgroundImage:
    "radial-gradient(circle at 18% 20%, rgba(120, 53, 15, 0.08), transparent 24%), radial-gradient(circle at 82% 10%, rgba(15, 23, 42, 0.055), transparent 22%), linear-gradient(135deg, rgba(255, 255, 255, 0.5), transparent 45%)",
};

function AcademicJourneyCard({ journey }) {
  const journeyParagraphs = Array.isArray(journey.paragraphs)
    ? journey.paragraphs
    : [];
  const journeySkills = Array.isArray(journey.skills) ? journey.skills : [];
  const narrativeParagraphs = [journey.description, ...journeyParagraphs].filter(
    Boolean,
  );
  const cardStyle = {
    ...paperTexture,
    "--ios-safe-radius": "2rem",
  };

  return (
    <article
      aria-labelledby="academic-journey-title"
      className="academic-journey-card ios-safe-rounded relative isolate overflow-hidden rounded-[2rem] border border-amber-900/10 bg-[#F8F1E3] p-5 text-slate-800 shadow-[0_24px_80px_rgba(2,6,23,0.28)] sm:p-8 lg:p-10"
      style={cardStyle}
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
        <p className="inline-flex max-w-full rounded-full border border-amber-900/15 bg-white/45 px-3 py-1 text-sm font-semibold uppercase leading-none wrap-break-word text-slate-700 shadow-sm">
          {journey.eyebrow}
        </p>

        <h3
          className="academic-journey-title text-balance-safe mt-4 max-w-3xl text-4xl font-semibold italic leading-[1.02] tracking-normal wrap-break-word text-slate-950 sm:text-5xl sm:leading-[1.02]"
          id="academic-journey-title"
        >
          {journey.title}
        </h3>

        <div className="relative mx-auto mt-6 max-w-3xl border-l border-amber-900/15 pl-4 sm:mt-7 sm:pl-6">
          <span
            aria-hidden="true"
            className="absolute -left-[0.3125rem] top-2 size-2 rounded-full bg-amber-900/25 shadow-[0_0_0_4px_rgba(248,241,227,0.85)]"
          />
          <div className="academic-journey-copy space-y-5 text-left text-[1.14rem] leading-8 text-slate-700 sm:text-[1.22rem] sm:leading-9">
            {narrativeParagraphs.map((paragraph, index) => (
              <p
                className={`text-pretty-safe max-w-full break-words ${
                  index === 0 ? "font-semibold text-slate-800" : "font-medium"
                }`}
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <ul
          aria-label={journey.skillsAriaLabel}
          className="m-0 mt-7 flex min-w-0 max-w-full list-none flex-wrap gap-2 p-0 sm:mt-9"
        >
          {journeySkills.map((skill) => (
            <li
              className="max-w-full rounded-full border border-amber-900/15 bg-white/45 px-3 py-1.5 text-center text-sm font-semibold leading-none wrap-break-word text-slate-700 shadow-sm"
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
