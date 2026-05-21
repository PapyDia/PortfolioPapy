import Container from '../ui/Container'

function ProcessSection() {
  return (
    <section className="section-padding" id="process">
      <Container>
        <div className="premium-border rounded-card bg-white/[0.03] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase text-cyan-glow">
            Méthode
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ice-50">
            Une méthode claire, de l'idée au produit.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-text-muted">
            Cette future section expliquera le processus de conception,
            développement, test et mise en ligne.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default ProcessSection
