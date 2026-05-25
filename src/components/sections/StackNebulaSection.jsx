import { motion } from 'framer-motion'

import {
  createPebbleFloat,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '../../constants/animations'
import { techStack } from '../../constants/techStack'
import { portfolioData } from '../../data/portfolioData'
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference'
import Container from '../ui/Container'
import StackLogoBadge from '../ui/StackLogoBadge'

const gravelSizes = [
  'size-[3.75rem] sm:size-[4.5rem] lg:size-20',
  'size-[4.5rem] sm:size-20',
  'size-16 sm:size-[4.75rem] lg:size-20',
  'size-[4.75rem] sm:size-20',
  'size-[4.25rem] sm:size-[4.75rem]',
]

const gravelOffsets = [
  '-translate-x-2 -translate-y-1 sm:-translate-x-1 sm:-translate-y-2 lg:-translate-y-3',
  'translate-x-1 translate-y-2 sm:translate-y-2',
  'translate-x-2 -translate-y-1 sm:translate-x-0.5 sm:-translate-y-1 lg:translate-y-2',
  '-translate-x-2 translate-y-2 sm:translate-x-1 sm:translate-y-3',
  'translate-x-2 -translate-y-2 sm:-translate-x-1 sm:-translate-y-1 lg:-translate-y-2',
  '-translate-x-0.5 translate-y-1 sm:translate-y-2 lg:translate-y-3',
  'translate-x-2 -translate-y-1 sm:translate-x-1 sm:-translate-y-3',
  '-translate-x-2 translate-y-2 sm:-translate-x-1 sm:translate-y-1 lg:-translate-y-1',
  'translate-x-1 -translate-y-2 sm:-translate-x-1 sm:-translate-y-2 lg:translate-y-1',
]

const featuredGravelSizes = {
  Cloudinary: 'size-[4.75rem] sm:size-20 lg:size-24',
  JavaScript: 'size-20 sm:size-20 lg:size-24',
  'Tailwind CSS': 'size-20 sm:size-20 lg:size-24',
}

function StackNebulaSection() {
  const prefersReducedMotion = useReducedMotionPreference()

  return (
    <section
      aria-labelledby="stack-title"
      className="section-padding section-divider"
      id="stack"
    >
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
          <div className="relative grid min-w-0 gap-8 sm:gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:items-center">
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

            <div className="relative mx-auto w-full min-w-0 max-w-2xl py-4 sm:px-3 sm:py-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-[12%] inset-y-[12%] rounded-full bg-cyan-glow/[0.08] blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[8%] right-[15%] size-32 rounded-full bg-violet-glow/10 blur-3xl sm:size-44"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-[11%] top-[9%] size-2 rounded-full bg-cyan-glow/35 shadow-glow-soft"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[13%] left-[22%] size-1.5 rounded-full bg-violet-glow/35"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-[9%] top-[38%] size-2.5 rounded-full bg-ice-300/25 blur-[1px]"
              />

              <motion.ul
                aria-label="Stack technique"
                className="relative mx-auto my-0 flex w-full max-w-[19rem] min-w-0 list-none flex-wrap items-center justify-center gap-x-2.5 gap-y-4 px-2 py-1 sm:max-w-xl sm:gap-x-2 sm:gap-y-4 sm:px-3 lg:max-w-2xl lg:gap-x-2.5 lg:gap-y-5"
                initial="hidden"
                variants={staggerContainer}
                viewport={viewportOnce}
                whileInView="visible"
              >
                {techStack.map((tech, index) => {
                  const sizeClassName =
                    featuredGravelSizes[tech] ??
                    gravelSizes[index % gravelSizes.length]
                  const offsetClassName =
                    gravelOffsets[index % gravelOffsets.length]

                  return (
                    <motion.li
                      className="shrink-0"
                      key={tech}
                      variants={staggerItem}
                    >
                      <div className={offsetClassName}>
                        <motion.div
                          animate={
                            prefersReducedMotion
                              ? undefined
                              : createPebbleFloat(index)
                          }
                          className="will-change-transform"
                        >
                          <StackLogoBadge
                            name={tech}
                            sizeClassName={sizeClassName}
                          />
                        </motion.div>
                      </div>
                    </motion.li>
                  )
                })}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default StackNebulaSection
