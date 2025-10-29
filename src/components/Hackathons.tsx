"use client";

import { motion, type Variants } from "framer-motion";
import { hackathons } from "@/data/portfolio-data";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut", staggerChildren: 0.14 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hackathons() {
  return (
    <motion.section
      id="hackathons"
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
            {"// Hackathon Wins"}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Three corporate hackathons, back-to-back-to-back.
          </h2>
        </motion.div>
        <motion.p className="max-w-sm text-sm text-white/60" variants={cardVariants}>
          There&apos;s no other way to describe it. Three consecutive wins across major web3 events.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {hackathons.map((hackathon, index) => (
          <motion.article
            key={hackathon.event}
            className={`group relative flex h-full flex-col justify-between rounded-3xl border p-8 transition-all ${
              index === 0
                ? "border-[#23ff9a]/30 bg-gradient-to-br from-[#23ff9a]/10 to-transparent hover:border-[#23ff9a]/50 hover:bg-[#23ff9a]/15"
                : "border-white/10 bg-white/[0.03] hover:border-white/40 hover:bg-white/[0.06]"
            }`}
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 24px 45px rgba(0,0,0,0.35)" }}
          >
            <header className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.4em] text-white/40">
                  {hackathon.year}
                </span>
                {hackathon.icon && (
                  <motion.span className="text-2xl" initial={{ rotate: -6 }} animate={{ rotate: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
                    {hackathon.icon}
                  </motion.span>
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
                <motion.div
                  className="flex flex-wrap gap-2 text-xs text-white/40"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                >
                  {hackathon.location && (
                    <motion.span variants={cardVariants}>{hackathon.location}</motion.span>
                  )}
                  {hackathon.track && (
                    <motion.span variants={cardVariants}>• {hackathon.track}</motion.span>
                  )}
                  {hackathon.host && (
                    <motion.span variants={cardVariants}>• {hackathon.host}</motion.span>
                  )}
                </motion.div>
              </div>
            </header>
            <p className="mt-6 text-sm leading-relaxed text-white/60">
              {hackathon.highlight}
            </p>
            {index === 0 && (
              <motion.div
                className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#23ff9a]/20 text-[#23ff9a] text-xs font-bold shadow-lg"
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                #1
              </motion.div>
            )}
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
