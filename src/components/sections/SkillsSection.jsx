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

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills.groups.map((group) => (
            <GlassCard className="flex h-full flex-col" key={group.title}>
              <div>
                <h3 className="text-xl font-semibold text-ice-50">
                  {group.title}
                </h3>
                <p className="mt-3 leading-7 text-text-muted">
                  {group.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    className="rounded-button border border-ice-300/15 bg-cyan-glow/5 px-3 py-1.5 text-sm font-medium text-ice-100"
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
