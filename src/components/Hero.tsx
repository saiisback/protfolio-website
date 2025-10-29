"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MotionLink = motion(Link);

export default function Hero() {
  return (
    <motion.section
      className="grid gap-10 border-y border-white/10 py-16 md:grid-cols-[1.15fr,0.85fr]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="space-y-8" variants={sectionVariants}>
        <motion.div
          className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.35em] text-white/40"
          variants={itemVariants}
        >
          <span>{"// SWE"}</span>
          <span>{"// Blockchain"}</span>
          <span>{"// AI"}</span>
        </motion.div>
        <motion.h1
          className="text-balance text-4xl font-medium leading-[1.15] text-white md:text-5xl lg:text-6xl"
          variants={itemVariants}
        >
          I partner with founders to turn ideas into products with clear
          interfaces, sharp decisions, and fast execution.
        </motion.h1>
        <motion.p className="max-w-xl text-lg text-white/60" variants={itemVariants}>
          Talk is cheap. Show me the code.
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center gap-4"
          variants={itemVariants}
          transition={{ staggerChildren: 0.1 }}
        >
          <MotionLink
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
            whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(255,255,255,0.22)" }}
            whileTap={{ scale: 0.96 }}
          >
            See my Work
            <motion.span
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition group-hover:translate-x-0.5"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05, x: 2 }}
            >
              ↗
            </motion.span>
          </MotionLink>
          <MotionLink
            href="mailto:karthiksaiketha@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white"
            whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.6)" }}
            whileTap={{ scale: 0.96 }}
          >
            Start a Project
          </MotionLink>
        </motion.div>
      </motion.div>
      <motion.div className="space-y-6" variants={sectionVariants}>
        <motion.div
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_-50px_rgba(255,255,255,0.6)] backdrop-blur"
          variants={itemVariants}
          whileHover={{ y: -6, scale: 1.01 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/50">
            Intro
          </p>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
           Flexible and adaptable developer with a passion for building scalable and efficient solutions.
          </p>
        </motion.div>
        <motion.div
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur"
          variants={itemVariants}
          whileHover={{ y: -6, scale: 1.01 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Platforms
          </p>
          <motion.div
            className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/60"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {["Next.js", "LangGraph", "Python", "Npm Packages"].map((item) => (
              <motion.span key={item} variants={itemVariants}>
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

