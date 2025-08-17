"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import dynamic from 'next/dynamic'
import MenuBar from "@/components/desktop/menu-bar"
import Desktop from "@/components/desktop/desktop"
import { WindowManagerProvider } from "@/components/desktop/window-manager"

const Dock = dynamic(() => import('@/components/desktop/dock'), { ssr: false })

export default function MacOSPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <WindowManagerProvider>
      <div className="h-screen w-screen overflow-hidden bg-black relative">
        {/* Dynamic Wallpaper with Parallax */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
          style={{
            backgroundImage: `url('/bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            x: (mousePosition.x - 50) * 0.02,
            y: (mousePosition.y - 50) * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />

        {/* Menu Bar */}
        <MenuBar />

        {/* Desktop Area */}
        <Desktop />

        {/* Dock */}
        <Dock />
      </div>
    </WindowManagerProvider>
  )
}
