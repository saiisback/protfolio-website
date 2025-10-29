import { hackathons } from "@/data/portfolio-data";

export default function Hackathons() {
  return (
    <section id="hackathons" className="space-y-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            {"// Hackathon Wins"}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Three corporate hackathons, back-to-back-to-back.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-white/60">
          There&apos;s no other way to describe it. Three consecutive wins across major web3 events.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {hackathons.map((hackathon, index) => (
          <article
            key={hackathon.event}
            className={`group relative flex h-full flex-col justify-between rounded-3xl border p-8 transition-all ${
              index === 0
                ? "border-[#23ff9a]/30 bg-gradient-to-br from-[#23ff9a]/10 to-transparent hover:border-[#23ff9a]/50 hover:bg-[#23ff9a]/15"
                : "border-white/10 bg-white/[0.03] hover:border-white/40 hover:bg-white/[0.06]"
            }`}
          >
            <header className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.4em] text-white/40">
                  {hackathon.year}
                </span>
                {hackathon.icon && (
                  <span className="text-2xl">{hackathon.icon}</span>
                )}
              </div>
              <h3 className="text-xl font-semibold leading-tight text-white">
                {hackathon.event}
              </h3>
              <div className="space-y-1">
                <p
                  className={`text-sm font-semibold ${
                    index === 0
                      ? "text-[#23ff9a]"
                      : index === 1
                      ? "text-[#ffd700]"
                      : "text-white/70"
                  }`}
                >
                  {hackathon.award}
                </p>
                {hackathon.prize && (
                  <p className="text-xs font-medium text-white/50">
                    {hackathon.prize}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 text-xs text-white/40">
                  {hackathon.location && (
                    <span>{hackathon.location}</span>
                  )}
                  {hackathon.track && (
                    <span>• {hackathon.track}</span>
                  )}
                  {hackathon.host && (
                    <span>• {hackathon.host}</span>
                  )}
                </div>
              </div>
            </header>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              {hackathon.highlight}
            </p>
            {index === 0 && (
              <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#23ff9a]/20 text-[#23ff9a] text-xs font-bold shadow-lg">
                #1
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
