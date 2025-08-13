"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Apple, Wifi, Battery, Search } from "lucide-react"

export default function MenuBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Update time every second
  useState(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  })

  const menuItems = [
    { id: "apple", label: "", icon: Apple },
    { id: "file", label: "File" },
    { id: "edit", label: "Edit" },
    { id: "view", label: "View" },
    { id: "window", label: "Window" },
    { id: "help", label: "Help" },
  ]

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="fixed top-0 left-0 right-0 h-6 bg-black/20 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-4 text-white text-sm font-medium">
      {/* Left Side - Menu Items */}
      <div className="flex items-center space-x-4">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            className="flex items-center space-x-1 px-2 py-1 rounded hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setActiveMenu(item.id)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {item.icon && <item.icon size={14} />}
            {item.label && <span>{item.label}</span>}
          </motion.button>
        ))}
      </div>

      {/* Right Side - System Indicators */}
      <div className="flex items-center space-x-3">
        <motion.button
          className="p-1 rounded hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Search size={14} />
        </motion.button>

        <div className="flex items-center space-x-2">
          <Wifi size={14} />
          <Battery size={14} />
          <span className="font-mono text-xs">{formatTime(currentTime)}</span>
        </div>
      </div>

      {/* Dropdown Menus */}
      <AnimatePresence>
        {activeMenu === "apple" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-6 left-4 bg-gray-800/90 backdrop-blur-md rounded-lg border border-white/20 py-2 min-w-48"
          >
            <div className="px-4 py-2 hover:bg-white/10 cursor-pointer">About This Site</div>
            <div className="border-t border-white/10 my-1"></div>
            <div className="px-4 py-2 hover:bg-white/10 cursor-pointer">System Preferences...</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
