import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../constants/animations";
import { portfolioData } from "../../data/portfolioData";
import AcademicJourneyCard from "../ui/AcademicJourneyCard";
import Container from "../ui/Container";
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
          <AcademicJourneyCard journey={academicJourney} />
        </motion.div>
      </Container>
    </section>
  );
}

export default LearningLanguagesSection;
