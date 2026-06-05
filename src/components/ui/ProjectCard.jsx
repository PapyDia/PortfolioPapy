import { useState } from "react";
import { useTranslation } from "react-i18next";

import kaolackKitchenIcon from "../../assets/icons/favicon.svg";
import samaHoraireIcon from "../../assets/icons/sama-horaire-icon.svg";
import BackendNoticeModal from "./BackendNoticeModal";
import GlassCard from "./GlassCard";
import PrivateRepoModal from "./PrivateRepoModal";

const projectPreviewVisuals = {
  "Kaolack Kitchen": {
    imageClassName: "size-10 rounded-xl object-contain sm:size-11",
    src: kaolackKitchenIcon,
    wrapperClassName: "bg-[var(--app-project-logo-bg)] p-0.5",
  },
  "Sama Horaire": {
    imageClassName: "size-8 rounded-xl object-contain sm:size-9",
    src: samaHoraireIcon,
    wrapperClassName: "bg-[var(--app-project-logo-bg)] p-1.5",
  },
};

const ticketQrPattern = "1101110001011001011011011";

function PreviewLogo({ accentClass, name, visual }) {
  if (!visual) {
    return (
      <span
        className={`grid size-11 max-w-full shrink-0 place-items-center rounded-2xl text-center text-sm font-bold leading-none wrap-break-word sm:size-12 ${accentClass}`}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <span
      className={`ios-safe-rounded grid size-11 max-w-full shrink-0 place-items-center overflow-hidden rounded-2xl border border-[color:var(--app-project-preview-border)] shadow-[var(--app-shadow-soft)] sm:size-12 ${visual.wrapperClassName}`}
      style={{ "--ios-safe-radius": "1rem" }}
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
  );
}

function PreviewHeader({ accentClass, label, name, visual }) {
  return (
    <div className="relative flex min-w-0 items-center gap-2 border-b border-[color:var(--app-border)] pb-2">
      <div className="flex shrink-0 gap-1.5">
        <span className="size-2.5 rounded-full bg-[var(--app-project-dot-cyan)]" />
        <span className="size-2.5 rounded-full bg-[var(--app-project-dot-blue)]" />
        <span className="size-2.5 rounded-full bg-[var(--app-project-dot-violet)]" />
      </div>
      <span className="ml-auto max-w-full wrap-break-word text-[0.65rem] font-medium text-[color:var(--app-text-soft)] sm:text-xs">
        {label}
      </span>
      <PreviewLogo accentClass={accentClass} name={name} visual={visual} />
    </div>
  );
}

function KaolackKitchenPreview({ accentClass, name, t, visual }) {
  return (
    <>
      <PreviewHeader
        accentClass={accentClass}
        label={t("projects.preview.menu")}
        name={name}
        visual={visual}
      />

      <div className="relative mt-2 flex min-w-0 flex-wrap gap-1">
        {[
          t("projects.preview.dishes"),
          t("projects.preview.menus"),
          t("projects.preview.order"),
        ].map((category, index) => (
          <span
            className={`rounded-full border px-2 py-0.5 text-[0.5rem] font-medium sm:text-[0.55rem] ${
              index === 0
                ? "border-[color:var(--app-accent-border)] bg-[var(--app-accent-soft)] text-[color:var(--app-accent)]"
                : "border-[color:var(--app-border)] bg-[var(--app-project-preview-surface)] text-[color:var(--app-text-soft)]"
            }`}
            key={category}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="relative mt-2 rounded-xl border border-[color:var(--app-border)] bg-[var(--app-project-preview-surface)] p-2 sm:p-2.5">
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-1.5">
          <span className="text-[0.6rem] font-semibold text-[color:var(--app-text-main)] sm:text-[0.65rem]">
            {t("projects.preview.cart")}
          </span>
          <span className="rounded-full border border-[color:var(--app-accent-border)] bg-[var(--app-accent-soft)] px-2 py-0.5 text-[0.52rem] font-semibold text-[color:var(--app-accent)] sm:text-[0.56rem]">
            {t("projects.preview.itemAdded")}
          </span>
        </div>
        <div className="mt-2 flex min-w-0 flex-wrap items-center justify-between gap-1.5 border-t border-[color:var(--app-border)] pt-2">
          <span className="text-[0.53rem] font-medium text-[color:var(--app-text-soft)] sm:text-[0.56rem]">
            {t("projects.preview.total")}
          </span>
          <span className="whitespace-nowrap text-[0.6rem] font-bold text-[color:var(--app-text-main)] sm:text-[0.65rem]">
            1 500 FCFA
          </span>
        </div>
      </div>
    </>
  );
}

function SamaHorairePreview({ accentClass, name, t, visual }) {
  return (
    <>
      <PreviewHeader
        accentClass={accentClass}
        label={t("projects.preview.ticket")}
        name={name}
        visual={visual}
      />

      <div className="relative mt-2.5 grid min-w-0 grid-cols-[minmax(0,1fr)_2.75rem] gap-2 rounded-xl border border-[color:var(--app-accent-border)] bg-[var(--app-project-preview-surface)] p-2">
        <div className="min-w-0">
          <span className="inline-flex rounded-full border border-[color:var(--app-accent-border)] bg-[var(--app-accent-soft)] px-2 py-0.5 text-[0.5rem] font-semibold uppercase text-[color:var(--app-accent)] sm:text-[0.55rem]">
            Ticket
          </span>
          <div className="mt-2 flex min-w-0 items-center gap-1 text-[0.52rem] font-medium text-[color:var(--app-text-main)] sm:text-[0.58rem]">
            <span>Dakar</span>
            <span className="h-px min-w-2 flex-1 bg-[var(--app-accent-border)]" />
            <span>Kaolack</span>
          </div>
          <div className="mt-2 flex min-w-0 items-center gap-2">
            <span className="rounded-md bg-[var(--app-project-preview-surface)] px-1.5 py-1 text-[0.5rem] font-medium text-[color:var(--app-text-muted)]">
              08:30
            </span>
            <span className="h-1.5 min-w-3 flex-1 rounded-full bg-[var(--app-border)]" />
          </div>
        </div>
        <span className="grid size-11 shrink-0 grid-cols-5 gap-0.5 self-center rounded-lg border border-[color:var(--app-border)] bg-[var(--app-qr-bg)] p-1">
          {Array.from(ticketQrPattern).map((cell, cellIndex) => (
            <span
              className={`rounded-[1px] ${
                cell === "1"
                  ? "bg-[var(--app-qr-cell-active)]"
                  : "bg-[var(--app-qr-cell-muted)]"
              }`}
              key={cellIndex}
            />
          ))}
        </span>
      </div>
    </>
  );
}

function GenericProjectPreview({ accentClass, name, t, visual }) {
  return (
    <>
      <PreviewHeader
        accentClass={accentClass}
        label={t("projects.preview.preview")}
        name={name}
        visual={visual}
      />
      <div className="relative mt-3 grid min-w-0 gap-2.5">
        <div className="h-2.5 w-2/3 rounded-full bg-[var(--app-border-strong)] sm:h-3" />
        <div className="min-w-0 space-y-2 rounded-2xl border border-[color:var(--app-border)] bg-[var(--app-project-preview-surface)] p-2.5 sm:p-3">
          <div className="h-2 rounded-full bg-[var(--app-accent-border)]" />
          <div className="h-2 w-4/5 rounded-full bg-[var(--app-border)]" />
          <div className="h-2 w-3/5 rounded-full bg-[var(--app-border)]" />
        </div>
      </div>
    </>
  );
}

function ProjectPreview({ index = 0, name, t }) {
  // Intentionally abstract preview: no fake screenshot or external image.
  const accentClass =
    index % 2 === 0
      ? "bg-[var(--app-accent-soft)] text-[color:var(--app-accent)]"
      : "bg-[var(--app-glow-violet)] text-[color:var(--app-text-main)]";
  const previewVisual = projectPreviewVisuals[name];
  const isKaolackKitchen = name === "Kaolack Kitchen";
  const isSamaHoraire = name === "Sama Horaire";

  return (
    <div
      aria-hidden="true"
      className="project-preview-shell ios-safe-rounded relative min-h-36 min-w-0 max-w-full overflow-hidden rounded-[1.25rem] border border-[color:var(--app-project-preview-border)] bg-[var(--app-project-preview-bg)] p-3 sm:min-h-44 sm:p-4"
    >
      <div className="absolute -right-16 -top-16 size-32 rounded-full bg-[var(--app-glow-cyan)] blur-3xl sm:size-40" />
      <div className="absolute bottom-0 left-0 size-28 rounded-full bg-[var(--app-glow-violet)] blur-3xl sm:size-36" />

      {isKaolackKitchen ? (
        <KaolackKitchenPreview
          accentClass={accentClass}
          name={name}
          t={t}
          visual={previewVisual}
        />
      ) : isSamaHoraire ? (
        <SamaHorairePreview
          accentClass={accentClass}
          name={name}
          t={t}
          visual={previewVisual}
        />
      ) : (
        <GenericProjectPreview
          accentClass={accentClass}
          name={name}
          t={t}
          visual={previewVisual}
        />
      )}
    </div>
  );
}

function ProjectCard({ index = 0, project, translationKey }) {
  const { t } = useTranslation();
  const [isBackendNoticeOpen, setIsBackendNoticeOpen] = useState(false);
  const [isPrivateRepoOpen, setIsPrivateRepoOpen] = useState(false);
  const liveLink = project.links?.live?.trim() ?? "";
  const hasCodeAction = Boolean(project.repoPrivate);
  const hasProjectLinks = Boolean(liveLink || hasCodeAction);
  const shouldShowBackendNotice = Boolean(liveLink && project.backendNotice);

  const titleId = `project-${index + 1}-title`;
  const projectI18nBase = `projects.items.${translationKey}`;
  const projectName = translationKey ? t(`${projectI18nBase}.name`) : project.name;
  const projectType = translationKey ? t(`${projectI18nBase}.type`) : project.type;
  const projectStatus = translationKey
    ? t(`${projectI18nBase}.status`)
    : project.status;
  const projectDescription = translationKey
    ? t(`${projectI18nBase}.description`)
    : project.description;
  const translatedHighlights = translationKey
    ? t(`${projectI18nBase}.highlights`, { returnObjects: true })
    : project.highlights;
  const projectHighlights = Array.isArray(translatedHighlights)
    ? translatedHighlights
    : project.highlights;
  const projectNote = project.note ? t("projects.privateRepoNote") : "";
  const ctaClassName =
    "inline-flex min-h-11 max-w-full touch-manipulation items-center justify-center rounded-button border border-[color:var(--app-border)] px-4 py-2 text-center text-sm font-semibold leading-snug wrap-break-word text-[color:var(--app-text-main)] transition hover:border-[color:var(--app-accent-border)] hover:bg-[var(--app-accent-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--app-focus-ring)]";

  function handleLiveClick() {
    setIsBackendNoticeOpen(true);
  }

  function handleContinueToLiveSite() {
    if (liveLink) {
      window.open(liveLink, "_blank", "noopener,noreferrer");
    }

    setIsBackendNoticeOpen(false);
  }

  function handlePrivateRepoClick() {
    setIsBackendNoticeOpen(false);
    setIsPrivateRepoOpen(true);
  }

  return (
    <>
      <GlassCard
        aria-labelledby={titleId}
        as="article"
        className="flex h-full min-w-0 flex-col gap-5 overflow-hidden sm:gap-6"
      >
        <ProjectPreview index={index} name={project.name} t={t} />

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="min-w-0">
            <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
              <span className="max-w-full rounded-button border border-[color:var(--app-accent-border)] bg-[var(--app-accent-soft)] px-3 py-1 text-center text-xs font-semibold leading-snug wrap-break-word uppercase text-[color:var(--app-accent)]">
                {projectStatus}
              </span>
              <span className="max-w-full wrap-break-word text-sm font-medium leading-snug text-[color:var(--app-text-soft)]">
                {projectType}
              </span>
            </div>

            <h3
              className="mt-3 max-w-full wrap-break-word text-xl font-semibold leading-tight text-[color:var(--app-text-main)] sm:mt-4 sm:text-2xl"
              id={titleId}
            >
              {projectName}
            </h3>

            <p className="text-pretty-safe mt-3 max-w-full wrap-break-word leading-7 text-[color:var(--app-text-muted)] sm:mt-4">
              {projectDescription}
            </p>
          </div>

          <div className="mt-5 min-w-0 sm:mt-6">
            <p className="max-w-full wrap-break-word text-sm font-semibold uppercase text-[color:var(--app-accent)]">
              {t("projects.highlightsLabel")}
            </p>
            <ul className="mt-3 grid min-w-0 gap-1.5 text-sm leading-6 text-[color:var(--app-text-muted)] sm:grid-cols-2 sm:gap-2">
              {projectHighlights.map((highlight) => (
                <li className="flex min-w-0 gap-2" key={highlight}>
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--app-accent)]"
                  />
                  <span className="min-w-0 max-w-full wrap-break-word">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <ul
            aria-label={t("projects.aria.projectStack", {
              title: projectName,
            })}
            className="m-0 mt-5 flex min-w-0 max-w-full list-none flex-wrap gap-1.5 p-0 sm:mt-6 sm:gap-2"
          >
            {project.stack.map((tech) => (
              <li
                className="max-w-full rounded-button border border-[color:var(--app-chip-border)] bg-[var(--app-chip-bg)] px-2.5 py-1 text-center text-xs font-medium leading-snug wrap-break-word text-[color:var(--app-chip-text)] sm:px-3 sm:py-1.5"
                key={`${project.name}-${tech}`}
              >
                {tech}
              </li>
            ))}
          </ul>

          {(hasProjectLinks || project.note) && (
            <div className="mt-5 min-w-0 border-t border-[color:var(--app-border)] pt-4 sm:mt-6 sm:pt-5">
              {hasProjectLinks && (
                <div className="flex min-w-0 flex-wrap gap-3">
                  {liveLink && (
                    <>
                      {shouldShowBackendNotice ? (
                        <button
                          aria-haspopup="dialog"
                          aria-label={t("projects.aria.openProject", {
                            title: projectName,
                          })}
                          className={ctaClassName}
                          onClick={handleLiveClick}
                          type="button"
                        >
                          {t("projects.actions.viewProject")}
                        </button>
                      ) : (
                        <a
                          aria-label={t("projects.aria.openProjectNewTab", {
                            title: projectName,
                          })}
                          className={ctaClassName}
                          href={liveLink}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {t("projects.actions.viewProject")}
                        </a>
                      )}
                    </>
                  )}

                  {project.repoPrivate && (
                    <button
                      aria-haspopup="dialog"
                      aria-label={t("projects.aria.openPrivateRepoInfo", {
                        title: projectName,
                      })}
                      className={ctaClassName}
                      onClick={handlePrivateRepoClick}
                      type="button"
                    >
                      {t("projects.actions.viewCode")}
                    </button>
                  )}
                </div>
              )}

              {project.note && (
                <p
                  className={`${hasProjectLinks ? "mt-4 " : ""}inline-flex max-w-full rounded-button border border-[color:var(--app-chip-border)] bg-[var(--app-chip-bg)] px-3 py-1.5 text-xs font-medium leading-snug wrap-break-word text-[color:var(--app-text-soft)]`}
                >
                  {projectNote}
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
        projectName={projectName}
      />
      <PrivateRepoModal
        isOpen={isPrivateRepoOpen}
        onClose={() => setIsPrivateRepoOpen(false)}
        projectName={projectName}
      />
    </>
  );
}

export default ProjectCard;
