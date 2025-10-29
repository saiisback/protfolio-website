import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid gap-10 border-y border-white/10 py-16 md:grid-cols-[1.15fr,0.85fr]">
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/40">
          <span>{"// SWE"}</span>
          <span>{"// Blockchain"}</span>
          <span>{"// AI"}</span>
        </div>
        <h1 className="text-balance text-4xl font-medium leading-[1.15] text-white md:text-5xl lg:text-6xl">
          I partner with founders to turn ideas into products with clear
          interfaces, sharp decisions, and fast execution.
        </h1>
        <p className="max-w-xl text-lg text-white/60">
          Talk is cheap. Show me the code.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            See my Work
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition group-hover:translate-x-0.5">
              ↗
            </span>
          </Link>
          <Link
            href="mailto:karthiksaiketha@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white"
          >
            Start a Project
          </Link>
        </div>
      </div>
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_-50px_rgba(255,255,255,0.6)] backdrop-blur">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/50">
            Intro
          </p>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
           Flexible and adaptable developer with a passion for building scalable and efficient solutions.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Platforms
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/60">
            <span>Next.js</span>
            <span>LangGraph</span>
            <span>Python</span>
            <span>Npm Packages</span>
          </div>
        </div>
      </div>
    </section>
  );
}

