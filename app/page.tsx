import { ensureResume } from "@/lib/parseResume";
import { PROFILE } from "@/lib/profile";
import BadgeCloud from "./components/BadgeCloud";
import Timeline, { TimelineItem } from "./components/Timeline";
import ScrollProgress from "./components/ScrollProgress";
import AnimatedName from "./components/AnimatedName";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function Home() {
  const resume = await ensureResume();
  const name = PROFILE.name || resume.inferred.name || "Your Name";
  const email = PROFILE.email || resume.inferred.email || "you@example.com";
  const linkedin = PROFILE.links?.linkedin || resume.inferred.links?.linkedin;
  const experience = resume.sections.experience || [];
  const education = resume.sections.education || [];
  const skills = resume.sections.skills || [];

  const experienceTimeline: TimelineItem[] = experience
    .slice(0, 24)
    .map((line) => ({ title: line }));

  return (
    <main id="top" className="min-h-screen p-6">
      <ScrollProgress />
      <section className="mx-auto max-w-3xl text-center py-24">
        <div className="mx-auto h-40 w-40 rounded-full bg-gradient-to-tr from-blue-700 to-blue-400 blur-2xl opacity-20" />
        <AnimatedName name={name} />
        <div className="mt-6 flex gap-3 justify-center">
          <a href={`mailto:${email}`} className="px-4 py-2 rounded-xl bg-black text-white">Email</a>
          {linkedin && <a href={linkedin} target="_blank" rel="noopener" className="px-4 py-2 rounded-xl border">LinkedIn</a>}
          <a href="/resume.pdf" target="_blank" rel="noopener" className="px-4 py-2 rounded-xl border">Resume</a>
        </div>
      </section>

      {skills.length > 0 && (
        <section className="mx-auto max-w-3xl py-16">
          <BadgeCloud items={skills} />
        </section>
      )}

      {experienceTimeline.length > 0 && (
        <section className="mx-auto max-w-3xl py-16">
          <Timeline items={experienceTimeline} />
        </section>
      )}

      {education.length > 0 && (
        <section className="mx-auto max-w-3xl py-16">
          <ul className="list-disc pl-5 space-y-2">
            {education.slice(0, 6).map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
