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

function SkillsSection() {
  const { skills } = portfolioData

  return (
    <section
      aria-labelledby="skills-title"
      className="section-padding section-divider"
      id="skills"
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
            description={skills.description}
            eyebrow={skills.eyebrow}
            id="skills-title"
            title={skills.title}
          />
        </motion.div>

        <motion.div
          className="mt-8 grid min-w-0 gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewportOnce}
          whileInView="visible"
        >
          {skills.groups.map((group, index) => {
            const titleId = `skill-group-${index + 1}-title`

            return (
              <motion.div
                className="min-w-0"
                key={group.title}
                variants={staggerItem}
              >
                <GlassCard
                  aria-labelledby={titleId}
                  as="article"
                  className="flex h-full min-w-0 flex-col"
                >
                  <div className="min-w-0">
                    <h3
                      className="max-w-full break-words text-lg font-semibold leading-tight text-ice-50 sm:text-xl"
                      id={titleId}
                    >
                      {group.title}
                    </h3>
                    <p className="text-pretty-safe mt-2 max-w-full break-words leading-7 text-text-muted sm:mt-3">
                      {group.description}
                    </p>
                  </div>

                  <ul
                    aria-label={`Compétences ${group.title}`}
                    className="m-0 mt-5 flex min-w-0 max-w-full list-none flex-wrap justify-center gap-2 p-0 sm:mt-6 sm:justify-start"
                  >
                    {group.items.map((item) => (
                      <li
                        className="max-w-full rounded-button border border-ice-300/15 bg-cyan-glow/5 px-2.5 py-1 text-center text-xs font-medium leading-snug break-words text-ice-100 sm:px-3 sm:py-1.5 sm:text-sm"
                        key={`${group.title}-${item}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}

export default SkillsSection
