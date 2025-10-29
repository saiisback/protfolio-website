import { services } from "@/data/portfolio-data";

export default function Services() {
  return (
    <section id="services" className="space-y-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            {"// Services"}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            From strategy to launch, I guide products end-to-end.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-white/60">
          Every engagement is tailored to momentum—lean sprints, decisive
          feedback, and detail-rich outcomes that feel inevitable.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/40 hover:bg-white/[0.05]"
          >
            <header className="flex items-start justify-between gap-4">
              <span className="text-sm font-semibold tracking-[0.4em] text-white/40">
                {service.label}
              </span>
              <h3 className="text-2xl font-semibold text-white">
                {service.title}
              </h3>
            </header>
            <p className="mt-6 text-sm text-white/60">
              {service.description}
            </p>
            <ul className="mt-8 grid gap-2 text-sm text-white/50">
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1 w-6 rounded-full bg-white/30 transition group-hover:bg-white/80" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

