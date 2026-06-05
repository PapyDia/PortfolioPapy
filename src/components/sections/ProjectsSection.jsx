import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "../../constants/animations";
import { portfolioData } from "../../data/portfolioData";
import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import SectionHeader from "../ui/SectionHeader";
import SectionTransition from "../ui/SectionTransition";

function ProjectsSection() {
  const { t } = useTranslation();
  const { projects } = portfolioData;
  const projectTranslationKeys = ["kaolackKitchen", "samaHoraire"];

  return (
    <section
      aria-labelledby="projects-title"
      className="section-padding section-divider relative overflow-hidden"
      id="projects"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-20 size-72 rounded-full bg-[var(--app-glow-cyan)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 size-72 rounded-full bg-[var(--app-glow-violet)] blur-3xl"
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
            description={t("projects.description")}
            eyebrow={t("projects.eyebrow")}
            id="projects-title"
            title={t("projects.title")}
          />
        </motion.div>

        <motion.div
          className="mt-8 grid min-w-0 gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewportOnce}
          whileInView="visible"
        >
          {projects.items.map((project, index) => {
            const translationKey = projectTranslationKeys[index];

            return (
              <motion.div
                className="min-w-0"
                key={project.name}
                variants={staggerItem}
              >
                <ProjectCard
                  index={index}
                  project={project}
                  translationKey={translationKey}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
      <SectionTransition variant="mixed" />
    </section>
  );
}

export default ProjectsSection;
