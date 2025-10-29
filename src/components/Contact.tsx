"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { socials } from "@/data/portfolio-data";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const MotionLink = motion(Link);

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="grid gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:grid-cols-[1.2fr,0.8fr]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="space-y-6" variants={containerVariants}>
        <motion.p
          className="text-sm uppercase tracking-[0.35em] text-white/40"
          variants={containerVariants}
        >
          {"// Contact"}
        </motion.p>
        <motion.h2
          className="text-3xl font-semibold text-white md:text-4xl"
          variants={containerVariants}
        >
          Available for new opportunities.
        </motion.h2>
        <motion.p className="text-sm text-white/60" variants={containerVariants}>
          Open to full-time opportunities, internships, and collaborative projects.
          Specializing in AI/ML solutions, full-stack development, and product
          leadership. Available for remote work worldwide.
        </motion.p>
        <motion.div className="space-y-4 text-sm text-white/70" variants={containerVariants}>
          <motion.p variants={containerVariants}>
            <span className="block text-xs uppercase tracking-[0.3em] text-white/40">
              Email
            </span>
            <MotionLink
              href="mailto:karthiksaiketha@gmail.com"
              className="transition hover:text-white"
              whileHover={{ x: 4 }}
            >
              karthiksaiketha@gmail.com
            </MotionLink>
          </motion.p>
          <motion.p variants={containerVariants}>
            <span className="block text-xs uppercase tracking-[0.3em] text-white/40">
              Location
            </span>
            Bengaluru, Karnataka, India
          </motion.p>
          <motion.p variants={containerVariants}>
            <span className="block text-xs uppercase tracking-[0.3em] text-white/40">
              Availability
            </span>
            Open to remote work worldwide • Open to relocation for the right
            opportunity
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8"
        variants={containerVariants}
        whileHover={{ scale: 1.01, y: -4 }}
      >
        <div>
          <motion.h3
            className="text-sm uppercase tracking-[0.35em] text-white/40"
            variants={containerVariants}
          >
            {"// Connect"}
          </motion.h3>
          <motion.p className="mt-3 text-sm text-white/60" variants={containerVariants}>
            Find me on LinkedIn, GitHub, and other platforms. Always open to
            connecting and collaborating.
          </motion.p>
        </div>
        <motion.div
          className="flex gap-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {socials.map((social) => (
            <MotionLink
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 min-w-[120px] items-center justify-center rounded-full border border-white/15 px-4 text-sm text-white/70 transition hover:border-white/60 hover:text-white"
              whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.55)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="whitespace-nowrap">{social.label}</span>
            </MotionLink>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
