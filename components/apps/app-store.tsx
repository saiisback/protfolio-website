"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Star,
  Download,
  Package,
  Brain,
  Globe,
  FileText,
  Database,
  Search as SearchIcon,
  Briefcase,
  Chrome,
  Palette,
  PenTool,
  Smartphone,
  Store,
} from "lucide-react"

interface Project {
  id: string
  name: string
  tagline: string
  category: string
  icon?: string
  iconComponent?: React.ComponentType<{ size?: number; className?: string }>
  featureImage: string
  description: string
  fullDescription: string
  techStack: string[]
  demoUrl?: string
  githubUrl?: string
  rating: number
  downloads: string
  screenshots: string[]
}

export default function AppStoreApp() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = [
    "All",
    "AI/ML",
    "SaaS Platforms",
    "Chrome Extensions",
    "Web Apps",
    "Libraries",
    "Systems",
  ]

  const projects: Project[] = [
    {
      id: "masyn-npm-package",
      name: "Masyn",
      tagline: "Utility npm package by Sai Karthik",
      category: "Libraries",
      iconComponent: Package,
      featureImage: "/masyn.png",
      description: "Reusable utilities published as an npm package.",
      fullDescription: "Masyn is an npm library that provides a set of reusable utilities/helpers to accelerate development across projects.",
      techStack: ["TypeScript", "npm"],
      githubUrl: "https://github.com/saiisback/masyn-npm-package",
      rating: 4.7,
      downloads: "1.1K",
      screenshots: ["/masyn.png"],
    },
    {
      id: "empower",
      name: "Empower",
      tagline: "AI-powered adaptive learning games",
      category: "AI/ML",
      iconComponent: Brain,
      featureImage: "/empower.png",
      description: "Generates personalized educational mini-games with voice support.",
      fullDescription: "Empower dynamically creates accessible learning mini-games using an AI orchestrator and renders them safely in an iframe. Includes TTS, STT, and an AI coach.",
      techStack: ["Next.js", "TypeScript", "FastAPI", "LangGraph", "OpenAI", "Groq"],
      githubUrl: "https://github.com/saiisback/empower",
      rating: 4.9,
      downloads: "2.2K",
      screenshots: ["/empower.png"],
    },
    {
      id: "trine-web",
      name: "Trine Web",
      tagline: "Modern web experience for Trine",
      category: "Web Apps",
      iconComponent: Globe,
      featureImage: "/trine.png",
      description: "A polished website/app experience.",
      fullDescription: "A responsive web app with clean UX and modern stack.",
      techStack: ["Next.js", "Tailwind", "TypeScript"],
      githubUrl: "https://github.com/saiisback/trine-web",
      rating: 4.6,
      downloads: "3.1K",
      screenshots: ["/trine.png"],
    },
    {
      id: "pdf-analyser-quiz-generator",
      name: "PDF Analyser & Quiz Generator",
      tagline: "Turn PDFs into interactive quizzes",
      category: "AI/ML",
      iconComponent: FileText,
      featureImage: "/PDF.png",
      description: "Analyse documents and auto-create quizzes.",
      fullDescription: "Processes PDFs using LLMs and creates quizzes with explanations.",
      techStack: ["Next.js", "TypeScript", "Python", "LLMs"],
      githubUrl: "https://github.com/saiisback/pdf-analyser-quiz-generator",
      rating: 4.7,
      downloads: "1.9K",
      screenshots: ["/PDF.png"],
    },
    {
      id: "low-level-rdbms",
      name: "Low-level RDBMS",
      tagline: "From-scratch relational DB",
      category: "Systems",
      iconComponent: Database,
      featureImage: "/dbms.png",
      description: "Educational RDBMS implementation.",
      fullDescription: "Implements key RDBMS components such as storage, indexing, and a minimal query layer.",
      techStack: ["C/C++", "Data Structures", "B+ Trees"],
      githubUrl: "https://github.com/saiisback/Low-level-rdbms",
      rating: 4.8,
      downloads: "720",
      screenshots: ["/dbms.png"],
    },
    {
      id: "search-engine",
      name: "Search Engine",
      tagline: "Indexing, ranking, and retrieval",
      category: "Systems",
      iconComponent: SearchIcon,
      featureImage: "/azizah.png",
      description: "Custom search engine prototype.",
      fullDescription: "Implements crawling, inverted index, and ranking for educational purposes.",
      techStack: ["Python", "IR", "Algorithms"],
      githubUrl: "https://github.com/saiisback/search-engine",
      rating: 4.6,
      downloads: "3.5K",
      screenshots: ["/azizah.png"],
    },
    {
      id: "margros-portfolio",
      name: "Margros Portfolio",
      tagline: "Brand website for Margros",
      category: "Web Apps",
      iconComponent: Briefcase,
      featureImage: "/margros.png",
      description: "Marketing/portfolio site for Margros.",
      fullDescription: "A fast, SEO-friendly portfolio site with elegant visuals.",
      techStack: ["Next.js", "Tailwind"],
      githubUrl: "https://github.com/saiisback/margros-portfolio",
      rating: 4.5,
      downloads: "980",
      screenshots: ["/margros.png"],
    },
    {
      id: "resumatch",
      name: "ResuMatch",
      tagline: "Smart job search companion",
      category: "Web Apps",
      iconComponent: Store,
      featureImage: "/resumatch.png",
      description: "A web app that streamlines job applications.",
      fullDescription: "ResuMatch helps candidates find roles, track applications, and optimize resumes. Built with a focus on productivity.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL"],
      demoUrl: "https://resumatch.io",
      rating: 4.7,
      downloads: "6.4K",
      screenshots: ["/resumatch.png"],
    },
    {
      id: "resumatch-extension",
      name: "ResuMatch Auto Apply (Extension)",
      tagline: "Auto-apply, screenshots, and streamlined workflow",
      category: "Chrome Extensions",
      iconComponent: Chrome,
      featureImage: "/resumatch.png",
      description: "Automates job applications and captures screenshots in one flow.",
      fullDescription: "A productivity Chrome extension for ResuMatch that automates repetitive steps, captures proofs via screenshots, and streamlines application submissions.",
      techStack: ["JavaScript", "Chrome APIs", "TypeScript"],
      rating: 4.8,
      downloads: "12K",
      screenshots: ["/placeholder.svg?height=400&width=600"],
    },
    {
      id: "animecanvas",
      name: "AnimeCanvas",
      tagline: "A creative anime art platform",
      category: "Web Apps",
      iconComponent: Palette,
      featureImage: "/animecanavs.png",
      description: "Create and explore anime-styled content.",
      fullDescription: "A playful web app for anime-themed content and community.",
      techStack: ["Next.js", "TypeScript"],
      demoUrl: "https://animecanvas.in",
      rating: 4.5,
      downloads: "5.2K",
      screenshots: ["/animecanavs.png"],
    },
    {
      id: "handwriting-gen",
      name: "Handwriting Generator",
      tagline: "Generate realistic handwriting",
      category: "AI/ML",
      iconComponent: PenTool,
      featureImage: "/hand.png",
      description: "Synthesizes handwriting-like output.",
      fullDescription: "An ML-powered project to generate handwriting styles for documents.",
      techStack: ["Python", "Deep Learning"],
      githubUrl: "https://github.com/saiisback/handwriting-gen",
      rating: 4.4,
      downloads: "1.6K",
      screenshots: ["/hand.png"],
    },
    {
      id: "iphone-website",
      name: "iPhone Website",
      tagline: "Slick, device-inspired landing site",
      category: "Web Apps",
      iconComponent: Smartphone,
      featureImage: "/iphone.png",
      description: "A polished iPhone-themed landing page.",
      fullDescription: "Interactive product-style website inspired by Apple aesthetics.",
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
      githubUrl: "https://github.com/saiisback/iphone-website",
      rating: 4.9,
      downloads: "9.1K",
      screenshots: ["/iphone.png"],
    },
    {
      id: "margros-pos-system",
      name: "Margros POS System",
      tagline: "Point-of-sale under Margros",
      category: "SaaS Platforms",
      iconComponent: Briefcase,
      featureImage: "/pos.png",
      description: "Retail POS with inventory and billing.",
      fullDescription: "A robust POS application for Margros with inventory, billing, and reporting modules.",
      techStack: ["Next.js", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/Margroms/margros-pos-system",
      rating: 4.6,
      downloads: "2.3K",
      screenshots: ["/pos.png"],
    },
  ]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handleBackClick = () => {
    setSelectedProject(null)
  }

  return (
    <div className="h-full bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl flex flex-col">
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectDetailView key="detail" project={selectedProject} onBack={handleBackClick} />
        ) : (
          <ProjectGridView
            key="grid"
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

function ProjectGridView({
  categories,
  selectedCategory,
  onCategoryChange,
  projects,
  onProjectClick,
}: {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  projects: Project[]
  onProjectClick: (project: Project) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-200/60 dark:border-gray-800/60">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Projects</h1>

        {/* Category Tabs */}
        <div className="flex space-x-1 bg-white/60 dark:bg-gray-900/60 backdrop-blur rounded-lg p-1 border border-gray-200/50 dark:border-gray-800/50">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-white/90 dark:bg-gray-800/90 text-blue-600 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="flex-1 overflow-y-auto p-6 min-h-0 pb-10">
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/60 dark:bg-gray-900/60 backdrop-blur rounded-xl border border-gray-200/60 dark:border-gray-800/60 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => onProjectClick(project)}
            >
              {/* Feature Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-50/70 to-purple-50/70 dark:from-gray-800/70 dark:to-gray-700/70 relative overflow-hidden">
                <img
                  src={project.featureImage || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                {/* Quick actions */}
                <div className="absolute top-2 right-2 flex items-center gap-2">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200/60 dark:border-gray-800/60 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                      aria-label={`Open ${project.name} live`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200/60 dark:border-gray-800/60 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                      aria-label={`Open ${project.name} code`}
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start space-x-3">
                  {project.iconComponent ? (
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                      {project.iconComponent && (
                        <project.iconComponent className="text-blue-600 dark:text-blue-300" size={22} />
                      )}
                    </div>
                  ) : (
                    <img src={project.icon || "/placeholder.svg"} alt={`${project.name} icon`} className="w-12 h-12 rounded-xl" />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{project.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.tagline}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{project.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download size={14} className="text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{project.downloads}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectDetailView({
  project,
  onBack,
}: {
  project: Project
  onBack: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-200/60 dark:border-gray-800/60">
        <div className="flex items-center space-x-4 mb-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors">
            <ArrowLeft size={20} />
          </button>
          {project.iconComponent ? (
            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
              {project.iconComponent && <project.iconComponent className="text-blue-600 dark:text-blue-300" size={28} />}
            </div>
          ) : (
            <img src={project.icon || "/placeholder.svg"} alt={`${project.name} icon`} className="w-16 h-16 rounded-xl" />
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{project.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">{project.tagline}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
              <span>View Code</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl">
          {/* Description */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">About</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.fullDescription}</p>
          </section>

          {/* Tech Stack */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section>
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">Screenshots</h2>
            <div className="grid grid-cols-1 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  className="aspect-video bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={screenshot || "/placeholder.svg"}
                    alt={`${project.name} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  )
}
