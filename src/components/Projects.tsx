"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/portfolio-data";

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
    <section id="projects" className="space-y-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            {"// Projects"}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Selected collaborations and case studies.
          </h2>
        </div>
      </div>
      <div className="space-y-6">
        {projects.map((project) => {
          const isExpanded = expanded[project.title] || false;
          const expandedContent = project.expandedContent;
          const links = expandedContent?.links || {};
          const hasImage = !!expandedContent?.image;
          const hasLinks = Object.keys(links).length > 0;

          return (
            <article
              key={project.title}
              className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/40 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="max-w-2xl space-y-4 flex-1">
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
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-white/40">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => toggleExpand(project.title)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-white/70 transition-all hover:border-white/60 hover:bg-white/[0.1] hover:text-white"
                  aria-label={isExpanded ? "Collapse" : "Expand"}
                >
                  <svg
                    className="h-5 w-5 transition-transform duration-300"
                    style={{
                      transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>

              {isExpanded && expandedContent && (
                <div className="mt-4 space-y-6 border-t border-white/10 pt-6 animate-in fade-in slide-in-from-top-4 duration-300">
                  {expandedContent.description && (
                    <p className="text-sm leading-relaxed text-white/70">
                      {expandedContent.description}
                    </p>
                  )}
                  <div
                    className={`grid gap-6 ${
                      hasImage && hasLinks
                        ? "md:grid-cols-2"
                        : hasImage || hasLinks
                        ? "md:grid-cols-1"
                        : ""
                    }`}
                  >
                    {hasImage && (
                      <div className="relative h-64 w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                        <Image
                          src={expandedContent.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {hasLinks && (
                      <div className={`flex flex-wrap gap-4 ${hasImage ? "items-center justify-center" : ""}`}>
                        {links.website && (
                          <Link
                            href={links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:bg-white/[0.1] hover:text-white"
                          >
                            {getLinkLabel("website")}
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition group-hover:translate-x-1">
                              ↗
                            </span>
                          </Link>
                        )}
                        {links.npm && (
                          <Link
                            href={links.npm}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:bg-white/[0.1] hover:text-white"
                          >
                            {getLinkLabel("npm")}
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition group-hover:translate-x-1">
                              ↗
                            </span>
                          </Link>
                        )}
                        {links.github && (
                          <Link
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:bg-white/[0.1] hover:text-white"
                          >
                            {getLinkLabel("github")}
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 transition group-hover:translate-x-1">
                              ↗
                            </span>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
