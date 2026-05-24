import { motion } from 'framer-motion'

import {
  createCounterOrbitAnimation,
  createOrbitAnimation,
  fadeUp,
  heroVisual,
  staggerContainer,
} from '../../constants/animations'
import { heroTechLogos } from '../../constants/techLogos'
import { portfolioData } from '../../data/portfolioData'
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference'
import Button from '../ui/Button'
import Container from '../ui/Container'
import TechLogo from '../ui/TechLogo'

function HeroSection() {
  const { hero, identity } = portfolioData
  const prefersReducedMotion = useReducedMotionPreference()

  return (
    <section
      aria-labelledby="hero-title"
      className="section-divider relative isolate overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-20 xl:min-h-[calc(100vh-4rem)] xl:pb-24 xl:pt-24"
      id="home"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 -z-10 size-60 -translate-x-1/2 rounded-full bg-cyan-glow/15 blur-3xl sm:size-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 size-72 rounded-full bg-blue-glow/10 blur-3xl"
      />

      <Container>
        <div className="grid min-w-0 items-center gap-10 sm:gap-12 xl:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            animate="visible"
            className="mx-auto max-w-3xl min-w-0 text-center xl:mx-0 xl:text-left"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div
              className="mb-5 inline-flex max-w-full items-center justify-center gap-2 rounded-button border border-cyan-glow/25 bg-cyan-glow/10 px-3 py-1.5 text-center text-xs font-medium leading-snug break-words text-ice-100 backdrop-blur-md sm:mb-6 sm:px-4 sm:py-2 sm:text-sm"
              variants={fadeUp}
            >
              <span
                aria-hidden="true"
                className="size-2 shrink-0 rounded-full bg-cyan-glow shadow-glow-soft"
              />
              {hero.badge}
            </motion.div>

            <motion.p
              className="mb-3 max-w-full break-words text-xs font-semibold uppercase text-cyan-glow sm:text-sm"
              variants={fadeUp}
            >
              {identity.name}
            </motion.p>

            <motion.h1
              className="text-balance-safe max-w-full break-words text-[2rem] font-semibold leading-tight text-ice-50 sm:text-5xl xl:text-6xl"
              id="hero-title"
              variants={fadeUp}
            >
              {hero.title}
            </motion.h1>

            <motion.p
              className="text-pretty-safe mx-auto mt-4 max-w-2xl break-words text-base leading-7 text-text-muted sm:mt-6 sm:text-lg sm:leading-8 xl:mx-0"
              variants={fadeUp}
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              className="mt-8 flex min-w-0 flex-col justify-center gap-3 sm:flex-row xl:justify-start"
              variants={fadeUp}
            >
              <Button className="w-full sm:w-auto" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </Button>
              <Button
                className="w-full sm:w-auto"
                href={hero.secondaryCta.href}
                variant="secondary"
              >
                {hero.secondaryCta.label}
              </Button>
            </motion.div>

          </motion.div>

          <motion.div
            animate="visible"
            className="relative mx-auto w-full max-w-lg min-w-0"
            initial="hidden"
            variants={heroVisual}
          >
            <div className="absolute inset-8 rounded-full bg-cyan-glow/15 blur-3xl" />
            <div className="glass-panel relative aspect-square min-w-0 max-w-full overflow-hidden p-4 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(125,211,252,0.16),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(139,92,246,0.14),transparent_32%)]" />
              <div className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ice-300/10 sm:w-[86%]" />
              <div className="absolute left-1/2 top-1/2 aspect-square w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-glow/20 sm:w-[70%]" />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
              >
                {heroTechLogos.map((tech) => {
                  const direction = tech.orbitDirection ?? 1
                  const duration = tech.orbitDuration ?? 34
                  const delay = tech.orbitDelay ?? 0
                  const initialRotation = tech.initialRotation ?? 0
                  const orbitRadius = tech.orbitRadius ?? 'clamp(5.9rem, 30vw, 9.75rem)'

                  return (
                    <motion.div
                      animate={
                        prefersReducedMotion
                          ? { rotate: initialRotation }
                          : createOrbitAnimation(
                              duration,
                              delay,
                              direction,
                              initialRotation,
                            )
                      }
                      className="absolute left-1/2 top-1/2 size-0 origin-center will-change-transform"
                      initial={{ rotate: initialRotation }}
                      key={tech.label}
                    >
                      <div
                        className="absolute left-0 top-0"
                        style={{
                          transform: `translateX(${orbitRadius}) translate(-50%, -50%)`,
                        }}
                      >
                        <motion.div
                          animate={
                            prefersReducedMotion
                              ? { rotate: -initialRotation }
                              : createCounterOrbitAnimation(
                                  duration,
                                  delay,
                                  direction,
                                  initialRotation,
                                )
                          }
                          className="origin-center will-change-transform"
                          initial={{ rotate: -initialRotation }}
                        >
                          <TechLogo
                            Icon={tech.Icon}
                            iconClassName={tech.iconClassName}
                            label={tech.label}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <div className="relative z-30 grid h-full min-w-0 place-items-center">
                <div className="grid aspect-square w-[48%] min-w-36 max-w-52 place-items-center rounded-full border border-cyan-glow/25 bg-navy-950/70 px-3 text-center shadow-glow-soft backdrop-blur-xl sm:px-5">
                  <div className="min-w-0 max-w-full">
                    <p className="max-w-full break-words text-[0.68rem] font-medium leading-snug text-text-soft min-[430px]:text-xs sm:text-sm">
                      {identity.title}
                    </p>
                    <p className="mt-1 max-w-full break-words text-lg font-semibold leading-tight text-ice-50 min-[430px]:text-xl sm:mt-2 sm:text-2xl">
                      Full-Stack JS
                    </p>
                    <p className="mt-1 max-w-full break-words text-[0.68rem] font-medium leading-snug text-cyan-glow min-[430px]:mt-2 min-[430px]:text-xs">
                      React · Node · MongoDB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
