import { ensureResume } from "@/lib/parseResume";
import { PROFILE } from "@/lib/profile";
import { SKILLS, EXPERIENCE } from "./projects/data/resume";
import ParticleBackground from "@/components/ParticleBackground";
import TypewriterText from "@/components/TypewriterText";
import FloatingActionButton from "@/components/FloatingActionButton";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function Home() {
  const resume = await ensureResume();
  const name = PROFILE.name || resume.inferred.name || "Your Name";
  const email = PROFILE.email || resume.inferred.email || "you@example.com";
  const linkedin = PROFILE.links?.linkedin || resume.inferred.links?.linkedin;
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Interactive Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background with Particles */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-600/20 via-gray-500/20 to-gray-700/20 animate-mesh-gradient" />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-particle-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rotate-45 animate-spin-slow" />
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-full animate-pulse-glow" />
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-white/20 rotate-12 animate-bounce-slow" />
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-r from-gray-400/10 to-gray-500/10 transform rotate-45 animate-float" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Main Hero Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                <TypewriterText 
                  texts={[name]}
                  speed={150}
                  deleteSpeed={100}
                  pauseTime={2000}
                  className=""
                />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <TypewriterText 
                texts={[
                  "International Business with Finance & AI minors",
                  "Building bridges between global markets and technology",
                  "BJJ practitioner applying discipline to business",
                  "Creating value through strategic thinking"
                ]}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
                className="font-medium"
              />
            </p>
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#experience" className="px-8 py-4 bg-gradient-to-r from-white to-gray-300 text-black font-semibold rounded-xl hover:from-gray-200 hover:to-gray-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25">
              Explore Experience
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Let's Connect
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-center">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a driven International Business student at{' '}
                <span className="text-cyan-400 font-semibold">Northeastern University</span> with minors in Finance and Interdisciplinary AI, 
                passionate about bridging the gap between global markets and innovative technology.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                As an entrepreneur, I've contributed to building a six-figure sneaker business and 
                supporting wealth management operations for Brazil-focused investment mandates.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond academics, I'm a dedicated{' '}
                <span className="text-blue-400 font-semibold">Brazilian Jiu-Jitsu</span> and{' '}
                <span className="text-purple-400 font-semibold">MMA practitioner</span> who applies 
                the discipline and strategic thinking from martial arts to my business approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Experience</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Leading products and teams
              </span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
              A snapshot of the roles where I ship quickly, collaborate across disciplines, and keep users front and center.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {EXPERIENCE.slice(0, 4).map((exp, index) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-sm shadow-black/10 hover:border-cyan-400/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-sm text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-xs font-medium text-cyan-200/80">
                    {exp.start} — {exp.end}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex gap-3 leading-relaxed">
                      <span aria-hidden className="text-cyan-300">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, index) => (
              <div 
                key={skill}
                className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-300 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Email",
                value: email,
                href: `mailto:${email}`,
                description: "Let's start a conversation"
              },
              {
                name: "Phone",
                value: "305-699-9713",
                href: "tel:305-699-9713",
                description: "Call or text anytime"
              },
              {
                name: "LinkedIn",
                value: "Connect with me",
                href: linkedin || "",
                description: "Professional networking"
              }
            ].map((method, index) => (
              <a
                key={method.name}
                href={method.href}
                target={method.name === "LinkedIn" ? "_blank" : undefined}
                rel={method.name === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105 group block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                  {method.name}
                </h3>
                <p className="text-gray-300 font-medium mb-2 break-all">
                  {method.value}
                </p>
                <p className="text-sm text-gray-400">
                  {method.description}
                </p>
              </a>
            ))}
          </div>

          <div className="text-center">
            <blockquote className="text-xl md:text-2xl text-gray-300 italic max-w-4xl mx-auto leading-relaxed">
              "There's always something to be grateful for."
            </blockquote>
            <div className="mt-6 text-gray-400">— My Daily Reminder</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 {name}. Built with passion and innovation.
          </p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </main>
  );
}