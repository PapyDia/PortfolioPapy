import { motion } from 'framer-motion'

import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '../../constants/animations'
import { techStack } from '../../constants/techStack'
import { portfolioData } from '../../data/portfolioData'
import Container from '../ui/Container'
import TechBadge from '../ui/TechBadge'

function StackNebulaSection() {
  return (
    <section aria-labelledby="stack-title" className="section-padding" id="stack">
      <Container>
        <motion.div
          className="glass-panel relative min-w-0 max-w-full overflow-hidden px-4 py-6 sm:px-8 sm:py-8 lg:px-10"
          initial="hidden"
          variants={fadeUp}
          viewport={viewportOnce}
          whileInView="visible"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 size-56 rounded-full bg-cyan-glow/10 blur-3xl"
          />
          <div className="relative grid min-w-0 gap-6 sm:gap-8 xl:grid-cols-[0.85fr_1.15fr] xl:items-center">
            <div className="min-w-0 text-center xl:text-left">
              <p className="max-w-full break-words text-sm font-semibold uppercase text-cyan-glow">
                Stack
              </p>
              <h2
                className="text-balance-safe mt-2 max-w-full break-words text-2xl font-semibold leading-tight text-ice-50 sm:mt-3 sm:text-4xl"
                id="stack-title"
              >
                {portfolioData.stack.title}
              </h2>
              <p className="text-pretty-safe mx-auto mt-4 max-w-xl break-words leading-7 text-text-muted xl:mx-0">
                {portfolioData.stack.description}
              </p>
            </div>

            <motion.ul
              aria-label="Stack technique"
              className="m-0 flex min-w-0 max-w-full list-none flex-wrap justify-center gap-2 p-0 sm:gap-3 xl:justify-start"
              initial="hidden"
              variants={staggerContainer}
              viewport={viewportOnce}
              whileInView="visible"
            >
              {techStack.map((tech) => (
                <motion.li
                  className="min-w-0 max-w-full"
                  key={tech}
                  variants={staggerItem}
                >
                  <TechBadge>{tech}</TechBadge>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default StackNebulaSection
