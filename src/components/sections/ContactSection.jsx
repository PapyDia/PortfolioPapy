import Container from '../ui/Container'

function ContactSection() {
  return (
    <section className="section-padding" id="contact">
      <Container>
        <div className="glass-panel mx-auto max-w-4xl p-6 text-center sm:p-10">
          <p className="text-sm font-semibold uppercase text-cyan-glow">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ice-50">
            Prêt à construire une application web moderne ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-text-muted">
            La section contact complète arrivera ensuite. Cette base garde déjà
            une ancre claire pour les appels à l'action du portfolio.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
