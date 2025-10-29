"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-white/10 bg-black/30"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 text-xs uppercase tracking-[0.35em] text-white/30 md:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <motion.span whileHover={{ y: -3 }}>© Developer Portfolio</motion.span>
        <motion.span whileHover={{ y: -3 }}>All Rights Reserved</motion.span>
      </motion.div>
    </motion.footer>
  );
}

