'use client'

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { ProjectsSection } from "@/components/sections/projects"
import { HackathonsSection } from "@/components/sections/hackathons"
import { CertificationsSection } from "@/components/sections/certifications"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="scroll-container"
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        <HeroSection />
        <ProjectsSection />
        <HackathonsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </>
  )
}
