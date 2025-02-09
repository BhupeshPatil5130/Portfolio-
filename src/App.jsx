import React from 'react';
import AboutMe from "./Components/AboutMe";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SkillsSection from "./Components/SkillsSection";
import ProjectsSection from "./Components/ProjectsSection";
import ExperienceSection from "./Components/ExperienceSection";
// import Testimonials from "./Components/Testimonials";
import BlogSection from "./Components/BlogSection";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Navbar will be fixed */}
      <Navbar />
      {/* Main Content Wrapper (scrollable section) */}
      <div className="pt-16 h-full overflow-y-auto scroll-smooth overflow-hidden">
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        {/* <Testimonials /> */}
        <BlogSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
