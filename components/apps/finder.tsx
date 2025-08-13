"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Folder, FileText, User, Code, Download, ChevronRight, Star, HardDrive } from "lucide-react"

interface FinderItem {
  id: string
  name: string
  type: "folder" | "file"
  icon: React.ComponentType<{ size?: number; className?: string }>
  content?: React.ReactNode
  downloadUrl?: string
}

interface SidebarItem {
  id: string
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  items?: FinderItem[]
}

export default function FinderApp() {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState("favorites")
  const [selectedItem, setSelectedItem] = useState<FinderItem | null>(null)
  const [viewMode, setViewMode] = useState<"list" | "icon">("list")

  const skills = [
    { name: "Next.js", level: 95, years: 3, icon: "⚛️" },
    { name: "Python", level: 90, years: 4, icon: "🐍" },
    { name: "PyTorch", level: 85, years: 2, icon: "🔥" },
    { name: "TypeScript", level: 88, years: 3, icon: "📘" },
    { name: "LangChain", level: 80, years: 1, icon: "🔗" },
    { name: "PostgreSQL", level: 85, years: 3, icon: "🐘" },
    { name: "Docker", level: 82, years: 2, icon: "🐳" },
    { name: "AWS", level: 78, years: 2, icon: "☁️" },
  ]

  const bioContent = (
    <div className="p-6 max-w-2xl">
      <div className="prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">About Sai Karthik Ketha</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          I'm a passionate AI/ML and Full-Stack Engineer with a strong focus on building complete, thoughtful, and
          high-quality products. My expertise spans from developing sophisticated machine learning models to creating
          seamless user experiences.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          With experience in both startup environments and enterprise solutions, I bring a product-minded approach to
          engineering. I believe in writing clean, maintainable code and creating solutions that not only work but
          delight users.
        </p>
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Key Achievements</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Winner of Smart India Hackathon with an innovative AI solution</li>
          <li>Led development of real-time recommendation engine with 15% engagement increase</li>
          <li>Built production-level SaaS platforms serving thousands of users</li>
          <li>Developed Chrome extensions with 10K+ active users</li>
        </ul>
        <h3 className="text-lg font-semibold mb-3 mt-6 text-gray-800">Philosophy</h3>
        <p className="text-gray-700 leading-relaxed">
          I believe in the power of technology to solve real-world problems. Every line of code I write is guided by the
          principle of creating value for users while maintaining technical excellence and scalability.
        </p>
      </div>
    </div>
  )

  const skillsContent = (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Technical Skills</h2>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                <span className="text-lg">{skill.icon}</span>
              </div>
              <div>
                <div className="font-medium text-gray-800">{skill.name}</div>
                <div className="text-sm text-gray-500">{skill.years} years experience</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                />
              </div>
              <span className="text-sm font-medium text-gray-600 w-8">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const resumeContent = (
    <div className="p-6 flex flex-col items-center justify-center h-full">
      <div className="text-center">
        <FileText size={64} className="text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2 text-gray-800">Resume.pdf</h3>
        <p className="text-gray-600 mb-6">Click to download my latest resume</p>
        <motion.button
          className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // Create a dummy PDF download
            const link = document.createElement("a")
            link.href = "/placeholder.svg?height=800&width=600"
            link.download = "Sai_Karthik_Ketha_Resume.pdf"
            link.click()
          }}
        >
          <Download size={20} />
          <span>Download Resume</span>
        </motion.button>
      </div>
    </div>
  )

  const sidebarItems: SidebarItem[] = [
    {
      id: "favorites",
      name: "Favorites",
      icon: Star,
      items: [
        { id: "bio", name: "Bio", type: "folder", icon: User, content: bioContent },
        { id: "skills", name: "Skills", type: "folder", icon: Code, content: skillsContent },
        { id: "resume", name: "Resume.pdf", type: "file", icon: FileText, content: resumeContent },
      ],
    },
    {
      id: "locations",
      name: "Locations",
      icon: HardDrive,
      items: [
        { id: "desktop", name: "Desktop", type: "folder", icon: Folder },
        { id: "documents", name: "Documents", type: "folder", icon: Folder },
        { id: "downloads", name: "Downloads", type: "folder", icon: Folder },
      ],
    },
  ]

  const currentItems = sidebarItems.find((item) => item.id === selectedSidebarItem)?.items || []

  return (
    <div className="flex h-full bg-white">
      {/* Sidebar */}
      <div className="w-48 bg-gray-50 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-800 text-sm">SIDEBAR</h3>
        </div>

        <div className="flex-1 overflow-y-auto">
          {sidebarItems.map((section) => (
            <div key={section.id} className="mb-4">
              <button
                className={`w-full flex items-center space-x-2 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                  selectedSidebarItem === section.id ? "bg-blue-100 text-blue-700" : "text-gray-700"
                }`}
                onClick={() => {
                  setSelectedSidebarItem(section.id)
                  setSelectedItem(null)
                }}
              >
                <section.icon size={16} />
                <span className="text-sm font-medium">{section.name}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="h-12 bg-gray-100 border-b border-gray-200 flex items-center px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Folder size={16} />
            <span>Sai Karthik Ketha</span>
            {selectedItem && (
              <>
                <ChevronRight size={14} />
                <span>{selectedItem.name}</span>
              </>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {selectedItem ? (
            <div className="h-full p-4">
              <div className="max-h-full overflow-y-auto">
                {selectedItem.content}
              </div>
            </div>
          ) : (
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4">
                {currentItems.map((item) => (
                  <motion.button
                    key={item.id}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedItem(item)}
                  >
                    <item.icon size={48} className="text-blue-500 mb-2" />
                    <span className="text-sm font-medium text-gray-800 text-center">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
