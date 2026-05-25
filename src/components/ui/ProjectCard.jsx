import { useState } from 'react'

import kaolackKitchenIcon from '../../assets/icons/favicon.svg'
import samaHoraireIcon from '../../assets/icons/sama-horaire-icon.svg'
import BackendNoticeModal from './BackendNoticeModal'
import GlassCard from './GlassCard'
import PrivateRepoModal from './PrivateRepoModal'

const projectPreviewVisuals = {
  'Kaolack Kitchen': {
    imageClassName: 'size-10 rounded-xl object-contain sm:size-11',
    src: kaolackKitchenIcon,
    wrapperClassName: 'bg-white/95 p-0.5',
  },
  'Sama Horaire': {
    imageClassName: 'size-8 rounded-xl object-contain sm:size-9',
    src: samaHoraireIcon,
    wrapperClassName: 'bg-white/90 p-1.5',
  },
}

const ticketQrPattern = '1101110001011001011011011'

function PreviewLogo({ accentClass, name, visual }) {
  if (!visual) {
    return (
      <span
        className={`grid size-11 max-w-full shrink-0 place-items-center rounded-2xl text-center text-sm font-bold leading-none break-words sm:size-12 ${accentClass}`}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    )
  }

  return (
    <span
      className={`grid size-11 max-w-full shrink-0 place-items-center rounded-2xl border border-white/25 shadow-[0_10px_30px_rgba(2,6,23,0.24),0_0_20px_rgba(125,211,252,0.1)] sm:size-12 ${visual.wrapperClassName}`}
    >
      <img
        alt=""
        aria-hidden="true"
        className={visual.imageClassName}
        decoding="async"
        loading="lazy"
        src={visual.src}
      />
    </span>
  )
}

function PreviewHeader({ accentClass, label, name, visual }) {
  return (
    <div className="relative flex min-w-0 items-center gap-2 border-b border-white/10 pb-2">
      <div className="flex shrink-0 gap-1.5">
        <span className="size-2.5 rounded-full bg-cyan-glow/70" />
        <span className="size-2.5 rounded-full bg-blue-glow/60" />
        <span className="size-2.5 rounded-full bg-violet-glow/60" />
      </div>
      <span className="ml-auto max-w-full break-words text-[0.65rem] font-medium text-text-soft sm:text-xs">
        {label}
      </span>
      <PreviewLogo accentClass={accentClass} name={name} visual={visual} />
    </div>
  )
}

function KaolackKitchenPreview({ accentClass, name, visual }) {
  return (
    <>
      <PreviewHeader
        accentClass={accentClass}
        label="Menu"
        name={name}
        visual={visual}
      />

      <div className="relative mt-2 flex min-w-0 flex-wrap gap-1">
        {['Plats', 'Menus', 'Commander'].map((category, index) => (
          <span
            className={`rounded-full border px-2 py-0.5 text-[0.5rem] font-medium sm:text-[0.55rem] ${
              index === 0
                ? 'border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow'
                : 'border-white/10 bg-white/[0.04] text-text-soft'
            }`}
            key={category}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="relative mt-2 rounded-xl border border-white/10 bg-white/[0.045] p-2 sm:p-2.5">
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-1.5">
          <span className="text-[0.6rem] font-semibold text-ice-100 sm:text-[0.65rem]">
            Panier
          </span>
          <span className="rounded-full border border-cyan-glow/20 bg-cyan-glow/10 px-2 py-0.5 text-[0.52rem] font-semibold text-cyan-glow sm:text-[0.56rem]">
            +1 article
          </span>
        </div>
        <div className="mt-2 flex min-w-0 flex-wrap items-center justify-between gap-1.5 border-t border-white/10 pt-2">
          <span className="text-[0.53rem] font-medium text-text-soft sm:text-[0.56rem]">
            Total
          </span>
          <span className="whitespace-nowrap text-[0.6rem] font-bold text-ice-50 sm:text-[0.65rem]">
            1 500 FCFA
          </span>
        </div>
      </div>
    </>
  )
}

function SamaHorairePreview({ accentClass, name, visual }) {
  return (
    <>
      <PreviewHeader
        accentClass={accentClass}
        label="Ticket"
        name={name}
        visual={visual}
      />

      <div className="relative mt-2.5 grid min-w-0 grid-cols-[minmax(0,1fr)_2.75rem] gap-2 rounded-xl border border-cyan-glow/15 bg-white/[0.045] p-2">
        <div className="min-w-0">
          <span className="inline-flex rounded-full border border-cyan-glow/25 bg-cyan-glow/10 px-2 py-0.5 text-[0.5rem] font-semibold uppercase text-cyan-glow sm:text-[0.55rem]">
            Ticket
          </span>
          <div className="mt-2 flex min-w-0 items-center gap-1 text-[0.52rem] font-medium text-ice-100 sm:text-[0.58rem]">
            <span>Dakar</span>
            <span className="h-px min-w-2 flex-1 bg-cyan-glow/35" />
            <span>Kaolack</span>
          </div>
          <div className="mt-2 flex min-w-0 items-center gap-2">
            <span className="rounded-md bg-white/[0.06] px-1.5 py-1 text-[0.5rem] font-medium text-text-muted">
              08:30
            </span>
            <span className="h-1.5 min-w-3 flex-1 rounded-full bg-white/10" />
          </div>
        </div>
        <span className="grid size-11 shrink-0 grid-cols-5 gap-0.5 self-center rounded-lg border border-white/15 bg-navy-950/60 p-1">
          {Array.from(ticketQrPattern).map((cell, cellIndex) => (
            <span
              className={`rounded-[1px] ${
                cell === '1' ? 'bg-cyan-glow/65' : 'bg-white/[0.06]'
              }`}
              key={cellIndex}
            />
          ))}
        </span>
      </div>
    </>
  )
}

function GenericProjectPreview({ accentClass, name, visual }) {
  return (
    <>
      <PreviewHeader
        accentClass={accentClass}
        label="Aperçu"
        name={name}
        visual={visual}
      />
      <div className="relative mt-3 grid min-w-0 gap-2.5">
        <div className="h-2.5 w-2/3 rounded-full bg-ice-100/20 sm:h-3" />
        <div className="min-w-0 space-y-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3">
          <div className="h-2 rounded-full bg-cyan-glow/30" />
          <div className="h-2 w-4/5 rounded-full bg-white/10" />
          <div className="h-2 w-3/5 rounded-full bg-white/10" />
        </div>
      </div>
    </>
  )
}

function ProjectPreview({ index = 0, name }) {
  // Intentionally abstract preview: no fake screenshot or external image.
  const accentClass =
    index % 2 === 0
      ? 'bg-cyan-glow/15 text-cyan-glow'
      : 'bg-violet-glow/15 text-ice-300'
  const previewVisual = projectPreviewVisuals[name]
  const isKaolackKitchen = name === 'Kaolack Kitchen'
  const isSamaHoraire = name === 'Sama Horaire'

  return (
    <div
      aria-hidden="true"
      className="relative min-h-36 min-w-0 max-w-full overflow-hidden rounded-[1.25rem] border border-ice-300/10 bg-navy-950/70 p-3 sm:min-h-44 sm:p-4"
    >
      <div className="absolute -right-16 -top-16 size-32 rounded-full bg-cyan-glow/15 blur-3xl sm:size-40" />
      <div className="absolute bottom-0 left-0 size-28 rounded-full bg-violet-glow/10 blur-3xl sm:size-36" />

      {isKaolackKitchen ? (
        <KaolackKitchenPreview
          accentClass={accentClass}
          name={name}
          visual={previewVisual}
        />
      ) : isSamaHoraire ? (
        <SamaHorairePreview
          accentClass={accentClass}
          name={name}
          visual={previewVisual}
        />
      ) : (
        <GenericProjectPreview
          accentClass={accentClass}
          name={name}
          visual={previewVisual}
        />
      )}
    </div>
  )
}

function ProjectCard({ index = 0, project }) {
  const [isBackendNoticeOpen, setIsBackendNoticeOpen] = useState(false)
  const [isPrivateRepoOpen, setIsPrivateRepoOpen] = useState(false)
  // Empty links stay hidden to avoid misleading CTAs.
  const liveLink = project.links?.live?.trim() ?? ''
  const codeLink = project.links?.code?.trim() ?? ''
  const hasCodeAction = Boolean(codeLink || project.repoPrivate)
  const hasProjectLinks = Boolean(liveLink || hasCodeAction)
  const shouldShowBackendNotice = Boolean(liveLink && project.backendNotice)

  const titleId = `project-${index + 1}-title`
  const ctaClassName =
    'inline-flex min-h-11 max-w-full touch-manipulation items-center justify-center rounded-button border border-ice-300/20 px-4 py-2 text-center text-sm font-semibold leading-snug break-words text-ice-50 transition hover:border-cyan-glow/50 hover:bg-cyan-glow/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-glow'

  function handleLiveClick() {
    setIsBackendNoticeOpen(true)
  }

  function handleContinueToLiveSite() {
    if (liveLink) {
      window.open(liveLink, '_blank', 'noopener,noreferrer')
    }

    setIsBackendNoticeOpen(false)
  }

  function handlePrivateRepoClick() {
    setIsBackendNoticeOpen(false)
    setIsPrivateRepoOpen(true)
  }

  return (
    <>
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

          {(hasProjectLinks || project.note) && (
            <div className="mt-5 min-w-0 border-t border-white/10 pt-4 sm:mt-6 sm:pt-5">
              {hasProjectLinks && (
                <div className="flex min-w-0 flex-wrap gap-3">
                  {liveLink && (
                    <>
                      {shouldShowBackendNotice ? (
                        <button
                          aria-haspopup="dialog"
                          aria-label={`Voir le site du projet ${project.name}`}
                          className={ctaClassName}
                          onClick={handleLiveClick}
                          type="button"
                        >
                          Voir le site
                        </button>
                      ) : (
                        <a
                          aria-label={`Voir le site du projet ${project.name} dans un nouvel onglet`}
                          className={ctaClassName}
                          href={liveLink}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Voir le site
                        </a>
                      )}
                    </>
                  )}

                  {hasCodeAction && (
                    <>
                      {project.repoPrivate ? (
                        <button
                          aria-haspopup="dialog"
                          aria-label={`Voir le code du projet ${project.name}`}
                          className={ctaClassName}
                          onClick={handlePrivateRepoClick}
                          type="button"
                        >
                          Voir le code
                        </button>
                      ) : (
                        <a
                          aria-label={`Voir le code du projet ${project.name} dans un nouvel onglet`}
                          className={ctaClassName}
                          href={codeLink}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Voir le code
                        </a>
                      )}
                    </>
                  )}
                </div>
              )}

              {project.note && (
                <p
                  className={`${hasProjectLinks ? 'mt-4 ' : ''}inline-flex max-w-full rounded-button border border-ice-300/15 bg-white/[0.03] px-3 py-1.5 text-xs font-medium leading-snug break-words text-text-soft`}
                >
                  {project.note}
                </p>
              )}
            </div>
          )}
        </div>
      </GlassCard>

      <BackendNoticeModal
        isOpen={isBackendNoticeOpen}
        onClose={() => setIsBackendNoticeOpen(false)}
        onContinue={handleContinueToLiveSite}
        projectName={project.name}
      />
      <PrivateRepoModal
        isOpen={isPrivateRepoOpen}
        onClose={() => setIsPrivateRepoOpen(false)}
        projectName={project.name}
      />
    </>
  )
}

export default ProjectCard
