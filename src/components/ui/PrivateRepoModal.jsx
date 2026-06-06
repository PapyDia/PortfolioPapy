import { AnimatePresence, motion } from "framer-motion";
import { useId, useRef } from "react";
import { useTranslation } from "react-i18next";

import {
  modalContentItemVariants,
  modalOverlayVariants,
  modalPanelVariants,
} from "../../constants/animations";
import { portfolioData } from "../../data/portfolioData";
import useDialogLifecycle from "../../hooks/useDialogLifecycle";
import { useReducedMotionPreference } from "../../hooks/useReducedMotionPreference";
import Button from "./Button";
import CodingBearIllustration from "./CodingBearIllustration";

function PrivateRepoModal({ isOpen, onClose, projectName }) {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotionPreference();
  const email = portfolioData.contact.email?.trim() ?? "";
  const titleId = useId();
  const descriptionId = useId();
  const understoodButtonRef = useRef(null);
  const dialogRef = useRef(null);

  useDialogLifecycle(isOpen, onClose, understoodButtonRef, dialogRef);

  const overlayMotionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        variants: modalOverlayVariants,
      };

  const panelMotionProps = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        animate: "visible",
        exit: "exit",
        variants: modalPanelVariants,
      };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="smooth-scroll-area fixed inset-0 z-100 grid min-w-0 place-items-center overflow-y-auto bg-[var(--app-modal-overlay)] p-4 backdrop-blur-md sm:p-6"
          onClick={onClose}
          {...overlayMotionProps}
        >
          <motion.div
            aria-describedby={descriptionId}
            aria-labelledby={titleId}
            aria-modal="true"
            className="glass-panel smooth-scroll-area relative max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-x-hidden overflow-y-auto border-[color:var(--app-modal-border)] bg-[var(--app-modal-bg)] p-4 text-center shadow-[var(--app-modal-shadow)] sm:max-h-[calc(100dvh-3rem)] sm:p-7"
            onClick={(event) => event.stopPropagation()}
            ref={dialogRef}
            role="dialog"
            tabIndex={-1}
            {...panelMotionProps}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 -top-24 h-40 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/2 h-44 w-3/4 -translate-x-1/2 rounded-full bg-[var(--app-glow-violet)] blur-3xl"
            />

            <motion.div
              className="relative"
              variants={modalContentItemVariants}
            >
              <CodingBearIllustration />
            </motion.div>

            <motion.div
              className="relative mt-3 min-w-0"
              variants={modalContentItemVariants}
            >
              <p className="max-w-full wrap-break-word text-xs font-semibold uppercase text-[color:var(--app-accent)]">
                {projectName ?? t("projects.fallbackProject")}
              </p>

              <h2
                className="mt-2 max-w-full wrap-break-word text-2xl font-semibold leading-tight text-[color:var(--app-text-main)] sm:text-3xl"
                id={titleId}
              >
                {t("projects.privateRepoModal.title")}
              </h2>

              <div
                className="mx-auto mt-3 max-w-lg space-y-2 text-sm leading-5 text-[color:var(--app-text-muted)] sm:text-base sm:leading-6"
                id={descriptionId}
              >
                <p className="max-w-full wrap-break-word">
                  {t("projects.privateRepoModal.description")}
                </p>
                <p className="max-w-full wrap-break-word text-[color:var(--app-text-soft)]">
                  {t("projects.privateRepoModal.note")}
                </p>
                <p className="max-w-full wrap-break-word text-[color:var(--app-text-main)]">
                  {t("projects.privateRepoModal.extra")}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative mt-5 flex min-w-0 flex-col gap-2.5 sm:flex-row sm:justify-center"
              variants={modalContentItemVariants}
            >
              <Button
                className="w-full sm:w-auto"
                onClick={onClose}
                ref={understoodButtonRef}
              >
                {t("projects.actions.understood")}
              </Button>
              <Button
                aria-label={t("contact.aria.sendEmail", {
                  email,
                  name: portfolioData.identity.name,
                })}
                className="w-full sm:w-auto"
                href={`mailto:${email}`}
                onClick={onClose}
                variant="secondary"
              >
                {t("projects.actions.contact")}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default PrivateRepoModal;
