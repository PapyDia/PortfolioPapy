import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  createCounterOrbitAnimation,
  createOrbitAnimation,
  fadeUp,
  heroVisual,
  staggerContainer,
} from "../../constants/animations";
import { heroTechLogos } from "../../constants/techLogos";
import { portfolioData } from "../../data/portfolioData";
import { useReducedMotionPreference } from "../../hooks/useReducedMotionPreference";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SectionTransition from "../ui/SectionTransition";
import TechLogo from "../ui/TechLogo";

function HeroSection() {
  const { t } = useTranslation();
  const { hero, identity } = portfolioData;
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <section
      aria-labelledby="hero-title"
      className="section-divider relative isolate overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-20 xl:min-h-[calc(100vh-4rem)] xl:pb-24 xl:pt-24"
      id="home"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 -z-10 size-60 -translate-x-1/2 rounded-full bg-[var(--app-glow-cyan)] blur-3xl sm:size-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 size-72 rounded-full bg-[var(--app-glow-blue)] blur-3xl"
      />

      <Container>
        <div className="grid min-w-0 items-center gap-10 sm:gap-12 xl:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            animate="visible"
            className="mx-auto max-w-3xl min-w-0 text-center xl:mx-0 xl:text-start"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div
              className="mb-5 inline-flex max-w-full items-center justify-center gap-2 rounded-button border border-[color:var(--app-hero-badge-border)] bg-[var(--app-hero-badge-bg)] px-3 py-1.5 text-center text-xs font-medium leading-snug wrap-break-word text-[color:var(--app-text-main)] backdrop-blur-md sm:mb-6 sm:px-4 sm:py-2 sm:text-sm"
              variants={fadeUp}
            >
              <span
                aria-hidden="true"
                className="size-2 shrink-0 rounded-full bg-[var(--app-accent)] shadow-[var(--app-shadow-soft)]"
              />
              {t("hero.badge")}
            </motion.div>

            <motion.p
              className="mb-3 max-w-full wrap-break-word text-xs font-semibold uppercase text-[color:var(--app-accent)] sm:text-sm"
              variants={fadeUp}
            >
              {identity.name}
            </motion.p>

            <motion.h1
              className="text-balance-safe max-w-full wrap-break-word text-[2rem] font-semibold leading-tight text-[color:var(--app-text-main)] sm:text-5xl xl:text-6xl"
              id="hero-title"
              variants={fadeUp}
            >
              {t("hero.title")}
            </motion.h1>

            <motion.div
              className="mt-8 flex min-w-0 flex-col justify-center gap-3 sm:flex-row xl:justify-start"
              variants={fadeUp}
            >
              <Button className="w-full sm:w-auto" href={hero.primaryCta.href}>
                {t("hero.primaryCta")}
              </Button>
              <Button
                className="w-full sm:w-auto"
                href={hero.secondaryCta.href}
                variant="secondary"
              >
                {t("hero.secondaryCta")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            animate="visible"
            className="relative mx-auto w-full max-w-lg min-w-0"
            initial="hidden"
            variants={heroVisual}
          >
            <div className="absolute inset-8 rounded-full bg-[var(--app-hero-visual-glow)] blur-3xl" />
            <div className="hero-visual-panel glass-panel ios-safe-rounded relative aspect-square min-w-0 max-w-full overflow-hidden p-4 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--app-glow-cyan),transparent_35%),radial-gradient(circle_at_80%_75%,var(--app-glow-violet),transparent_32%)]" />
              <div className="absolute left-1/2 top-1/2 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--app-hero-orb-border)] sm:w-[86%]" />
              <div className="hero-logo-orbit-ring absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[color:var(--app-hero-orb-dashed-border)]" />

              <div
                aria-hidden="true"
                className="hero-logo-orbit-stage pointer-events-none absolute inset-0 z-20 overflow-hidden"
              >
                {heroTechLogos.map((tech) => {
                  const direction = tech.orbitDirection ?? 1;
                  const duration = tech.orbitDuration ?? 34;
                  const delay = tech.orbitDelay ?? 0;
                  const initialRotation = tech.initialRotation ?? 0;

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
                          transform:
                            "translateX(var(--hero-logo-orbit-radius)) translate(-50%, -50%)",
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
                  );
                })}
              </div>

              <div className="absolute inset-0 z-30 grid min-w-0 place-items-center p-4 sm:p-8">
                <div className="hero-center-orb ios-safe-circle grid place-items-center rounded-full border border-[color:var(--app-hero-center-border)] bg-[var(--app-hero-center-bg)] text-center shadow-[var(--app-shadow-soft)] backdrop-blur-xl">
                  <div className="grid min-w-0 max-w-[86%] gap-1">
                    <p className="max-w-full wrap-break-word text-[0.64rem] font-medium leading-[1.22] text-[color:var(--app-text-soft)] min-[430px]:text-[0.7rem] sm:text-sm">
                      {t("hero.orbRole")}
                    </p>
                    <p className="max-w-full wrap-break-word text-lg font-semibold leading-tight text-[color:var(--app-text-main)] min-[430px]:text-xl sm:text-2xl">
                      {t("hero.orbStackLabel")}
                    </p>
                    <p className="max-w-full wrap-break-word text-[0.64rem] font-medium leading-[1.22] text-[color:var(--app-accent)] min-[430px]:text-[0.7rem] sm:text-xs">
                      React · Node · MongoDB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
      <SectionTransition variant="cyan" />
    </section>
  );
}

export default HeroSection;
