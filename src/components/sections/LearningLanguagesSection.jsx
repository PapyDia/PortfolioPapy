import { motion } from 'framer-motion'

import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '../../constants/animations'
import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'
import GlassCard from '../ui/GlassCard'
import SectionHeader from '../ui/SectionHeader'

function LearningLanguagesSection() {
  const { learningLanguages } = portfolioData

  return (
    <section
      aria-labelledby="learning-title"
      className="section-padding border-t border-white/10"
      id="learning"
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
            description={learningLanguages.description}
            eyebrow={learningLanguages.eyebrow}
            id="learning-title"
            title={learningLanguages.title}
          />
        </motion.div>

        <motion.p
          className="mx-auto mt-6 max-w-4xl rounded-2xl border border-cyan-glow/20 bg-cyan-glow/5 px-4 py-3 text-center text-sm font-medium leading-7 break-words text-ice-100 sm:mt-8 sm:px-5"
          initial="hidden"
          variants={fadeUp}
          viewport={viewportOnce}
          whileInView="visible"
        >
          {learningLanguages.note}
        </motion.p>

        <motion.div
          className="mt-8 grid min-w-0 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewportOnce}
          whileInView="visible"
        >
          {learningLanguages.items.map((language, index) => {
            const titleId = `learning-language-${index + 1}-title`

            return (
              <motion.div
                className="min-w-0"
                key={language.name}
                variants={staggerItem}
              >
                <GlassCard
                  aria-labelledby={titleId}
                  as="article"
                  className="relative flex h-full min-w-0 flex-col overflow-hidden"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-0 size-24 rounded-full bg-cyan-glow/10 blur-3xl"
                  />

                  <div className="relative min-w-0">
                    <span className="inline-flex max-w-full rounded-button border border-cyan-glow/25 bg-cyan-glow/10 px-3 py-1 text-center text-xs font-semibold leading-snug break-words text-cyan-glow">
                      {language.category}
                    </span>

                    <h3
                      className="mt-4 max-w-full break-words text-xl font-semibold leading-tight text-ice-50 sm:text-2xl"
                      id={titleId}
                    >
                      {language.name}
                    </h3>

                    <p className="text-pretty-safe mt-3 max-w-full break-words leading-7 text-text-muted">
                      {language.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}

export default LearningLanguagesSection
