import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SectionFallback from "./components/ui/SectionFallback";

const StackNebulaSection = lazy(
  () => import("./components/sections/StackNebulaSection"),
);
const SkillsSection = lazy(() => import("./components/sections/SkillsSection"));
const LearningLanguagesSection = lazy(
  () => import("./components/sections/LearningLanguagesSection"),
);
const ProjectsSection = lazy(
  () => import("./components/sections/ProjectsSection"),
);
const ProcessSection = lazy(
  () => import("./components/sections/ProcessSection"),
);
const ContactSection = lazy(
  () => import("./components/sections/ContactSection"),
);

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="page-shell">
        <a className="skip-link" href="#main-content">
          Aller au contenu principal
        </a>
        <Navbar />
        <main
          className="relative pt-16 focus:outline-hidden"
          id="main-content"
          tabIndex={-1}
        >
          <HeroSection />
          <AboutSection />
          <Suspense fallback={<SectionFallback />}>
            <StackNebulaSection />
            <SkillsSection />
            <LearningLanguagesSection />
            <ProjectsSection />
            <ProcessSection />
            <ContactSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
