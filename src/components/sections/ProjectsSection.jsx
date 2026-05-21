import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'
import ProjectCard from '../ui/ProjectCard'
import SectionHeader from '../ui/SectionHeader'

function ProjectsSection() {
  const { projects } = portfolioData

  return (
    <section
      aria-labelledby="projects-title"
      className="section-padding relative overflow-hidden"
      id="projects"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-20 size-72 rounded-full bg-cyan-glow/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 size-72 rounded-full bg-violet-glow/10 blur-3xl"
      />

      <Container>
        <SectionHeader
          align="center"
          description={projects.description}
          eyebrow={projects.eyebrow}
          id="projects-title"
          title={projects.title}
        />

        <div className="mt-8 grid min-w-0 gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2">
          {projects.items.map((project, index) => (
            <ProjectCard
              index={index}
              key={project.name}
              project={project}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProjectsSection
