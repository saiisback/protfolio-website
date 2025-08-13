"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Star, Download } from "lucide-react"

interface Project {
  id: string
  name: string
  tagline: string
  category: string
  icon: string
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

  const categories = ["All", "AI/ML", "SaaS Platforms", "Chrome Extensions", "Web Apps"]

  const projects: Project[] = [
    {
      id: "insight-saas",
      name: "InsightSaaS",
      tagline: "AI-powered sentiment analysis for customer feedback",
      category: "SaaS Platforms",
      icon: "/placeholder.svg?height=120&width=120",
      featureImage: "/placeholder.svg?height=300&width=600",
      description: "Transform customer feedback into actionable insights with advanced AI",
      fullDescription:
        "A comprehensive SaaS platform that revolutionizes how businesses understand their customers. InsightSaaS uses cutting-edge Natural Language Processing models to perform sentiment analysis, topic modeling, and keyword extraction on customer reviews from Twitter, app stores, and other sources. The platform presents results through an intuitive, interactive dashboard that helps businesses make data-driven decisions.",
      techStack: [
        "Python",
        "FastAPI",
        "PyTorch",
        "Hugging Face",
        "Next.js",
        "TypeScript",
        "Chart.js",
        "PostgreSQL",
        "Docker",
        "AWS S3",
      ],
      demoUrl: "https://insight-saas-demo.com",
      githubUrl: "https://github.com/saikarthik/insight-saas",
      rating: 4.8,
      downloads: "2.5K",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: "tab-zen",
      name: "TabZen",
      tagline: "Your intelligent browser companion",
      category: "Chrome Extensions",
      icon: "/placeholder.svg?height=120&width=120",
      featureImage: "/placeholder.svg?height=300&width=600",
      description: "AI-powered tab management that learns your browsing habits",
      fullDescription:
        "TabZen is a production-level Chrome extension that revolutionizes browser tab management. Using a lightweight machine learning model, it learns your browsing patterns and automatically groups tabs by context, suggests optimal workspaces, and intelligently puts unused tabs to sleep to save memory. Perfect for power users and professionals who work with dozens of tabs daily.",
      techStack: ["JavaScript", "HTML/CSS", "Webpack", "TensorFlow.js", "Chrome APIs"],
      demoUrl: "https://chrome.google.com/webstore/detail/tabzen",
      githubUrl: "https://github.com/saikarthik/tabzen",
      rating: 4.6,
      downloads: "12K",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: "vision-craft",
      name: "VisionCraft API",
      tagline: "High-accuracy, self-hosted object detection",
      category: "AI/ML",
      icon: "/placeholder.svg?height=120&width=120",
      featureImage: "/placeholder.svg?height=300&width=600",
      description: "Enterprise-grade object detection API with custom YOLO models",
      fullDescription:
        "VisionCraft API is a containerized, production-ready object detection service built with OpenCV and custom-trained YOLO models. It provides high-accuracy endpoints for developers to send images and receive detailed object detection data. Designed specifically for e-commerce inventory management and content moderation, it offers superior accuracy and can be self-hosted for maximum security and control.",
      techStack: ["Python", "Flask", "OpenCV", "PyTorch", "YOLO", "Docker", "NGINX", "Redis"],
      demoUrl: "https://visioncraft-api-demo.com",
      githubUrl: "https://github.com/saikarthik/visioncraft-api",
      rating: 4.9,
      downloads: "850",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: "portfolio-site",
      name: "Interactive Portfolio",
      tagline: "macOS-inspired portfolio experience",
      category: "Web Apps",
      icon: "/placeholder.svg?height=120&width=120",
      featureImage: "/placeholder.svg?height=300&width=600",
      description: "Fully interactive macOS desktop portfolio with advanced animations",
      fullDescription:
        "This very portfolio you're experiencing! A pixel-perfect recreation of the macOS desktop environment built with Next.js and Framer Motion. Features draggable windows, authentic dock interactions, and immersive animations that create a truly memorable user experience. Every detail has been crafted to showcase technical excellence and creative vision.",
      techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "React"],
      demoUrl: "https://saikarthik.dev",
      githubUrl: "https://github.com/saikarthik/macos-portfolio",
      rating: 5.0,
      downloads: "1.2K",
      screenshots: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
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
    <div className="h-full bg-white flex flex-col">
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
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Projects</h1>

        {/* Category Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="flex-1 overflow-y-auto p-6 min-h-0">
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => onProjectClick(project)}
            >
              {/* Feature Image */}
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
                <img
                  src={project.featureImage || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start space-x-3">
                  <img
                    src={project.icon || "/placeholder.svg"}
                    alt={`${project.name} icon`}
                    className="w-12 h-12 rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{project.tagline}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{project.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download size={14} className="text-gray-400" />
                        <span className="text-sm text-gray-600">{project.downloads}</span>
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
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft size={20} />
          </button>
          <img src={project.icon || "/placeholder.svg"} alt={`${project.name} icon`} className="w-16 h-16 rounded-xl" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
            <p className="text-gray-600">{project.tagline}</p>
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
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
          </section>

          {/* Tech Stack */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  className="aspect-video bg-gray-100 rounded-lg overflow-hidden"
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
