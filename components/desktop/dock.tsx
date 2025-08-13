"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useWindowManager } from "./window-manager"
import FinderApp from "../apps/finder"
import AppStoreApp from "../apps/app-store"
import MessagesApp from "../apps/messages"
import CalendarApp from "../apps/calendar"
import TerminalApp from "../apps/terminal"

interface DockApp {
  id: string
  name: string
  icon: string
  component?: React.ComponentType
}

export default function Dock() {
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)
  const { windows, openWindow } = useWindowManager()

  const apps: DockApp[] = [
    { id: "finder", name: "Finder", icon: "/finder.png", component: FinderApp },
    { id: "app-store", name: "App Store", icon: "/appstore.png", component: AppStoreApp },
    { id: "messages", name: "Messages", icon: "/imessages.png", component: MessagesApp },
    { id: "calendar", name: "Calendar", icon: "/calender.png", component: CalendarApp },
    { id: "terminal", name: "Terminal", icon: "/terminal.png", component: TerminalApp },
    { id: "notes", name: "Notes", icon: "/notes.png" },
  ]

  const handleAppClick = (app: DockApp) => {
    const centerX = Math.max(50, (window.innerWidth - 900) / 2)
    const centerY = Math.max(50, (window.innerHeight - 650) / 2)

    // Added Terminal app component integration
    const content = app.component ? (
      <app.component />
    ) : (
      <div className="p-6 h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{app.name}</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      </div>
    )

    openWindow({
      id: app.id,
      title: app.name,
      isMinimized: false,
      isMaximized: false,
      position: { x: centerX, y: centerY },
      size: { width: 900, height: 650 },
      content,
    })
  }

  const getOpenApps = () => {
    return new Set(windows.filter((w) => !w.isMinimized).map((w) => w.id))
  }

  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-40">
      <motion.div
        className="flex items-end bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        {apps.map((app, index) => {
          const isHovered = hoveredApp === app.id
          const isActive = getOpenApps().has(app.id)

          return (
            <div key={app.id} className="relative flex flex-col items-center">
              {/* App Icon */}
              <motion.button
                className="relative p-2 rounded-xl transition-all duration-200 ease-out"
                whileHover={{
                  scale: 1.3,
                  y: -12,
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: isActive ? -3 : 0,
                }}
                onMouseEnter={() => setHoveredApp(app.id)}
                onMouseLeave={() => setHoveredApp(null)}
                onClick={() => handleAppClick(app)}
              >
                <img 
                  src={app.icon}
                  alt={app.name}
                  className="w-16 h-16 object-cover rounded-xl drop-shadow-lg"
                  style={{ aspectRatio: '1/1' }}
                />

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                )}
              </motion.button>

              {/* Tooltip */}
              {isHovered && (
                <motion.div
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {app.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900/90"></div>
                </motion.div>
              )}
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
