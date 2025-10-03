import { ensureResume } from "@/lib/parseResume";
import { PROFILE } from "@/lib/profile";
import { SKILLS, EXPERIENCE } from "./projects/data/resume";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import InterestsSection from "./components/InterestsSection";
import LanguagesSection from "./components/LanguagesSection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function Home() {
  const resume = await ensureResume();
  const name = PROFILE.name || resume.inferred.name || "Your Name";
  const email = PROFILE.email || resume.inferred.email || "you@example.com";
  const linkedin = PROFILE.links?.linkedin || resume.inferred.links?.linkedin;

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <HeroSection name={name} />
      
      <AboutSection />
      
      <ExperienceSection experience={EXPERIENCE} />
      
      <SkillsSection skills={SKILLS} />
      
      <InterestsSection />
      
      <LanguagesSection />
      
      <ResumeSection />
      
      <ContactSection email={email} linkedin={linkedin} />
    </main>
  );
}