import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'
import ProjectCard from '../ui/ProjectCard'
import SectionHeader from '../ui/SectionHeader'

function ProjectsSection() {
  const { projects } = portfolioData

  return (
    <section className="section-padding relative overflow-hidden" id="projects">
      <div className="pointer-events-none absolute left-0 top-20 size-72 rounded-full bg-cyan-glow/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 size-72 rounded-full bg-violet-glow/10 blur-3xl" />

      <Container>
        <SectionHeader
          align="center"
          description={projects.description}
          eyebrow={projects.eyebrow}
          title={projects.title}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
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
