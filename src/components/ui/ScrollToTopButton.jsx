import { AnimatePresence, motion } from "framer-motion";
import { useId } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useTranslation } from "react-i18next";

import useScrollProgress from "../../hooks/useScrollProgress";
import { useReducedMotionPreference } from "../../hooks/useReducedMotionPreference";

const circleRadius = 20;
const circleCircumference = 2 * Math.PI * circleRadius;

function ScrollToTopButton() {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotionPreference();
  const { isVisible, progress } = useScrollProgress();
  const progressId = useId();
  const progressPercent = Math.round(progress * 100);
  const strokeDashoffset = circleCircumference * (1 - progress);
  const progressLabel = t("scrollToTop.progress", {
    progress: progressPercent,
  });

  function handleScrollToTop() {
    const behavior = prefersReducedMotion ? "auto" : "smooth";
    const homeSection = document.getElementById("home");

    if (homeSection) {
      homeSection.scrollIntoView({
        behavior,
        block: "start",
      });
      return;
    }

    window.scrollTo({
      behavior,
      top: 0,
    });
  }

  const motionProps = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.01 },
      }
    : {
        initial: { opacity: 0, scale: 0.92, y: 10 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.92, y: 10 },
        transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          aria-describedby={progressId}
          aria-label={t("scrollToTop.label")}
          className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 grid size-12 touch-manipulation place-items-center rounded-full border border-[color:var(--app-border)] bg-[var(--app-surface)] text-[color:var(--app-text-main)] shadow-[var(--app-shadow-soft)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[color:var(--app-accent-border)] hover:bg-[var(--app-accent-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--app-focus-ring)] sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))] sm:right-6 sm:size-14"
          onClick={handleScrollToTop}
          title={t("scrollToTop.label")}
          type="button"
          {...motionProps}
        >
          <span className="sr-only" id={progressId}>
            {progressLabel}
          </span>
          <svg
            aria-hidden="true"
            className="absolute inset-0 size-full -rotate-90"
            focusable="false"
            viewBox="0 0 48 48"
          >
            <circle
              className="stroke-[color:var(--app-border)]"
              cx="24"
              cy="24"
              fill="none"
              r={circleRadius}
              strokeWidth="3"
            />
            <circle
              className="stroke-[color:var(--app-accent)]"
              cx="24"
              cy="24"
              fill="none"
              r={circleRadius}
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              strokeWidth="3"
              style={{
                transition: prefersReducedMotion
                  ? "none"
                  : "stroke-dashoffset 120ms ease-out",
              }}
            />
          </svg>
          <FiArrowUp
            aria-hidden="true"
            className="relative size-4 sm:size-5"
            focusable="false"
          />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export default ScrollToTopButton;
