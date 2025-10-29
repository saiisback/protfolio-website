"use client";

import { motion, type Variants } from "framer-motion";
import { experiences } from "@/data/portfolio-data";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.14 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="space-y-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        variants={sectionVariants}
      >
        <motion.div variants={cardVariants}>
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            {"// Work Experience"}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Crafting momentum inside venture-backed teams.
          </h2>
        </motion.div>
        <motion.p className="max-w-sm text-sm text-white/60" variants={cardVariants}>
          A hybrid of in-house leadership and agency sprints—owning outcomes from
          discovery to sustained iteration.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {experiences.map((experience) => (
          <motion.article
            key={experience.company}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/40 hover:bg-white/[0.05]"
            variants={cardVariants}
            whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.35)" }}
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
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

