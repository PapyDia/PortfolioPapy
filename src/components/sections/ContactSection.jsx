import { portfolioData } from '../../data/portfolioData'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeader from '../ui/SectionHeader'

function ContactSection() {
  const { contact } = portfolioData
  // CTAs without an href are not rendered: no fake buttons or invented links.
  const contactCtas = [contact.primaryCta, contact.secondaryCta].filter(
    (cta) => cta.href,
  )

  return (
    <section className="section-padding relative overflow-hidden" id="contact">
      <div className="pointer-events-none absolute left-1/2 top-16 size-72 -translate-x-1/2 rounded-full bg-cyan-glow/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 size-72 rounded-full bg-violet-glow/10 blur-3xl" />

      <Container>
        <div className="glass-panel relative mx-auto max-w-6xl min-w-0 overflow-hidden p-4 text-center sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-20 -top-20 size-56 rounded-full bg-blue-glow/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-10 size-56 rounded-full bg-cyan-glow/10 blur-3xl" />

          <div className="relative min-w-0">
            <SectionHeader
              align="center"
              description={contact.description}
              eyebrow={contact.eyebrow}
              title={contact.title}
            />

            {contactCtas.length > 0 ? (
              <div className="mt-8 flex min-w-0 flex-col justify-center gap-3 sm:flex-row">
                {contactCtas.map((cta, index) => (
                  <Button
                    className="w-full sm:w-auto"
                    href={cta.href}
                    key={cta.label}
                    variant={index === 0 ? 'primary' : 'secondary'}
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            ) : (
              <p className="mx-auto mt-7 max-w-full rounded-2xl border border-ice-300/15 bg-white/[0.04] px-4 py-3 text-center text-sm font-medium leading-6 break-words text-text-muted sm:mt-8 sm:max-w-xl sm:rounded-button sm:px-5">
                Les liens de contact seront ajoutés prochainement.
              </p>
            )}

            <div className="mt-8 grid min-w-0 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
              {contact.cards.map((card) => (
                <article
                  className="premium-border min-w-0 rounded-card bg-white/[0.03] p-4 text-center sm:p-5 md:text-left"
                  key={card.title}
                >
                  <h3 className="max-w-full break-words text-lg font-semibold leading-tight text-ice-50">
                    {card.title}
                  </h3>
                  <p className="text-pretty-safe mt-2 max-w-full break-words leading-7 text-text-muted sm:mt-3">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="text-pretty-safe mx-auto mt-6 max-w-2xl break-words text-sm leading-6 text-text-soft sm:mt-8">
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
