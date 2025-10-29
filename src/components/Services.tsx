"use client";

import { motion, type Variants } from "framer-motion";
import { services } from "@/data/portfolio-data";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.14 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Services() {
  return (
    <motion.section
      id="services"
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
            {"// Services"}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            From strategy to launch, I guide products end-to-end.
          </h2>
        </motion.div>
        <motion.p className="max-w-sm text-sm text-white/60" variants={cardVariants}>
          Every engagement is tailored to momentum—lean sprints, decisive
          feedback, and detail-rich outcomes that feel inevitable.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/40 hover:bg-white/[0.05]"
            variants={cardVariants}
            whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.4)" }}
          >
            <header className="flex items-start justify-between gap-4">
              <span className="text-sm font-semibold tracking-[0.4em] text-white/40">
                {service.label}
              </span>
              <motion.h3
                className="text-2xl font-semibold text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              >
                {service.title}
              </motion.h3>
            </header>
            <motion.p
              className="mt-6 text-sm text-white/60"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
            >
              {service.description}
            </motion.p>
            <motion.ul
              className="mt-8 grid gap-2 text-sm text-white/50"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
              {service.items.map((item) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3"
                  variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
                >
                  <motion.span
                    className="h-1 w-6 rounded-full bg-white/30 transition group-hover:bg-white/80"
                    whileHover={{ scaleX: 1.15 }}
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

