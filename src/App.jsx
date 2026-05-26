import { MotionConfig } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import StackNebulaSection from "./components/sections/StackNebulaSection";
import SkillsSection from "./components/sections/SkillsSection";
import LearningLanguagesSection from "./components/sections/LearningLanguagesSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ProcessSection from "./components/sections/ProcessSection";
import ContactSection from "./components/sections/ContactSection";

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
          <StackNebulaSection />
          <SkillsSection />
          <LearningLanguagesSection />
          <ProjectsSection />
          <ProcessSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
