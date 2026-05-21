import Container from '../ui/Container'

function SkillsSection() {
  return (
    <section className="section-padding" id="skills">
      <Container>
        <div className="glass-panel p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase text-cyan-glow">
            Compétences
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ice-50">
            Les compétences seront détaillées dans la prochaine étape.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-muted">
            Frontend, backend, bases de données, authentification et déploiement
            seront présentés avec une structure claire et lisible.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default SkillsSection
