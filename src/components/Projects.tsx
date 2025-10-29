"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { projects } from "@/data/portfolio-data";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut", staggerChildren: 0.14 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MotionLink = motion(Link);

export default function Projects() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (title: string) => {
    setExpanded((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const getLinkLabel = (type: string) => {
    switch (type) {
      case "npm":
        return "View on NPM";
      case "website":
        return "Visit Website";
      case "github":
        return "View Repository";
      default:
        return "View Project";
    }
  };

  return (
    <motion.section
      id="projects"
      className="space-y-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        variants={cardVariants}
      >
        <motion.div variants={cardVariants}>
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            {"// Projects"}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Selected collaborations and case studies.
          </h2>
        </motion.div>
      </motion.div>
      <motion.div className="space-y-6" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
        {projects.map((project) => {
          const isExpanded = expanded[project.title] || false;
          const expandedContent = project.expandedContent;
          const links = expandedContent?.links || {};
          const hasImage = !!expandedContent?.image;
          const hasLinks = Object.keys(links).length > 0;

          return (
            <motion.article
              key={project.title}
              className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/40 hover:bg-white/[0.05]"
              variants={cardVariants}
              whileHover={{ y: -10, borderColor: "rgba(255,255,255,0.35)", boxShadow: "0 30px 60px rgba(2,8,23,0.45)" }}
            >
              <div className="flex items-start justify-between gap-6">
                <motion.div className="max-w-2xl space-y-4 flex-1" variants={cardVariants}>
                  <div className="flex items-center gap-4 text-sm text-white/40">
                    <span className="font-semibold tracking-[0.3em]">
                      ({project.year})
                    </span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60">{project.blurb}</p>
                  <motion.div
                    className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40"
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                  >
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="rounded-full border border-white/15 px-3 py-1"
                        variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
                <motion.button
                  onClick={() => toggleExpand(project.title)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-white/70 transition-all hover:border-white/60 hover:bg-white/[0.1] hover:text-white"
                  aria-label={isExpanded ? "Collapse" : "Expand"}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </motion.svg>
                </motion.button>
              </div>

              <AnimatePresence initial={false} mode="wait">
                {isExpanded && expandedContent && (
                  <motion.div
                    key="expanded"
                    className="mt-4 space-y-6 border-t border-white/10 pt-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    {expandedContent.description && (
                      <motion.p
                        className="text-sm leading-relaxed text-white/70"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
                      >
                        {expandedContent.description}
                      </motion.p>
                    )}
                    <motion.div
                      className={`grid gap-6 ${
                        hasImage && hasLinks
                          ? "md:grid-cols-2"
                          : hasImage || hasLinks
                          ? "md:grid-cols-1"
                          : ""
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                    >
                      {hasImage && (
                        <motion.div
                          className="relative h-64 w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          <Image
                            src={expandedContent.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      )}
                      {hasLinks && (
                        <motion.div
                          className={`flex flex-wrap gap-4 ${hasImage ? "items-center justify-center" : ""}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
                        >
                          {links.website && (
                            <MotionLink
                              href={links.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:bg-white/[0.1] hover:text-white"
                              whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.5)" }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {getLinkLabel("website")}
                              <motion.span
                                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition group-hover:translate-x-1"
                                initial={{ x: 0 }}
                                whileHover={{ x: 4 }}
                              >
                                ↗
                              </motion.span>
                            </MotionLink>
                          )}
                          {links.npm && (
                            <MotionLink
                              href={links.npm}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:bg-white/[0.1] hover:text-white"
                              whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.5)" }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {getLinkLabel("npm")}
                              <motion.span
                                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition group-hover:translate-x-1"
                                initial={{ x: 0 }}
                                whileHover={{ x: 4 }}
                              >
                                ↗
                              </motion.span>
                            </MotionLink>
                          )}
                          {links.github && (
                            <MotionLink
                              href={links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:bg-white/[0.1] hover:text-white"
                              whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.5)" }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {getLinkLabel("github")}
                              <motion.span
                                className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition group-hover:translate-x-1"
                                initial={{ x: 0 }}
                                whileHover={{ x: 4 }}
                              >
                                ↗
                              </motion.span>
                            </MotionLink>
                          )}
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
