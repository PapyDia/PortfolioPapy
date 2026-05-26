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
import CodingBearIllustration from "./CodingBearIllustration";

function PrivateRepoModal({ isOpen, onClose, projectName }) {
  const prefersReducedMotion = useReducedMotionPreference();
  const titleId = useId();
  const descriptionId = useId();
  const understoodButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const restoreFocusRef = useRef(true);

  useDialogLifecycle(
    isOpen,
    onClose,
    understoodButtonRef,
    dialogRef,
    restoreFocusRef,
  );

  function handleContactClick() {
    restoreFocusRef.current = false;
    onClose();

    window.setTimeout(() => {
      const contactSection = document.getElementById("contact");

      contactSection?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
      contactSection?.focus();
      window.history.replaceState(null, "", "#contact");
    }, 0);
  }

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
          className="fixed inset-0 z-100 grid min-w-0 place-items-center overflow-y-auto bg-navy-950/80 p-4 backdrop-blur-md sm:p-6"
          onClick={onClose}
          {...overlayMotionProps}
        >
          <motion.div
            aria-describedby={descriptionId}
            aria-labelledby={titleId}
            aria-modal="true"
            className="glass-panel relative w-full max-w-xl overflow-hidden border-ice-300/20 p-4 text-center shadow-[0_24px_90px_rgba(2,6,23,0.72),0_0_70px_rgba(139,92,246,0.16)] sm:p-7"
            onClick={(event) => event.stopPropagation()}
            ref={dialogRef}
            role="dialog"
            tabIndex={-1}
            {...panelMotionProps}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 -top-24 h-40 rounded-full bg-cyan-glow/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/2 h-44 w-3/4 -translate-x-1/2 rounded-full bg-violet-glow/15 blur-3xl"
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
              <p className="max-w-full wrap-break-word text-xs font-semibold uppercase text-cyan-glow">
                {projectName ?? "Projet"}
              </p>

              <h2
                className="mt-2 max-w-full wrap-break-word text-2xl font-semibold leading-tight text-ice-50 sm:text-3xl"
                id={titleId}
              >
                Oups ! Repo privé
              </h2>

              <div
                className="mx-auto mt-3 max-w-lg space-y-2 text-sm leading-5 text-text-muted sm:text-base sm:leading-6"
                id={descriptionId}
              >
                <p className="max-w-full wrap-break-word">
                  Le code source de ce projet n’est pas public pour le moment.
                </p>
                <p className="max-w-full wrap-break-word text-text-soft">
                  Je peux présenter l’architecture, les choix techniques et les
                  fonctionnalités sur demande.
                </p>
                <p className="max-w-full wrap-break-word text-ice-100">
                  Nouni 🐻 garde le repo au chaud pendant que je peaufine encore
                  le projet.
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
                Compris
              </Button>
              <Button
                className="w-full sm:w-auto"
                onClick={handleContactClick}
                variant="secondary"
              >
                Me contacter
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default PrivateRepoModal;
