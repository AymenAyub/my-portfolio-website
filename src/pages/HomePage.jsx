import React from "react";
import {ThemeToggle} from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { StarBackground } from "../components/StarBackaground";
import { Navbar } from "../components/Navbar";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection/>
        <ContactSection />
        </main>

        <Footer/>
     
     
    </div>
  );
}
