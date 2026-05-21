import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'
import GlassCard from '../ui/GlassCard'
import SectionHeader from '../ui/SectionHeader'

function SkillsSection() {
  const { skills } = portfolioData

  return (
    <section className="section-padding" id="skills">
      <Container>
        <SectionHeader
          align="center"
          description={skills.description}
          eyebrow={skills.eyebrow}
          title={skills.title}
        />

        <div className="mt-8 grid min-w-0 gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-4">
          {skills.groups.map((group) => (
            <GlassCard className="flex h-full min-w-0 flex-col" key={group.title}>
              <div className="min-w-0">
                <h3 className="max-w-full break-words text-lg font-semibold leading-tight text-ice-50 sm:text-xl">
                  {group.title}
                </h3>
                <p className="text-pretty-safe mt-2 max-w-full break-words leading-7 text-text-muted sm:mt-3">
                  {group.description}
                </p>
              </div>

              <div className="mt-5 flex min-w-0 max-w-full flex-wrap justify-center gap-2 sm:mt-6 sm:justify-start">
                {group.items.map((item) => (
                  <span
                    className="max-w-full rounded-button border border-ice-300/15 bg-cyan-glow/5 px-2.5 py-1 text-center text-xs font-medium leading-snug break-words text-ice-100 sm:px-3 sm:py-1.5 sm:text-sm"
                    key={`${group.title}-${item}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SkillsSection
