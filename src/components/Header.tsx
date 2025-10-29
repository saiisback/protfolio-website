import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          © Developer Portfolio 
        </p>
        <div className="mt-3 text-3xl font-semibold tracking-tight text-white">
          Sai karthik ketha
        </div>
      </div>
      <nav className="flex flex-wrap items-center gap-3 text-sm text-white/70">
       
        <Link
          href="#experience"
          className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/40 hover:text-white"
        >
          Work Experience
        </Link>
        <Link
          href="#projects"
          className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/40 hover:text-white"
        >
          Projects
        </Link>
        <Link
          href="#hackathons"
          className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/40 hover:text-white"
        >
          Hackathons
        </Link>
        
      </nav>
    </header>
  );
}

