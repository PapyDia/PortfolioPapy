import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'
import GlassCard from '../ui/GlassCard'
import SectionHeader from '../ui/SectionHeader'

function AboutSection() {
  const { about, identity } = portfolioData

  return (
    <section
      aria-labelledby="about-title"
      className="section-padding border-t border-white/10"
      id="about"
    >
      <Container>
        <div className="grid min-w-0 gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="min-w-0">
            <SectionHeader
              description={about.description}
              eyebrow={about.eyebrow}
              id="about-title"
              title={about.title}
            />

            <div className="mt-6 max-w-full space-y-4 text-center text-base leading-7 text-text-muted sm:mt-8 sm:space-y-5 sm:leading-8 lg:text-left">
              {about.paragraphs.map((paragraph) => (
                <p className="text-pretty-safe max-w-full break-words" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <GlassCard className="relative overflow-hidden text-center lg:text-left">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-cyan-glow/15 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 size-40 rounded-full bg-violet-glow/10 blur-3xl"
            />

            <div className="relative min-w-0">
              <p className="max-w-full break-words text-sm font-semibold uppercase text-cyan-glow">
                Profil
              </p>
              <h3 className="mt-3 max-w-full break-words text-xl font-semibold leading-tight text-ice-50 sm:mt-4 sm:text-2xl">
                {identity.name}
              </h3>
              <p className="mt-2 max-w-full break-words text-text-muted">
                {identity.title}
              </p>

              <ul
                aria-label="Points forts"
                className="m-0 mt-6 grid min-w-0 list-none gap-2 p-0 sm:mt-8 sm:grid-cols-2 sm:gap-3"
              >
                {about.highlights.map((highlight) => (
                  <li
                    className="max-w-full rounded-2xl border border-ice-300/15 bg-white/[0.04] px-3 py-2.5 text-center text-sm font-medium leading-snug break-words text-ice-100 sm:px-4 sm:py-3"
                    key={highlight}
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
