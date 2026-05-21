import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'
import ProcessStep from '../ui/ProcessStep'
import SectionHeader from '../ui/SectionHeader'

function ProcessSection() {
  const { process } = portfolioData

  return (
    <section
      aria-labelledby="process-title"
      className="section-padding relative overflow-hidden"
      id="process"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-24 size-72 rounded-full bg-blue-glow/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-0 size-72 rounded-full bg-cyan-glow/10 blur-3xl"
      />

      <Container>
        <SectionHeader
          align="center"
          description={process.description}
          eyebrow={process.eyebrow}
          id="process-title"
          title={process.title}
        />

        <div className="relative mt-8 min-w-0 sm:mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-cyan-glow/20 lg:block"
          />

          <ol className="m-0 grid min-w-0 list-none gap-4 p-0 md:grid-cols-2 lg:gap-6">
            {process.steps.map((step, index) => (
              <ProcessStep
                index={index}
                key={step.number}
                step={step}
              />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}

export default ProcessSection
