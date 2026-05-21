import { heroVisualStack, quickStack } from '../../constants/techStack'
import { portfolioData } from '../../data/portfolioData'
import Button from '../ui/Button'
import Container from '../ui/Container'
import TechBadge from '../ui/TechBadge'

const visualBadges = [
  // Fixed positions compose the abstract visual without external imagery.
  { name: heroVisualStack[0], className: 'left-4 top-8 sm:left-8' },
  { name: heroVisualStack[1], className: 'right-4 top-16 sm:right-8' },
  { name: heroVisualStack[2], className: 'bottom-10 left-6 sm:left-10' },
  { name: heroVisualStack[3], className: 'bottom-20 right-3 sm:right-8' },
]

function HeroSection() {
  const { hero, identity } = portfolioData

  return (
    <section
      className="relative isolate overflow-hidden pb-20 pt-16 sm:pt-20 lg:min-h-[calc(100vh-4rem)] lg:pb-24 lg:pt-24"
      id="home"
    >
      <div className="pointer-events-none absolute left-1/2 top-8 -z-10 size-72 -translate-x-1/2 rounded-full bg-cyan-glow/15 blur-3xl sm:size-96" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 size-72 rounded-full bg-blue-glow/10 blur-3xl" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-button border border-cyan-glow/25 bg-cyan-glow/10 px-4 py-2 text-sm font-medium text-ice-100 backdrop-blur-md">
              <span className="size-2 rounded-full bg-cyan-glow shadow-glow-soft" />
              {hero.badge}
            </div>

            <p className="mb-3 text-sm font-semibold uppercase text-cyan-glow">
              {identity.name} · {identity.location}
            </p>

            <h1 className="text-4xl font-semibold leading-tight text-ice-50 sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg lg:mx-0">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {quickStack.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute inset-8 rounded-full bg-cyan-glow/15 blur-3xl" />
            <div className="glass-panel relative aspect-square overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(125,211,252,0.16),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(139,92,246,0.14),transparent_32%)]" />
              <div className="absolute inset-8 rounded-full border border-ice-300/10" />
              <div className="absolute inset-16 rounded-full border border-dashed border-cyan-glow/20" />

              {visualBadges.map((badge) => (
                <span
                  className={`absolute rounded-button border border-ice-300/20 bg-navy-900/70 px-4 py-2 text-sm font-semibold text-ice-100 shadow-glow-soft backdrop-blur-xl ${badge.className}`}
                  key={badge.name}
                >
                  {badge.name}
                </span>
              ))}

              <div className="relative z-10 grid h-full place-items-center">
                <div className="grid size-44 place-items-center rounded-full border border-cyan-glow/25 bg-navy-950/70 text-center shadow-glow-soft backdrop-blur-xl sm:size-52">
                  <div>
                    <p className="text-sm font-medium text-text-soft">
                      {identity.title}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-ice-50">
                      Full-Stack JS
                    </p>
                    <p className="mt-2 text-xs font-medium text-cyan-glow">
                      React · Node · MongoDB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
