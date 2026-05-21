import Container from '../ui/Container'

function ProjectsSection() {
  return (
    <section className="section-padding" id="projects">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-glow">
              Projets
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ice-50">
              Les projets sélectionnés seront ajoutés ici.
            </h2>
          </div>
          <p className="leading-7 text-text-muted">
            Pour l'instant, cette section reste volontairement simple afin de
            concentrer cette étape sur le layout, la navigation et le hero.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default ProjectsSection
