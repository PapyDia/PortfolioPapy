import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useId, useRef } from 'react'

import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference'
import Button from './Button'
import CodingBearIllustration from './CodingBearIllustration'

function PrivateRepoModal({ isOpen, onClose, projectName }) {
  const prefersReducedMotion = useReducedMotionPreference()
  const titleId = useId()
  const descriptionId = useId()
  const understoodButtonRef = useRef(null)

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

    understoodButtonRef.current?.focus()
  }, [isOpen])

  function handleContactClick() {
    onClose()

    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })
      window.history.replaceState(null, '', '#contact')
    }, 0)
  }

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
        exit: { opacity: 0, scale: 0.98, y: 12 },
        initial: { opacity: 0, scale: 0.96, y: 16 },
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
            className="glass-panel relative w-full max-w-xl overflow-hidden border-ice-300/20 p-5 text-center shadow-[0_24px_90px_rgba(2,6,23,0.72),0_0_70px_rgba(139,92,246,0.16)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            {...modalAnimation}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-10 -top-24 h-40 rounded-full bg-cyan-glow/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/2 h-44 w-3/4 -translate-x-1/2 rounded-full bg-violet-glow/15 blur-3xl"
            />

            <div className="relative">
              <CodingBearIllustration />
            </div>

            <div className="relative mt-4 min-w-0">
              <p className="max-w-full break-words text-xs font-semibold uppercase text-cyan-glow">
                {projectName ?? 'Projet'}
              </p>

              <h2
                className="mt-2 max-w-full break-words text-2xl font-semibold leading-tight text-ice-50 sm:text-3xl"
                id={titleId}
              >
                Oups ! Repo privé
              </h2>

              <div
                className="mx-auto mt-4 max-w-lg space-y-3 text-sm leading-6 text-text-muted sm:text-base sm:leading-7"
                id={descriptionId}
              >
                <p className="max-w-full break-words">
                  Le code source de ce projet n’est pas public pour le moment.
                </p>
                <p className="max-w-full break-words text-text-soft">
                  Je peux toutefois présenter l’architecture, les choix
                  techniques et les fonctionnalités du projet sur demande.
                </p>
                <p className="max-w-full break-words text-ice-100">
                  L’ours garde le repo au chaud pendant que je continue
                  d’améliorer le projet.
                </p>
              </div>
            </div>

            <div className="relative mt-6 flex min-w-0 flex-col gap-3 sm:flex-row sm:justify-center">
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
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default PrivateRepoModal
