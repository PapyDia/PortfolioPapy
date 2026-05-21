import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'

function Footer() {
  const { footer, identity } = portfolioData

  return (
    <footer className="border-t border-white/10 bg-navy-950/50 py-8">
      <Container>
        <div className="flex min-w-0 flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div className="min-w-0">
            <p className="max-w-full break-words text-sm font-semibold text-ice-50">
              {identity.name}
            </p>
            <p className="mt-1 max-w-full break-words text-xs text-text-soft">
              {identity.title}
            </p>
          </div>

          <p className="max-w-xl break-words text-sm text-text-soft md:text-center">
            {footer}
          </p>

          <p className="flex max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-1 text-center text-xs font-medium uppercase text-cyan-glow md:justify-end">
            <span>React</span>
            <span aria-hidden="true">·</span>
            <span>Tailwind CSS</span>
            <span aria-hidden="true">·</span>
            <span>Vite</span>
            <span aria-hidden="true">·</span>
            <span>MongoDB</span>
            <span aria-hidden="true">·</span>
            <span>MySQL</span>
            <span aria-hidden="true">·</span>
            <span>Express</span>
            <span aria-hidden="true">·</span>
            <span>Git</span>
            <span aria-hidden="true">·</span>
            <span>Docker</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
