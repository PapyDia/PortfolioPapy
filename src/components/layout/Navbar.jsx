import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import {
  mobileDrawerItemVariants,
  mobileDrawerVariants,
  mobileMenuVariants,
} from '../../constants/animations'
import { navigationItems } from '../../constants/navigation'
import { portfolioData } from '../../data/portfolioData'
import Button from '../ui/Button'
import Container from '../ui/Container'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close the mobile menu after an anchor click to keep navigation smooth.
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/80 shadow-[0_18px_60px_rgba(2,6,23,0.42)] backdrop-blur-xl">
        <Container className="flex min-h-16 items-center justify-between">
          <a
            aria-label={`${portfolioData.identity.name}, retour à l'accueil`}
            className="group inline-flex min-w-0 shrink-0 items-center gap-3 rounded-button py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-glow"
            href="#home"
            onClick={closeMenu}
          >
            <span
              aria-hidden="true"
              className="grid size-9 shrink-0 place-items-center rounded-full border border-cyan-glow/30 bg-cyan-glow/10 text-sm font-bold text-ice-50 shadow-glow-soft"
            >
              CM
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="max-w-full break-words text-sm font-semibold text-ice-50">
                {portfolioData.identity.name}
              </span>
              <span className="max-w-full break-words text-xs text-text-soft">
                Full-Stack JS
              </span>
            </span>
          </a>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-5 lg:flex xl:gap-8"
        >
          {navigationItems.map((item) => (
            <a
              className="rounded-button px-1 py-2 whitespace-nowrap text-sm font-medium text-text-muted transition hover:text-ice-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-glow"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            className="px-5 whitespace-nowrap"
            href="#contact"
            variant="secondary"
          >
            Me contacter
          </Button>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="grid size-11 shrink-0 touch-manipulation place-items-center rounded-full border border-ice-300/15 bg-white/5 text-ice-50 backdrop-blur-md transition hover:border-cyan-glow/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-glow lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span aria-hidden="true" className="flex w-4 flex-col gap-1.5">
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
          </span>
        </button>
        </Container>
      </header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate="open"
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-navy-950/55 backdrop-blur-sm lg:hidden"
            exit="exit"
            initial="closed"
            onClick={closeMenu}
            variants={mobileMenuVariants}
          >
            <motion.aside
              aria-label="Menu mobile"
              className="relative h-full w-[min(21rem,calc(100vw-1rem))] overflow-hidden border-r border-ice-300/15 bg-navy-950/80 shadow-[24px_0_80px_rgba(2,6,23,0.58)] backdrop-blur-2xl"
              onClick={(event) => event.stopPropagation()}
              variants={mobileDrawerVariants}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/70 to-transparent"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 top-10 h-40 w-28 rotate-12 bg-gradient-to-b from-white/18 via-cyan-glow/10 to-transparent blur-2xl"
              />
              <motion.div
                aria-hidden="true"
                animate={{ x: '130%' }}
                className="pointer-events-none absolute inset-y-0 left-[-70%] w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-60%' }}
                transition={{ delay: 0.08, duration: 0.75, ease: 'easeOut' }}
              />

              <div className="relative flex h-full min-w-0 flex-col px-4 py-5">
                <div className="mb-5 flex min-w-0 items-center gap-3 rounded-2xl border border-ice-300/15 bg-white/[0.04] p-3">
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-cyan-glow/30 bg-cyan-glow/10 text-sm font-bold text-ice-50 shadow-glow-soft"
                  >
                    CM
                  </span>
                  <span className="min-w-0">
                    <span className="block max-w-full break-words text-sm font-semibold text-ice-50">
                      {portfolioData.identity.name}
                    </span>
                    <span className="block max-w-full break-words text-xs text-text-soft">
                      Développeur
                    </span>
                  </span>
                </div>

                <motion.nav
                  aria-label="Navigation mobile"
                  className="flex min-w-0 flex-1 flex-col gap-1 overflow-y-auto rounded-2xl border border-ice-300/15 bg-white/[0.035] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                  id="mobile-navigation"
                  variants={{
                    open: {
                      transition: {
                        delayChildren: 0.08,
                        staggerChildren: 0.045,
                      },
                    },
                  }}
                >
                  {navigationItems.map((item) => (
                    <motion.a
                      className="group flex min-h-12 touch-manipulation items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-text-muted transition hover:border-cyan-glow/25 hover:bg-cyan-glow/10 hover:text-ice-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-glow"
                      href={item.href}
                      key={item.href}
                      onClick={closeMenu}
                      variants={mobileDrawerItemVariants}
                    >
                      <span>{item.label}</span>
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-cyan-glow/0 transition group-hover:bg-cyan-glow/80"
                      />
                    </motion.a>
                  ))}
                </motion.nav>

                <Button
                  className="mt-4 w-full"
                  href="#contact"
                  onClick={closeMenu}
                  variant="secondary"
                >
                  Me contacter
                </Button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
