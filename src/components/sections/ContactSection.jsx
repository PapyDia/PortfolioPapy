import { portfolioData } from '../../data/portfolioData'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'

function ContactSection() {
  const { contact } = portfolioData
  const contactCtas = [contact.primaryCta, contact.secondaryCta].filter(
    (cta) => cta.href,
  )

  return (
    <section className="section-padding relative overflow-hidden" id="contact">
      <div className="pointer-events-none absolute left-1/2 top-16 size-72 -translate-x-1/2 rounded-full bg-cyan-glow/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 size-72 rounded-full bg-violet-glow/10 blur-3xl" />

      <Container>
        <div className="glass-panel relative mx-auto max-w-6xl overflow-hidden p-6 text-center sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-20 -top-20 size-56 rounded-full bg-blue-glow/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-10 size-56 rounded-full bg-cyan-glow/10 blur-3xl" />

          <div className="relative">
            <SectionHeader
              align="center"
              description={contact.description}
              eyebrow={contact.eyebrow}
              title={contact.title}
            />

            {contactCtas.length > 0 ? (
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                {contactCtas.map((cta, index) => (
                  <Button
                    href={cta.href}
                    key={cta.label}
                    variant={index === 0 ? 'primary' : 'secondary'}
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            ) : (
              <p className="mx-auto mt-8 max-w-xl rounded-button border border-ice-300/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-text-muted">
                Les liens de contact seront ajoutés prochainement.
              </p>
            )}

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {contact.cards.map((card) => (
                <article
                  className="premium-border rounded-card bg-white/[0.03] p-5 text-left"
                  key={card.title}
                >
                  <h3 className="text-lg font-semibold text-ice-50">
                    {card.title}
                  </h3>
                  <p className="mt-3 leading-7 text-text-muted">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-6 text-text-soft">
              Chaque échange commence par une idée claire, un besoin réel et
              une solution construite avec soin.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
