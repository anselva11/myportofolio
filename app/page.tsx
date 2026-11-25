'use client'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { CareerStory } from '@/components/CareerStory'
import { SelectedWork } from '@/components/SelectedWork'
import { BrandStatement } from '@/components/BrandStatement'
import { ThreePillars } from '@/components/ThreePillars'
import { CompanySpotlights } from '@/components/CompanySpotlights'
import { InvestmentMindset } from '@/components/InvestmentMindset'
import { Skills } from '@/components/Skills'
import { Education } from '@/components/Education'
import { Certifications } from '@/components/Certifications'
import { CurrentlyExploring } from '@/components/CurrentlyExploring'
import { PersonalPhilosophy } from '@/components/PersonalPhilosophy'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-brand-ink">
      <Navbar />
      <Hero />
      <Introduction />
      <About />
      <Experience />
      <CareerStory />
      <SelectedWork />
      <BrandStatement />
      <ThreePillars />
      <CompanySpotlights />
      <InvestmentMindset />
      <Skills />
      <Education />
      <Certifications />
      <CurrentlyExploring />
      <PersonalPhilosophy />
      <Contact />
      <Footer />
    </main>
  )
}
