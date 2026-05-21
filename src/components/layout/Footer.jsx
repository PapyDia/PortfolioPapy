import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'

function Footer() {
  const { footer, identity } = portfolioData

  return (
    <footer className="border-t border-white/10 bg-navy-950/50 py-8">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-sm font-semibold text-ice-50">
              {identity.name}
            </p>
            <p className="mt-1 text-xs text-text-soft">{identity.title}</p>
          </div>

          <p className="max-w-xl text-sm text-text-soft md:text-center">
            {footer}
          </p>

          <p className="text-xs font-medium uppercase text-cyan-glow">
            React · Tailwind CSS · Vite
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
