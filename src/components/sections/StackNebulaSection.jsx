import { techStack } from '../../constants/techStack'
import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'
import TechBadge from '../ui/TechBadge'

function StackNebulaSection() {
  return (
    <section className="section-padding" id="stack">
      <Container>
        <div className="glass-panel relative min-w-0 max-w-full overflow-hidden px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
          <div className="pointer-events-none absolute right-0 top-0 size-56 rounded-full bg-cyan-glow/10 blur-3xl" />
          <div className="relative grid min-w-0 gap-6 sm:gap-8 xl:grid-cols-[0.85fr_1.15fr] xl:items-center">
            <div className="min-w-0 text-center xl:text-left">
              <p className="max-w-full break-words text-sm font-semibold uppercase text-cyan-glow">
                Stack
              </p>
              <h2 className="text-balance-safe mt-2 max-w-full break-words text-2xl font-semibold leading-tight text-ice-50 sm:mt-3 sm:text-4xl">
                {portfolioData.stack.title}
              </h2>
              <p className="text-pretty-safe mx-auto mt-4 max-w-xl break-words leading-7 text-text-muted xl:mx-0">
                {portfolioData.stack.description}
              </p>
            </div>

            <div className="flex min-w-0 max-w-full flex-wrap justify-center gap-2 sm:gap-3 xl:justify-start">
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
