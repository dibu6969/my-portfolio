import { ensureResume } from "@/lib/parseResume";
import { PROFILE } from "@/lib/profile";
import { SKILLS, EXPERIENCE } from "./projects/data/resume";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function Home() {
  const resume = await ensureResume();
  const name = PROFILE.name || resume.inferred.name || "Your Name";
  const email = PROFILE.email || resume.inferred.email || "you@example.com";
  const linkedin = PROFILE.links?.linkedin || resume.inferred.links?.linkedin;

  return (
    <main className="min-h-screen">
      {/* Terminal Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md rounded-lg px-4 py-2 border border-blue-500/30 shadow-lg terminal-window">
        <div className="flex items-center space-x-1 md:space-x-2">
          <span className="terminal-prompt text-xs">~/portfolio$</span>
          {["about", "experience", "skills", "interests", "languages", "resume", "contact"].map((sectionName, index) => (
            <a
              key={sectionName}
              href={`#${sectionName}`}
              className="px-2 py-1 rounded text-xs md:text-sm font-mono transition-all duration-300 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 animate-slide-in-code"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {sectionName}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Matrix-style binary rain */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute binary-text animate-matrix-rain"
                style={{
                  left: `${i * 5}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide animate-slide-in-code" style={{ animationDelay: '0.2s' }}>
              <span className="terminal-prompt">$ </span>
              <span className="terminal-text">Hello, I'm</span>
            </p>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text name-glow animate-code-glow typewriter-cursor animate-blink-cursor">
              {name}
            </span>
          </h1>

          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed animate-slide-in-code" style={{ animationDelay: '0.4s' }}>
              <span className="code-syntax">const</span> <span className="terminal-text">profession</span> <span className="code-syntax">=</span> <span className="code-string">"Finance & International Business Student"</span><span className="code-syntax">;</span>
              <br />
              <span className="code-syntax">const</span> <span className="terminal-text">university</span> <span className="code-syntax">=</span> <span className="code-string">"Northeastern University"</span><span className="code-syntax">;</span>
            </p>
          </div>

          <div className="mb-16">
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed animate-slide-in-code" style={{ animationDelay: '0.6s' }}>
              <span className="code-comment">// A passionate entrepreneur, BJJ practitioner, and builder</span>
              <br />
              <span className="code-syntax">const</span> <span className="terminal-text">passions</span> <span className="code-syntax">=</span> <span className="code-syntax">[</span>
              <br />
              <span className="code-string ml-4">"Entrepreneurship"</span><span className="code-syntax">,</span>
              <br />
              <span className="code-string ml-4">"Brazilian Jiu-Jitsu"</span><span className="code-syntax">,</span>
              <br />
              <span className="code-string ml-4">"MMA"</span><span className="code-syntax">,</span>
              <br />
              <span className="code-string ml-4">"Innovative Technology"</span>
              <br />
              <span className="code-syntax">]</span><span className="code-syntax">;</span>
            </p>
          </div>

          {/* Terminal Window */}
          <div className="terminal-window max-w-2xl mx-auto mb-12 animate-slide-in-code" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4 text-sm text-gray-400">emilio@portfolio:~$</div>
            </div>
            <div className="space-y-2">
              <div className="terminal-prompt">$ whoami</div>
              <div className="terminal-output animate-terminal-blink">Emilio Dibildox</div>
              <div className="terminal-prompt">$ cat skills.txt</div>
              <div className="terminal-output">
                <span className="code-syntax">Finance</span> | <span className="code-syntax">Business</span> | <span className="code-syntax">Technology</span>
              </div>
              <div className="terminal-prompt">$ ls interests/</div>
              <div className="terminal-output">
                bjj/ mma/ entrepreneurship/ innovation/
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#about"
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover-glow animate-slide-in-code"
              style={{ animationDelay: '1s' }}
            >
              <span className="terminal-prompt">$ </span>Explore My Story
            </a>
            
            <a
              href="#contact"
              className="modern-card px-8 py-4 text-lg font-semibold text-white hover-glow animate-slide-in-code"
              style={{ animationDelay: '1.2s' }}
            >
              <span className="terminal-prompt">$ </span>Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl" />
        
        {/* Floating binary elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute binary-text animate-binary-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a driven finance and international business student at{' '}
                  <span className="gradient-text-secondary font-semibold">Northeastern University</span>, 
                  passionate about bridging the gap between traditional finance and innovative technology.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Born in Miami with strong connections to Mexico, I've gained valuable experience contributing 
                  to a six-figure sneaker business and supporting wealth management operations for Brazil-focused 
                  investment mandates.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Beyond the numbers and market analysis, I'm a dedicated{' '}
                  <span className="gradient-text-accent font-semibold">Brazilian Jiu-Jitsu</span> and{' '}
                  <span className="gradient-text-accent font-semibold">MMA practitioner</span> who applies 
                  the discipline, patience, and strategic thinking from martial arts to my approach in finance.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="modern-card p-8 hover-lift">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold gradient-text mb-6">Core Values</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">Discipline</span>
                        <span className="text-gray-400">90%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-blue-800 rounded-full w-[90%]" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">Innovation</span>
                        <span className="text-gray-400">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full w-[85%]" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">Leadership</span>
                        <span className="text-gray-400">80%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full w-[80%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="modern-card p-6 hover-lift animate-slide-in-code" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-full text-sm font-medium text-white mb-4 font-mono">
                    <span className="code-syntax">{exp.start}</span> - <span className="code-syntax">{exp.end}</span>
                </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg gradient-text-secondary font-semibold mb-4">
                    {exp.company}
                  </h4>
                  
                  <ul className="space-y-3">
                  {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-gray-300 leading-relaxed flex items-start">
                        <span className="text-blue-400 mr-3 mt-1 font-bold">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill, index) => (
              <div 
                key={skill}
                className="modern-card p-6 text-center hover-lift animate-slide-in-code"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-white font-medium">
                  <span className="code-syntax">{`<`}</span>
                  {skill}
                  <span className="code-syntax">{`/>`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="section-padding relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Interests & Passions</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full" />
            </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Brazilian Jiu-Jitsu",
                description: "Training in the art of ground fighting, learning discipline, patience, and the importance of technique over strength.",
                icon: "🥋",
                gradient: "from-blue-600 to-blue-800"
              },
              {
                title: "Artificial Intelligence",
                description: "Exploring the latest developments in AI, machine learning, and how these technologies can solve real-world problems.",
                icon: "🤖",
                gradient: "from-blue-500 to-blue-700"
              },
              {
                title: "Product Design",
                description: "Creating user-centered solutions that bridge the gap between technology and human needs.",
                icon: "🎨",
                gradient: "from-blue-400 to-blue-600"
              },
              {
                title: "Entrepreneurship",
                description: "Building and scaling businesses, learning from failures, and turning ideas into reality.",
                icon: "🚀",
                gradient: "from-blue-700 to-blue-900"
              }
            ].map((interest, index) => (
              <div
                key={interest.title}
                className="modern-card p-8 hover-lift group"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${interest.gradient} flex items-center justify-center text-3xl mr-4`}>
                    {interest.icon}
            </div>
                  <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {interest.title}
                  </h3>
            </div>

                <p className="text-gray-300 leading-relaxed">
                  {interest.description}
              </p>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Languages</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "English",
                level: "Native",
                proficiency: 100,
                flag: "🇺🇸",
                description: "Fluent in business and academic contexts"
              },
              {
                name: "Spanish", 
                level: "Native",
                proficiency: 100,
                flag: "🇲🇽",
                description: "Native speaker with cultural understanding"
              },
              {
                name: "Portuguese",
                level: "Elementary",
                proficiency: 40,
                flag: "🇧🇷",
                description: "Learning through Brazilian connections"
              }
            ].map((language, index) => (
              <div
                key={language.name}
                className="modern-card p-8 text-center hover-lift group"
              >
                <div className="mb-6">
                  <div className="text-4xl mb-3">{language.flag}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {language.name}
                  </h3>
                  <div className="text-sm text-gray-400 mt-1">{language.description}</div>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold gradient-text-secondary mb-2">
                    {language.proficiency}%
              </div>
                  <div className="text-lg text-gray-300 font-medium">
                    {language.level}
            </div>
              </div>

                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                    style={{ width: `${language.proficiency}%` }}
                  />
            </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="section-padding relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
          </div>

          <div className="modern-card p-8 md:p-12 text-center hover-lift group">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-4xl text-white mb-8">
              📄
            </div>

            <h3 className="text-3xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
              Emilio Dibildox - Resume
            </h3>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of my academic journey, professional experience, 
              skills, and achievements in finance, technology, and business.
            </p>

            <a 
              href="/resume.pdf" 
              download="Emilio_Dibildox_Resume.pdf"
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover-glow inline-flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>

            <div className="mt-6 text-sm text-gray-400">
              PDF • Updated January 2024 • 2 pages
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Email",
                value: email,
                icon: "📧",
                href: `mailto:${email}`,
                gradient: "from-blue-500 to-blue-700",
                description: "Let's start a conversation"
              },
              {
                name: "Phone",
                value: "305-699-9713",
                icon: "📱",
                href: "tel:305-699-9713",
                gradient: "from-blue-600 to-blue-800",
                description: "Call or text anytime"
              },
              {
                name: "LinkedIn",
                value: "Connect with me",
                icon: "💼",
                href: linkedin || "",
                gradient: "from-blue-700 to-blue-900",
                description: "Professional networking"
              }
            ].map((method, index) => (
              <a
                key={method.name}
                href={method.href}
                target={method.name === "LinkedIn" ? "_blank" : undefined}
                rel={method.name === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="modern-card p-8 text-center hover-lift group block"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${method.gradient} flex items-center justify-center text-3xl`}>
                  {method.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
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
    </main>
  );
}