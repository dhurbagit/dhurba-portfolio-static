"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SkillsBento } from "@/components/SkillsBento";
import { WorkExperience } from "@/components/WorkExperience";
import { FreelanceExperience } from "@/components/FreelanceExperience";
import { DesignExperience } from "@/components/DesignExperience";
import { Education } from "@/components/Education";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ServicesAndPhilosophy } from "@/components/ServicesAndPhilosophy";
import { ReviewsAndFeedback } from "@/components/ReviewsAndFeedback";
import { DeveloperParallaxBackground } from "@/components/DeveloperParallaxBackground";
import { ContactModal } from "@/components/ContactModal";
import { ResumeModal } from "@/components/ResumeModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/lib/portfolioData";

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Static Data Access (Instant Render with 0 Network Latency)
  const {
    settings,
    profile,
    skills,
    work_experience: experiences,
    freelance: freelanceSuites,
    design: designCapabilities,
    education,
    projects,
    services,
    philosophies,
  } = portfolioData;

  const handleOpenContact = () => setIsContactModalOpen(true);
  const handleCloseContact = () => setIsContactModalOpen(false);

  const handleOpenResume = () => setIsResumeModalOpen(true);
  const handleCloseResume = () => setIsResumeModalOpen(false);

  return (
    <div className="relative min-h-screen bg-background text-slate-900 overflow-x-hidden selection:bg-blue-100 selection:text-blue-700">
      {/* Interactive Global Parallax Matrix Elements */}
      <DeveloperParallaxBackground />

      {/* Top Floating Navigation */}
      <Navbar
        onOpenContact={handleOpenContact}
        onOpenResume={handleOpenResume}
        profile={profile}
        settings={settings}
      />

      {/* Main Content: Distinct Themed Sections */}
      <main className="relative z-10 w-full flex flex-col">
        {/* Section 1: Hero & Three Pillars */}
        <Hero
          onOpenContact={handleOpenContact}
          onOpenResume={handleOpenResume}
          profile={profile}
          settings={settings}
        />

        {/* Section 2: Technical Skills Matrix */}
        <SkillsBento skillsData={skills} />

        {/* Section 3: Professional Work Experience */}
        <WorkExperience experiencesData={experiences} />

        {/* Section 4: Freelance Experience & Services */}
        <FreelanceExperience
          onOpenContact={handleOpenContact}
          suitesData={freelanceSuites}
        />

        {/* Section 5: Design Experience & UI/UX */}
        <DesignExperience capabilitiesData={designCapabilities} />

        {/* Section 6: Higher Education */}
        <Education educationData={education} />

        {/* Section 7: Featured Software Projects */}
        <ProjectShowcase projectsData={projects} />

        {/* Section 8: Services & Development Philosophy */}
        <ServicesAndPhilosophy
          servicesData={services}
          philosophiesData={philosophies}
        />

        {/* Section 9: Verified Client Reviews & Feedback with Star Ratings */}
        <ReviewsAndFeedback />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={handleOpenContact}
        onOpenResume={handleOpenResume}
        settings={settings}
        profile={profile}
      />

      {/* Floating WhatsApp & Direct Call Widget */}
      <FloatingWhatsApp
        phoneNumber={settings?.phone_whatsapp || "+9779800000000"}
      />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
        title="Let's Build Something Together"
        description="Have a project, business idea, or development opportunity? Let's connect and turn it into a practical digital solution."
        settings={settings}
      />

      {/* Interactive Printable CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
        profile={profile}
        settings={settings}
        experiences={experiences}
        skills={skills}
        education={education}
        projects={projects}
      />
    </div>
  );
}
