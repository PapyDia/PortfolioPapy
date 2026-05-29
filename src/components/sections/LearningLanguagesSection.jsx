import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../constants/animations";
import { portfolioData } from "../../data/portfolioData";
import Container from "../ui/Container";
import GlassCard from "../ui/GlassCard";
import LanguageCard from "../ui/LanguageCard";
import SectionHeader from "../ui/SectionHeader";

function LearningLanguagesSection() {
  const { learningLanguages } = portfolioData;
  const { academicJourney } = learningLanguages;

  return (
    <section
      aria-labelledby="learning-title"
      className="section-padding section-divider"
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
            eyebrow={learningLanguages.eyebrow}
            id="learning-title"
          />
        </motion.div>

        <motion.p
          className="mx-auto mt-6 max-w-4xl rounded-2xl border border-[color:var(--app-accent-border)] bg-[var(--app-accent-soft)] px-4 py-3 text-center text-sm font-medium leading-7 wrap-break-word text-[color:var(--app-chip-text)] sm:mt-8 sm:px-5"
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
            const titleId = `learning-language-${index + 1}-title`;

            return (
              <motion.div
                className="min-w-0"
                key={language.name}
                variants={staggerItem}
              >
                <LanguageCard language={language} titleId={titleId} />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-10 min-w-0 sm:mt-12"
          initial="hidden"
          variants={fadeUp}
          viewport={viewportOnce}
          whileInView="visible"
        >
          <GlassCard
            aria-labelledby="academic-journey-title"
            as="article"
            className="relative overflow-hidden border-[color:var(--app-featured-border)] bg-[var(--app-featured-surface)] p-5 sm:p-8 lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-0 size-56 rounded-full bg-[var(--app-glow-violet)] blur-3xl"
            />

            <div className="relative mx-auto min-w-0 max-w-4xl">
              <p className="max-w-full wrap-break-word text-sm font-semibold uppercase text-[color:var(--app-accent)]">
                {academicJourney.eyebrow}
              </p>
              <h3
                className="text-balance-safe mt-3 max-w-full wrap-break-word text-2xl font-semibold leading-tight text-[color:var(--app-text-main)] sm:text-3xl"
                id="academic-journey-title"
              >
                {academicJourney.title}
              </h3>

              <p className="text-pretty-safe mt-5 max-w-3xl wrap-break-word text-base leading-7 text-[color:var(--app-text-main)] sm:text-lg sm:leading-8">
                {academicJourney.description}
              </p>

              <div className="mt-6 min-w-0 max-w-3xl space-y-5 text-left text-base leading-7 text-[color:var(--app-text-muted)] sm:mt-8 sm:space-y-6 sm:leading-8">
                {academicJourney.paragraphs.map((paragraph) => (
                  <p
                    className="text-pretty-safe max-w-full wrap-break-word"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul
                aria-label="Compétences issues du parcours universitaire"
                className="m-0 mt-7 flex min-w-0 max-w-full list-none flex-wrap gap-2 p-0 sm:mt-9"
              >
                {academicJourney.skills.map((skill) => (
                  <li
                    className="max-w-full rounded-button border border-[color:var(--app-chip-border)] bg-[var(--app-chip-bg)] px-3 py-1.5 text-center text-xs font-medium leading-snug wrap-break-word text-[color:var(--app-chip-text)] sm:text-sm"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}

export default LearningLanguagesSection;
