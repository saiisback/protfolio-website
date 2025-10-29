"use client";

import { motion } from "framer-motion";

export default function BackgroundGradient() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 opacity-[0.65]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
      <motion.div
        className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#3030ff]/20 blur-[120px]"
        animate={{ x: [-10, 15, -5], y: [0, -15, 10] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#ff4d73]/20 blur-[140px]"
        animate={{ x: [0, -20, 10], y: [0, 15, -12] }}
        transition={{ duration: 22, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#23ff9a]/10 blur-[140px]"
        animate={{ y: [0, 18, -12], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
    </motion.div>
  );
}

