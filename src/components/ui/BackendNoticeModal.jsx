import { AnimatePresence, motion } from "framer-motion";
import { useId, useRef } from "react";

import {
  modalContentItemVariants,
  modalOverlayVariants,
  modalPanelVariants,
} from "../../constants/animations";
import useDialogLifecycle from "../../hooks/useDialogLifecycle";
import { useReducedMotionPreference } from "../../hooks/useReducedMotionPreference";
import Button from "./Button";

function BackendNoticeModal({ isOpen, onClose, onContinue, projectName }) {
  const prefersReducedMotion = useReducedMotionPreference();
  const titleId = useId();
  const descriptionId = useId();
  const continueButtonRef = useRef(null);
  const dialogRef = useRef(null);

  useDialogLifecycle(isOpen, onClose, continueButtonRef, dialogRef);

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
          className="fixed inset-0 z-100 grid min-w-0 place-items-center overflow-y-auto bg-[var(--app-modal-overlay)] p-4 backdrop-blur-md sm:p-6"
          onClick={onClose}
          {...overlayMotionProps}
        >
          <motion.div
            aria-describedby={descriptionId}
            aria-labelledby={titleId}
            aria-modal="true"
            className="glass-panel relative max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-x-hidden overflow-y-auto border-[color:var(--app-modal-border)] bg-[var(--app-modal-bg)] p-5 text-center shadow-[var(--app-modal-shadow)] sm:max-h-[calc(100dvh-3rem)] sm:p-7"
            onClick={(event) => event.stopPropagation()}
            ref={dialogRef}
            role="dialog"
            tabIndex={-1}
            {...panelMotionProps}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 -top-20 h-32 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
            />

            <motion.div
              aria-hidden="true"
              className="relative mx-auto grid size-14 place-items-center rounded-full border border-[color:var(--app-accent-border)] bg-[var(--app-accent-soft)] text-2xl shadow-[var(--app-shadow-soft)] sm:size-16 sm:text-3xl"
              variants={modalContentItemVariants}
            >
              ⏳
            </motion.div>

            <motion.div
              className="relative mt-5 min-w-0"
              variants={modalContentItemVariants}
            >
              <p className="max-w-full wrap-break-word text-xs font-semibold uppercase text-[color:var(--app-accent)]">
                {projectName ?? "Projet full-stack"}
              </p>

              <h2
                className="mt-2 max-w-full wrap-break-word text-xl font-semibold leading-tight text-[color:var(--app-text-main)] sm:text-2xl"
                id={titleId}
              >
                Un petit instant avant le chargement
              </h2>

              <div
                className="mx-auto mt-4 max-w-md space-y-3 text-sm leading-6 text-[color:var(--app-text-muted)] sm:text-base sm:leading-7"
                id={descriptionId}
              >
                <p className="max-w-full wrap-break-word">
                  Ce projet utilise un backend hébergé sur le plan gratuit de
                  Render. Après une période d’inactivité, le service peut se
                  mettre en veille et prendre quelques secondes à se relancer.
                </p>
                <p className="max-w-full wrap-break-word text-[color:var(--app-text-soft)]">
                  Si les données ne s’affichent pas immédiatement, patientez un
                  instant puis actualisez la page.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative mt-6 flex min-w-0 flex-col gap-3 sm:flex-row sm:justify-center"
              variants={modalContentItemVariants}
            >
              <Button
                className="w-full sm:w-auto"
                onClick={onContinue}
                ref={continueButtonRef}
              >
                Continuer vers le site
              </Button>
              <Button
                className="w-full sm:w-auto"
                onClick={onClose}
                variant="secondary"
              >
                Fermer
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default BackendNoticeModal;
