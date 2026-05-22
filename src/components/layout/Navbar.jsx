import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { mobileMenuVariants } from '../../constants/animations'
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/75 backdrop-blur-xl">
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

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate="open"
            className="lg:hidden"
            exit="exit"
            initial="closed"
            variants={mobileMenuVariants}
          >
            <Container className="pb-4">
              <nav
                aria-label="Navigation mobile"
                className="glass-panel flex max-h-[calc(100vh-5rem)] flex-col gap-1 overflow-y-auto rounded-2xl p-2"
                id="mobile-navigation"
              >
                {navigationItems.map((item) => (
                  <a
                    className="flex min-h-11 touch-manipulation items-center rounded-2xl px-4 py-3 text-sm font-medium text-text-muted transition hover:bg-cyan-glow/10 hover:text-ice-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-glow"
                    href={item.href}
                    key={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
