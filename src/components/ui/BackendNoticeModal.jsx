import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useId, useRef } from 'react'

import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference'
import Button from './Button'

function BackendNoticeModal({
  isOpen,
  onClose,
  onContinue,
  projectName,
  projectUrl,
}) {
  const prefersReducedMotion = useReducedMotionPreference()
  const titleId = useId()
  const descriptionId = useId()
  const continueButtonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    continueButtonRef.current?.focus()
  }, [isOpen])

  const overlayAnimation = prefersReducedMotion
    ? {}
    : {
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        initial: { opacity: 0 },
        transition: { duration: 0.2 },
      }

  const modalAnimation = prefersReducedMotion
    ? {}
    : {
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.98, y: 10 },
        initial: { opacity: 0, scale: 0.96, y: 14 },
        transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
      }

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[100] grid min-w-0 place-items-center overflow-y-auto bg-navy-950/80 px-4 py-6 backdrop-blur-md sm:px-6"
          onClick={onClose}
          {...overlayAnimation}
        >
          <motion.div
            aria-describedby={descriptionId}
            aria-labelledby={titleId}
            aria-modal="true"
            className="glass-panel relative w-full max-w-lg overflow-hidden border-ice-300/20 p-5 text-center shadow-[0_24px_90px_rgba(2,6,23,0.72),0_0_60px_rgba(56,189,248,0.16)] sm:p-7"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            {...modalAnimation}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-8 -top-20 h-32 rounded-full bg-cyan-glow/15 blur-3xl"
            />

            <div className="relative mx-auto grid size-14 place-items-center rounded-full border border-cyan-glow/25 bg-cyan-glow/10 text-2xl shadow-glow-soft sm:size-16 sm:text-3xl">
              ⏳
            </div>

            <div className="relative mt-5 min-w-0">
              <p className="max-w-full break-words text-xs font-semibold uppercase text-cyan-glow">
                {projectName ?? 'Projet full-stack'}
              </p>

              <h2
                className="mt-2 max-w-full break-words text-xl font-semibold leading-tight text-ice-50 sm:text-2xl"
                id={titleId}
              >
                Un petit instant avant le chargement
              </h2>

              <div
                className="mx-auto mt-4 max-w-md space-y-3 text-sm leading-6 text-text-muted sm:text-base sm:leading-7"
                id={descriptionId}
              >
                <p className="max-w-full break-words">
                  Ce projet utilise un backend hébergé sur le plan gratuit de
                  Render. Après une période d’inactivité, le service peut se
                  mettre en veille et prendre quelques secondes à se relancer.
                </p>
                <p className="max-w-full break-words text-text-soft">
                  Si les données ne s’affichent pas immédiatement, patientez un
                  instant puis actualisez la page.
                </p>
              </div>
            </div>

            <div className="relative mt-6 flex min-w-0 flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                aria-label={
                  projectUrl
                    ? `Continuer vers le site ${projectUrl}`
                    : 'Continuer vers le site'
                }
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
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default BackendNoticeModal
