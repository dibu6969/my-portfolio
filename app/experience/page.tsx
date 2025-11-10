import { EXPERIENCE } from "@/app/projects/data/resume";

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12 space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">Experience</p>
        <h1 className="text-4xl font-bold text-white">Building products and teams</h1>
        <p className="text-gray-400">
          Highlights from roles where I shipped products, collaborated with stakeholders, and kept customers front and center.
        </p>
      </header>

      <section className="space-y-6">
        {EXPERIENCE.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-sm shadow-black/10"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-white">{item.role}</h2>
                <p className="text-sm text-gray-400">{item.company}</p>
              </div>
              <span className="text-sm font-medium text-cyan-200/80">
                {item.start} — {item.end}
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {item.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3 leading-relaxed">
                  <span aria-hidden className="text-cyan-300">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}

