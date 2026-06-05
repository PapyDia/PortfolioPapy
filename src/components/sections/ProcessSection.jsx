import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "../../constants/animations";
import { portfolioData } from "../../data/portfolioData";
import Container from "../ui/Container";
import ProcessStep from "../ui/ProcessStep";
import SectionHeader from "../ui/SectionHeader";

function ProcessSection() {
  const { t } = useTranslation();
  const { process } = portfolioData;
  const steps = t("process.steps", { returnObjects: true });
  const translatedSteps = Array.isArray(steps) ? steps : [];

  return (
    <section
      aria-labelledby="process-title"
      className="section-padding section-divider relative overflow-hidden"
      id="process"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-24 size-72 rounded-full bg-[var(--app-glow-blue)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-0 size-72 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
      />

      <Container>
        <motion.div
          initial="hidden"
          variants={fadeUp}
          viewport={viewportOnce}
          whileInView="visible"
        >
          <SectionHeader
            align="center"
            description={t("process.description")}
            eyebrow={t("process.eyebrow")}
            id="process-title"
            title={t("process.title")}
          />
        </motion.div>

        <div className="relative mt-8 min-w-0 sm:mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[var(--app-accent-border)] lg:block"
          />

          <motion.ol
            className="m-0 grid min-w-0 list-none gap-4 p-0 md:grid-cols-2 lg:gap-6"
            initial="hidden"
            variants={staggerContainer}
            viewport={viewportOnce}
            whileInView="visible"
          >
            {process.steps.map((step, index) => {
              const localizedStep = {
                ...step,
                ...(translatedSteps[index] ?? {}),
              };

              return (
                <ProcessStep
                  index={index}
                  key={step.number}
                  step={localizedStep}
                />
              );
            })}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}

export default ProcessSection;
