import { experiences } from "@/data/portfolio-data";

export default function Experience() {
  return (
    <section id="experience" className="space-y-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            {"// Work Experience"}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Crafting momentum inside venture-backed teams.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-white/60">
          A hybrid of in-house leadership and agency sprints—owning outcomes from
          discovery to sustained iteration.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience) => (
          <article
            key={experience.company}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/40 hover:bg-white/[0.05]"
          >
            <header className="space-y-2">
              <span className="text-xs uppercase tracking-[0.4em] text-white/40">
                {experience.period}
              </span>
              <h3 className="text-xl font-semibold leading-tight text-white">
                {experience.role}
              </h3>
              <p className="text-sm font-medium text-white/50">
                {experience.company}
              </p>
            </header>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              {experience.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

