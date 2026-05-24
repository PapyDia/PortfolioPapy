import { motion } from 'framer-motion'

import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '../../constants/animations'
import profilePhoto from '../../assets/images/profile.jpg'
import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'
import GlassCard from '../ui/GlassCard'
import ProfilePhoto from '../ui/ProfilePhoto'
import SectionHeader from '../ui/SectionHeader'

function AboutSection() {
  const { about, identity } = portfolioData

  return (
    <section
      aria-labelledby="about-title"
      className="section-padding border-t border-white/10"
      id="about"
    >
      <Container>
        <motion.div
          initial="hidden"
          variants={fadeUp}
          viewport={viewportOnce}
          whileInView="visible"
        >
          <SectionHeader
            align="center"
            description={about.description}
            eyebrow={about.eyebrow}
            id="about-title"
            title={about.title}
          />
        </motion.div>

        <motion.div
          className="mt-10 grid min-w-0 gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)] lg:items-center"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewportOnce}
          whileInView="visible"
        >
          <motion.div className="min-w-0" variants={staggerItem}>
            <GlassCard
              as="article"
              className="relative overflow-hidden p-5 text-center sm:p-7 lg:p-8 lg:text-left"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-16 top-10 size-44 rounded-full bg-cyan-glow/10 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 right-0 size-48 rounded-full bg-violet-glow/10 blur-3xl"
              />

              <div className="relative max-w-full space-y-4 text-base leading-7 text-text-muted sm:space-y-5 sm:leading-8">
                {about.paragraphs.map((paragraph) => (
                  <p
                    className="text-pretty-safe max-w-full break-words"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.aside
            aria-label={`Profil de ${identity.name}`}
            className="relative flex min-w-0 flex-col items-center"
            variants={fadeUp}
          >
            <ProfilePhoto
              className="relative z-10"
              alt={identity.imageAlt ?? 'Portrait de Papy Dia'}
              src={profilePhoto}
            />

            <GlassCard className="relative -mt-8 w-full max-w-md overflow-hidden px-4 pb-5 pt-12 text-center sm:-mt-10 sm:px-6 sm:pb-6 sm:pt-14 lg:max-w-lg">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-cyan-glow/15 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 size-40 rounded-full bg-violet-glow/10 blur-3xl"
              />

              <div className="relative min-w-0">
                <p className="max-w-full break-words text-sm font-semibold uppercase text-cyan-glow">
                  Profil
                </p>
                <h3 className="mt-3 max-w-full break-words text-xl font-semibold leading-tight text-ice-50 sm:mt-4 sm:text-2xl">
                  {identity.name}
                </h3>
                <p className="mt-2 max-w-full break-words text-text-muted">
                  {identity.title}
                </p>

                <ul
                  aria-label="Points forts"
                  className="m-0 mt-6 grid min-w-0 list-none gap-2 p-0 sm:mt-8 sm:grid-cols-2 sm:gap-3"
                >
                  {about.highlights.map((highlight) => (
                    <li
                      className="max-w-full rounded-2xl border border-ice-300/15 bg-white/[0.04] px-3 py-2.5 text-center text-sm font-medium leading-snug break-words text-ice-100 sm:px-4 sm:py-3"
                      key={highlight}
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.aside>
        </motion.div>
      </Container>
    </section>
  )
}

export default AboutSection
