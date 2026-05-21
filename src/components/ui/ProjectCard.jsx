import GlassCard from './GlassCard'

function ProjectPreview({ index = 0, name }) {
  const accentClass =
    index % 2 === 0
      ? 'bg-cyan-glow/15 text-cyan-glow'
      : 'bg-violet-glow/15 text-ice-300'

  return (
    <div className="relative min-h-44 overflow-hidden rounded-[1.25rem] border border-ice-300/10 bg-navy-950/70 p-4">
      <div className="absolute -right-16 -top-16 size-40 rounded-full bg-cyan-glow/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 size-36 rounded-full bg-violet-glow/10 blur-3xl" />

      <div className="relative flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-cyan-glow/70" />
          <span className="size-2.5 rounded-full bg-blue-glow/60" />
          <span className="size-2.5 rounded-full bg-violet-glow/60" />
        </div>
        <span className="text-xs font-medium text-text-soft">Preview</span>
      </div>

      <div className="relative mt-5 grid gap-3">
        <div className="h-3 w-2/3 rounded-full bg-ice-100/20" />
        <div className="grid grid-cols-[1fr_0.65fr] gap-3">
          <div className="space-y-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="h-2 rounded-full bg-cyan-glow/30" />
            <div className="h-2 w-4/5 rounded-full bg-white/10" />
            <div className="h-2 w-3/5 rounded-full bg-white/10" />
          </div>
          <div className="grid place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
            <span
              className={`grid size-12 place-items-center rounded-2xl text-sm font-bold ${accentClass}`}
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
  const projectLinks = [
    { href: project.links?.live, label: 'Voir le site' },
    { href: project.links?.code, label: 'Voir le code' },
  ].filter((link) => link.href)

  return (
    <GlassCard className="flex h-full flex-col gap-6 overflow-hidden">
      <ProjectPreview index={index} name={project.name} />

      <div className="flex flex-1 flex-col">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-button border border-cyan-glow/25 bg-cyan-glow/10 px-3 py-1 text-xs font-semibold uppercase text-cyan-glow">
              {project.status}
            </span>
            <span className="text-sm font-medium text-text-soft">
              {project.type}
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-ice-50">
            {project.name}
          </h3>

          <p className="mt-4 leading-7 text-text-muted">
            {project.description}
          </p>
        </div>

        <div className="mt-6">
          <p className="text-sm font-semibold uppercase text-cyan-glow">
            Points clés
          </p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-text-muted sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li className="flex gap-2" key={highlight}>
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-glow" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              className="rounded-button border border-ice-300/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-ice-100"
              key={`${project.name}-${tech}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {(projectLinks.length > 0 || project.note) && (
          <div className="mt-6 border-t border-white/10 pt-5">
            {projectLinks.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {projectLinks.map((link) => (
                  <a
                    className="rounded-button border border-ice-300/20 px-4 py-2 text-sm font-semibold text-ice-50 transition hover:border-cyan-glow/50 hover:bg-cyan-glow/10"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {project.note && (
              <p className="text-sm text-text-soft">{project.note}</p>
            )}
          </div>
        )}
      </div>
    </GlassCard>
  )
}

export default ProjectCard
