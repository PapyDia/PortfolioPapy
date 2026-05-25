import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import {
  scaleIn,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '../../constants/animations'
import { portfolioData } from '../../data/portfolioData'
import Button from '../ui/Button'
import Container from '../ui/Container'
import ContactLinkCard from '../ui/ContactLinkCard'
import SectionHeader from '../ui/SectionHeader'

function ContactSection() {
  const { contact } = portfolioData
  const [copied, setCopied] = useState(false)
  const email = contact.email?.trim() ?? ''
  const activeLinks = (contact.links ?? []).filter((link) =>
    link.href?.trim(),
  )

  useEffect(() => {
    if (!copied) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => {
      setCopied(false)
    }, 2200)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [copied])

  const handleCopyEmail = async () => {
    if (!email || !navigator.clipboard?.writeText) {
      return
    }

    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section
      aria-labelledby="contact-title"
      className="section-padding section-divider relative overflow-hidden focus:outline-none"
      id="contact"
      tabIndex={-1}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 size-72 -translate-x-1/2 rounded-full bg-cyan-glow/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 size-72 rounded-full bg-violet-glow/10 blur-3xl"
      />

      <Container>
        <motion.div
          className="glass-panel relative mx-auto max-w-6xl min-w-0 overflow-hidden p-4 text-center sm:p-8 lg:p-10"
          initial="hidden"
          variants={scaleIn}
          viewport={viewportOnce}
          whileInView="visible"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 size-56 rounded-full bg-blue-glow/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 right-10 size-56 rounded-full bg-cyan-glow/10 blur-3xl"
          />

          <div className="relative min-w-0">
            <SectionHeader
              align="center"
              description={contact.description}
              eyebrow={contact.eyebrow}
              id="contact-title"
              title={contact.title}
            />

            <div className="mt-8 grid min-w-0 gap-4 text-left sm:mt-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:items-start">
              <div className="premium-border relative min-w-0 overflow-hidden rounded-card bg-white/[0.04] p-4 sm:p-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-cyan-glow/10 blur-3xl"
                />

                <div className="relative min-w-0">
                  <p className="max-w-full break-words text-sm font-semibold uppercase text-cyan-glow">
                    Contact direct
                  </p>
                  <h3 className="mt-3 max-w-full break-words text-xl font-semibold leading-tight text-ice-50">
                    Échanger avec moi.
                  </h3>

                  {email ? (
                    <>
                      <p className="mt-3 max-w-full break-all text-sm leading-6 text-text-muted">
                        {email}
                      </p>
                      <div className="mt-5 flex min-w-0 flex-col gap-3 sm:flex-row">
                        <Button
                          aria-label={`Envoyer un email à Cheikh Massamba Dia à l’adresse ${email}`}
                          className="w-full sm:w-auto"
                          href={`mailto:${email}`}
                        >
                          M’envoyer un email
                        </Button>
                        <Button
                          aria-live="polite"
                          className="w-full sm:w-auto"
                          onClick={handleCopyEmail}
                          variant="secondary"
                        >
                          {copied ? 'Email copié !' : 'Copier l’email'}
                        </Button>
                      </div>
                    </>
                  ) : (
                    <p className="text-pretty-safe mt-4 max-w-full break-words rounded-2xl border border-ice-300/15 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-text-muted">
                      Oups 😍! J'ai pas encore mis mon adresse e-mail. 
                    </p>
                  )}
                </div>
              </div>

              {activeLinks.length > 0 && (
                <div className="grid w-full min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  {activeLinks.map((link) => (
                    <ContactLinkCard
                      description={link.description}
                      href={link.href}
                      key={link.label}
                      label={link.label}
                    />
                  ))}
                </div>
              )}
            </div>

            <motion.div
              className="mt-8 grid min-w-0 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3"
              initial="hidden"
              variants={staggerContainer}
              viewport={viewportOnce}
              whileInView="visible"
            >
              {contact.cards.map((card, index) => {
                const titleId = `contact-card-${index + 1}-title`

                return (
                  <motion.article
                    aria-labelledby={titleId}
                    className="premium-border min-w-0 rounded-card bg-white/[0.03] p-4 text-center sm:p-5 md:text-left"
                    key={card.title}
                    variants={staggerItem}
                  >
                    <h3
                      className="max-w-full break-words text-lg font-semibold leading-tight text-ice-50"
                      id={titleId}
                    >
                      {card.title}
                    </h3>
                    <p className="text-pretty-safe mt-2 max-w-full break-words leading-7 text-text-muted sm:mt-3">
                      {card.description}
                    </p>
                  </motion.article>
                )
              })}
            </motion.div>

            <p className="text-pretty-safe mx-auto mt-6 max-w-2xl break-words text-sm leading-6 text-text-soft sm:mt-8">
              Chaque échange commence par une idée claire, un besoin réel et
              une solution construite avec soin.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default ContactSection
