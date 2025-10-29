import Link from "next/link";
import { socials } from "@/data/portfolio-data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="grid gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:grid-cols-[1.2fr,0.8fr]"
    >
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-white/40">
          {"// Contact"}
        </p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Available for new opportunities.
        </h2>
        <p className="text-sm text-white/60">
          Open to full-time opportunities, internships, and collaborative projects.
          Specializing in AI/ML solutions, full-stack development, and product
          leadership. Available for remote work worldwide.
        </p>
        <div className="space-y-4 text-sm text-white/70">
          <p>
            <span className="block text-xs uppercase tracking-[0.3em] text-white/40">
              Email
            </span>
            <Link
              href="mailto:karthiksaiketha@gmail.com"
              className="transition hover:text-white"
            >
              karthiksaiketha@gmail.com
            </Link>
          </p>
          <p>
            <span className="block text-xs uppercase tracking-[0.3em] text-white/40">
              Location
            </span>
            Bengaluru, Karnataka, India
          </p>
          <p>
            <span className="block text-xs uppercase tracking-[0.3em] text-white/40">
              Availability
            </span>
            Open to remote work worldwide • Open to relocation for the right
            opportunity
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
        <div>
          <h3 className="text-sm uppercase tracking-[0.35em] text-white/40">
            {"// Connect"}
          </h3>
          <p className="mt-3 text-sm text-white/60">
            Find me on LinkedIn, GitHub, and other platforms. Always open to
            connecting and collaborating.
          </p>
        </div>
        <div className="flex gap-3">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 min-w-[120px] items-center justify-center rounded-full border border-white/15 px-4 text-sm text-white/70 transition hover:border-white/60 hover:text-white"
            >
              <span className="whitespace-nowrap">{social.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
