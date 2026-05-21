import { useState } from 'react'

import { navigationItems } from '../../constants/navigation'
import { portfolioData } from '../../data/portfolioData'
import Button from '../ui/Button'
import Container from '../ui/Container'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/75 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between">
        <a
          className="group inline-flex items-center gap-3 rounded-button focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-glow"
          href="#home"
          onClick={closeMenu}
        >
          <span className="grid size-9 place-items-center rounded-full border border-cyan-glow/30 bg-cyan-glow/10 text-sm font-bold text-ice-50 shadow-glow-soft">
            PD
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-ice-50">
              {portfolioData.identity.name}
            </span>
            <span className="text-xs text-text-soft">Full-Stack JS</span>
          </span>
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              className="text-sm font-medium text-text-muted transition hover:text-ice-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-glow"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="min-h-10 px-5" href="#contact" variant="secondary">
            Me contacter
          </Button>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="grid size-10 place-items-center rounded-full border border-ice-300/15 bg-white/5 text-ice-50 backdrop-blur-md transition hover:border-cyan-glow/40 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
            <span className="h-0.5 rounded-full bg-current" />
          </span>
        </button>
      </Container>

      {isOpen && (
        <Container className="pb-4 md:hidden">
          <nav
            aria-label="Navigation mobile"
            className="glass-panel flex flex-col gap-1 rounded-2xl p-2"
          >
            {navigationItems.map((item) => (
              <a
                className="rounded-2xl px-4 py-3 text-sm font-medium text-text-muted transition hover:bg-cyan-glow/10 hover:text-ice-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-glow"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      )}
    </header>
  )
}

export default Navbar
