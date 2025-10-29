"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const MotionLink = motion(Link);

export default function Header() {
  return (
    <motion.header
      className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          © Developer Portfolio 
        </p>
        <motion.div
          className="mt-3 text-3xl font-semibold tracking-tight text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        >
          Sai karthik ketha
        </motion.div>
      </motion.div>
      <motion.nav
        className="flex flex-wrap items-center gap-3 text-sm text-white/70"
        variants={containerVariants}
      >
        <MotionLink
          href="#experience"
          className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/40 hover:text-white"
          variants={itemVariants}
          whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.94 }}
        >
          Work Experience
        </MotionLink>
        <MotionLink
          href="#projects"
          className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/40 hover:text-white"
          variants={itemVariants}
          whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.94 }}
        >
          Projects
        </MotionLink>
        <MotionLink
          href="#hackathons"
          className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/40 hover:text-white"
          variants={itemVariants}
          whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.94 }}
        >
          Hackathons
        </MotionLink>
      </motion.nav>
    </motion.header>
  );
}

