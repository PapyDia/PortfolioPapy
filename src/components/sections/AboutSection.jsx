import Container from '../ui/Container'

function AboutSection() {
  return (
    <section className="section-padding border-t border-white/10" id="about">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-cyan-glow">
            À propos
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ice-50">
            Une section personnelle arrive ici.
          </h2>
          <p className="mt-4 leading-7 text-text-muted">
            Cette zone est prête pour présenter le parcours, l'approche et la
            vision de Papy Dia sans alourdir cette première étape visuelle.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
