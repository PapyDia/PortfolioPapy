import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import StackNebulaSection from './components/sections/StackNebulaSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ProcessSection from './components/sections/ProcessSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <StackNebulaSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
