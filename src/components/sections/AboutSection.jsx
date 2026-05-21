import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'
import GlassCard from '../ui/GlassCard'
import SectionHeader from '../ui/SectionHeader'

function AboutSection() {
  const { about, identity } = portfolioData

  return (
    <section className="section-padding border-t border-white/10" id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeader
              description={about.description}
              eyebrow={about.eyebrow}
              title={about.title}
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <GlassCard className="relative overflow-hidden">
            <div className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-cyan-glow/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 size-40 rounded-full bg-violet-glow/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase text-cyan-glow">
                Profil
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-ice-50">
                {identity.name}
              </h3>
              <p className="mt-2 text-text-muted">{identity.title}</p>
              <p className="mt-1 text-sm font-medium text-ice-300">
                {identity.location}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {about.highlights.map((highlight) => (
                  <span
                    className="rounded-2xl border border-ice-300/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-ice-100"
                    key={highlight}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
