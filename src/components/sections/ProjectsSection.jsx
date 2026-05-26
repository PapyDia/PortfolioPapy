import { motion } from "framer-motion";

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
  const { projects } = portfolioData;

  return (
    <section
      aria-labelledby="projects-title"
      className="section-padding section-divider relative overflow-hidden"
      id="projects"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-20 size-72 rounded-full bg-cyan-glow/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-0 size-72 rounded-full bg-violet-glow/10 blur-3xl"
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
            description={projects.description}
            eyebrow={projects.eyebrow}
            id="projects-title"
            title={projects.title}
          />
        </motion.div>

        <motion.div
          className="mt-8 grid min-w-0 gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2"
          initial="hidden"
          variants={staggerContainer}
          viewport={viewportOnce}
          whileInView="visible"
        >
          {projects.items.map((project, index) => (
            <motion.div
              className="min-w-0"
              key={project.name}
              variants={staggerItem}
            >
              <ProjectCard index={index} project={project} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
      <SectionTransition variant="mixed" />
    </section>
  );
}

export default ProjectsSection;
