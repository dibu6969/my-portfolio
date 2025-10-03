import { ensureResume } from "@/lib/parseResume";
import { PROFILE } from "@/lib/profile";
import { SKILLS, EXPERIENCE } from "./projects/data/resume";
import AnimatedName from "./components/AnimatedName";
import InfoPanel from "./components/InfoPanel";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function Home() {
  const resume = await ensureResume();
  const name = PROFILE.name || resume.inferred.name || "Your Name";
  const email = PROFILE.email || resume.inferred.email || "you@example.com";
  const linkedin = PROFILE.links?.linkedin || resume.inferred.links?.linkedin;

  return (
    <main className="min-h-screen">
      <InfoPanel />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center p-4 md:p-6 relative" aria-label="Hero section with name and introduction">
        <div className="mx-auto max-w-3xl text-center px-4">
          <AnimatedName name={name} />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 md:py-24 flex items-center justify-center p-4 md:p-6" style={{ fontFamily: 'var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }} aria-label="About me section">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-white">About Me</h2>
          <div className="text-base md:text-lg lg:text-xl leading-relaxed" style={{ color: '#f5f5dc' }}>
            <p className="mb-4 md:mb-6">
              I&apos;m a driven finance and international business student at Northeastern University, passionate about bridging the gap between traditional finance and innovative technology. Born in Miami with strong connections to Mexico, I&apos;ve gained valuable experience contributing to a six-figure sneaker business and supporting wealth management operations for Brazil-focused investment mandates.
            </p>
            <p>
              Beyond the numbers and market analysis, I&apos;m a dedicated Brazilian Jiu-Jitsu and MMA practitioner who applies the discipline, patience, and strategic thinking from martial arts to my approach in finance. I believe that combining technical skills with personal growth creates the foundation for meaningful impact in both business and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 flex items-center justify-center p-4 md:p-6" style={{ fontFamily: 'var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }} aria-label="Work experience section">
        <div className="mx-auto max-w-6xl text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-white">Experience</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-gray-700 h-full flex flex-col hover-lift interactive">
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 leading-tight">{exp.role}</h3>
                  <h4 className="text-base md:text-lg text-yellow-400 mb-2 font-semibold">{exp.company}</h4>
                  <p className="text-xs md:text-sm font-medium" style={{ color: '#f5f5dc' }}>
                    {exp.start} - {exp.end}
                  </p>
                </div>
                <ul className="text-left space-y-2 md:space-y-3 flex-grow">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-xs md:text-sm leading-relaxed" style={{ color: '#f5f5dc' }}>
                      <span className="text-yellow-400 mr-2">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 flex items-center justify-center p-4 md:p-6" style={{ fontFamily: 'var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }} aria-label="Skills and abilities section">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {SKILLS.map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-gray-700 hover-lift interactive"
              >
                <span className="text-white font-medium text-sm md:text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="py-16 md:py-24 flex items-center justify-center p-4 md:p-6" style={{ fontFamily: 'var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }} aria-label="Personal interests and hobbies section">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-white">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700 hover-lift interactive">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Brazilian Jiu-Jitsu</h3>
              <p className="text-sm md:text-base" style={{ color: '#f5f5dc' }}>
                Training in the art of ground fighting, learning discipline, patience, and the importance of technique over strength.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700 hover-lift interactive">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Artificial Intelligence</h3>
              <p className="text-sm md:text-base" style={{ color: '#f5f5dc' }}>
                Exploring the latest developments in AI, machine learning, and how these technologies can solve real-world problems.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700 hover-lift interactive">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Product Design</h3>
              <p className="text-sm md:text-base" style={{ color: '#f5f5dc' }}>
                Creating user-centered solutions that bridge the gap between technology and human needs.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700 hover-lift interactive">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Entrepreneurship</h3>
              <p className="text-sm md:text-base" style={{ color: '#f5f5dc' }}>
                Building and scaling businesses, learning from failures, and turning ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-16 md:py-24 flex items-center justify-center p-4 md:p-6" style={{ fontFamily: 'var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }} aria-label="Language proficiency section">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-white">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">English</h3>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-2xl">★</span>
                ))}
              </div>
              <p className="text-xs md:text-sm mt-2" style={{ color: '#f5f5dc' }}>Native</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Spanish</h3>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-2xl">★</span>
                ))}
              </div>
              <p className="text-xs md:text-sm mt-2" style={{ color: '#f5f5dc' }}>Native</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Portuguese</h3>
              <div className="flex justify-center space-x-1">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg md:text-2xl">★</span>
                ))}
              </div>
              <p className="text-xs md:text-sm mt-2" style={{ color: '#f5f5dc' }}>Elementary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 md:py-24 flex items-center justify-center p-4 md:p-6" style={{ fontFamily: 'var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }} aria-label="Resume download section">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-white">Resume</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700 max-w-md mx-auto">
            <div className="mb-4 md:mb-6">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-yellow-300 mx-auto mb-3 md:mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Download Resume</h3>
              <p className="text-xs md:text-sm mb-4 md:mb-6" style={{ color: '#f5f5dc' }}>
                Get a detailed overview of my experience, skills, and achievements
              </p>
            </div>
            <a 
              href="/resume.pdf" 
              download="Emilio_Dibildox_Resume.pdf"
              className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-yellow-300 text-gray-900 font-semibold rounded-lg hover:bg-yellow-200 transition-colors duration-300 text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 flex items-center justify-center p-4 md:p-6" style={{ fontFamily: 'var(--font-space-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }} aria-label="Contact information section">
        <div className="mx-auto max-w-4xl text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-white">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <a 
              href={`mailto:${email}`}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700 hover:border-white/30 transition-all duration-300 block hover:scale-105 cursor-pointer"
              aria-label="Send email"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Email</h3>
              <p 
                className="text-xs md:text-sm hover:text-white transition-colors duration-300 break-all"
                style={{ color: '#f5f5dc' }}
              >
                {email}
              </p>
            </a>
            <a 
              href={`tel:${PROFILE.phone}`}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700 hover:border-white/30 transition-all duration-300 block hover:scale-105 cursor-pointer"
              aria-label="Call phone number"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Phone</h3>
              <p 
                className="text-sm md:text-lg hover:text-white transition-colors duration-300"
                style={{ color: '#f5f5dc' }}
              >
                {PROFILE.phone}
              </p>
            </a>
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-gray-700 hover:border-white/30 transition-all duration-300 block hover:scale-105 cursor-pointer"
              aria-label="Visit LinkedIn profile"
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">LinkedIn</h3>
              <p 
                className="text-sm md:text-lg hover:text-white transition-colors duration-300"
                style={{ color: '#f5f5dc' }}
              >
                Connect with me
              </p>
            </a>
          </div>
          <div className="mt-8 md:mt-12">
            <p className="text-base md:text-lg" style={{ color: '#f5f5dc' }}>
              There&apos;s always something to be grateful for.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
