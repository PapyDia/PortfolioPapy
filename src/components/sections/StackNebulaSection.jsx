import { techStack } from '../../constants/techStack'
import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'
import TechBadge from '../ui/TechBadge'

function StackNebulaSection() {
  return (
    <section className="section-padding" id="stack">
      <Container>
        <div className="glass-panel relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute right-0 top-0 size-56 rounded-full bg-cyan-glow/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase text-cyan-glow">
                Stack
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ice-50 sm:text-4xl">
                {portfolioData.stack.title}
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-text-muted">
                {portfolioData.stack.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default StackNebulaSection
