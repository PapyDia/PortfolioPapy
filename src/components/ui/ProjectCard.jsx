import GlassCard from './GlassCard'

function ProjectPreview({ index = 0, name }) {
  // Intentionally abstract preview: no fake screenshot or external image.
  const accentClass =
    index % 2 === 0
      ? 'bg-cyan-glow/15 text-cyan-glow'
      : 'bg-violet-glow/15 text-ice-300'

  return (
    <div
      aria-hidden="true"
      className="relative min-h-36 min-w-0 max-w-full overflow-hidden rounded-[1.25rem] border border-ice-300/10 bg-navy-950/70 p-3 sm:min-h-44 sm:p-4"
    >
      <div className="absolute -right-16 -top-16 size-32 rounded-full bg-cyan-glow/15 blur-3xl sm:size-40" />
      <div className="absolute bottom-0 left-0 size-28 rounded-full bg-violet-glow/10 blur-3xl sm:size-36" />

      <div className="relative flex min-w-0 items-center justify-between border-b border-white/10 pb-2.5 sm:pb-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-cyan-glow/70" />
          <span className="size-2.5 rounded-full bg-blue-glow/60" />
          <span className="size-2.5 rounded-full bg-violet-glow/60" />
        </div>
        <span className="max-w-full break-words text-xs font-medium text-text-soft">
          Aperçu
        </span>
      </div>

      <div className="relative mt-4 grid min-w-0 gap-2.5 sm:mt-5 sm:gap-3">
        <div className="h-2.5 w-2/3 rounded-full bg-ice-100/20 sm:h-3" />
        <div className="grid min-w-0 grid-cols-[1fr_0.65fr] gap-2.5 sm:gap-3">
          <div className="min-w-0 space-y-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3">
            <div className="h-2 rounded-full bg-cyan-glow/30" />
            <div className="h-2 w-4/5 rounded-full bg-white/10" />
            <div className="h-2 w-3/5 rounded-full bg-white/10" />
          </div>
          <div className="grid min-w-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <span
              className={`grid size-10 max-w-full place-items-center rounded-2xl text-center text-xs font-bold leading-none break-words sm:size-12 sm:text-sm ${accentClass}`}
            >
              {name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ index = 0, project }) {
  // Empty links stay hidden to avoid misleading CTAs.
  const projectLinks = [
    { href: project.links?.live, label: 'Voir le site' },
    { href: project.links?.code, label: 'Voir le code' },
  ]
    .map((link) => ({ ...link, href: link.href?.trim() ?? '' }))
    .filter((link) => link.href)

  const titleId = `project-${index + 1}-title`

  return (
    <GlassCard
      aria-labelledby={titleId}
      as="article"
      className="flex h-full min-w-0 flex-col gap-5 overflow-hidden sm:gap-6"
    >
      <ProjectPreview index={index} name={project.name} />

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="min-w-0">
          <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
            <span className="max-w-full rounded-button border border-cyan-glow/25 bg-cyan-glow/10 px-3 py-1 text-center text-xs font-semibold leading-snug break-words uppercase text-cyan-glow">
              {project.status}
            </span>
            <span className="max-w-full break-words text-sm font-medium leading-snug text-text-soft">
              {project.type}
            </span>
          </div>

          <h3
            className="mt-3 max-w-full break-words text-xl font-semibold leading-tight text-ice-50 sm:mt-4 sm:text-2xl"
            id={titleId}
          >
            {project.name}
          </h3>

          <p className="text-pretty-safe mt-3 max-w-full break-words leading-7 text-text-muted sm:mt-4">
            {project.description}
          </p>
        </div>

        <div className="mt-5 min-w-0 sm:mt-6">
          <p className="max-w-full break-words text-sm font-semibold uppercase text-cyan-glow">
            Points clés
          </p>
          <ul className="mt-3 grid min-w-0 gap-1.5 text-sm leading-6 text-text-muted sm:grid-cols-2 sm:gap-2">
            {project.highlights.map((highlight) => (
              <li className="flex min-w-0 gap-2" key={highlight}>
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-glow"
                />
                <span className="min-w-0 max-w-full break-words">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul
          aria-label={`Stack du projet ${project.name}`}
          className="m-0 mt-5 flex min-w-0 max-w-full list-none flex-wrap gap-1.5 p-0 sm:mt-6 sm:gap-2"
        >
          {project.stack.map((tech) => (
            <li
              className="max-w-full rounded-button border border-ice-300/15 bg-white/[0.04] px-2.5 py-1 text-center text-xs font-medium leading-snug break-words text-ice-100 sm:px-3 sm:py-1.5"
              key={`${project.name}-${tech}`}
            >
              {tech}
            </li>
          ))}
        </ul>

        {(projectLinks.length > 0 || project.note) && (
          <div className="mt-5 min-w-0 border-t border-white/10 pt-4 sm:mt-6 sm:pt-5">
            {projectLinks.length > 0 && (
              <div className="flex min-w-0 flex-wrap gap-3">
                {projectLinks.map((link) => (
                  <a
                    aria-label={`${link.label} du projet ${project.name} dans un nouvel onglet`}
                    className="inline-flex min-h-11 max-w-full touch-manipulation items-center justify-center rounded-button border border-ice-300/20 px-4 py-2 text-center text-sm font-semibold leading-snug break-words text-ice-50 transition hover:border-cyan-glow/50 hover:bg-cyan-glow/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-glow"
                    href={link.href}
                    key={link.label}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {project.note && (
              <p
                className={`${projectLinks.length > 0 ? 'mt-4 ' : ''}inline-flex max-w-full rounded-button border border-ice-300/15 bg-white/[0.03] px-3 py-1.5 text-xs font-medium leading-snug break-words text-text-soft`}
              >
                {project.note}
              </p>
            )}
          </div>
        )}
      </div>
    </GlassCard>
  )
}

export default ProjectCard
