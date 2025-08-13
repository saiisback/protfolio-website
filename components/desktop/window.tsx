"use client"

import { useState, useRef } from "react"
import { motion, type PanInfo } from "framer-motion"
import { Minus, Square, X } from "lucide-react"
import { useWindowManager, type WindowState } from "./window-manager"

interface WindowProps {
  window: WindowState
}

export default function Window({ window }: WindowProps) {
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow, updateWindowPosition, updateWindowSize } =
    useWindowManager()

  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const windowRef = useRef<HTMLDivElement>(null)

  const handleDragStart = () => {
    setIsDragging(true)
    focusWindow(window.id)
  }

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false)
    const newX = Math.max(0, Math.min(window.position.x + info.offset.x, (globalThis.window?.innerWidth || 1200) - window.size.width))
    const newY = Math.max(24, Math.min(window.position.y + info.offset.y, (globalThis.window?.innerHeight || 800) - window.size.height))
    updateWindowPosition(window.id, { x: newX, y: newY })
  }

  const handleMinimize = () => {
    minimizeWindow(window.id)
  }

  const handleMaximize = () => {
    maximizeWindow(window.id)
  }

  const handleClose = () => {
    closeWindow(window.id)
  }

  if (window.isMinimized) {
    return null
  }

  return (
    <motion.div
      ref={windowRef}
      className="absolute bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-gray-200/50 overflow-hidden"
      style={{
        left: window.position.x,
        top: window.position.y,
        width: window.size.width,
        height: window.size.height,
        zIndex: window.zIndex,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{
        scale: 0.8,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={{
        left: 0,
        right: (globalThis.window?.innerWidth || 1200) - window.size.width,
        top: 24,
        bottom: (globalThis.window?.innerHeight || 800) - window.size.height - 80,
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onMouseDown={() => focusWindow(window.id)}
      whileDrag={{
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* Window Title Bar */}
      <div className="flex items-center justify-between h-8 bg-gray-100/80 border-b border-gray-200/50 px-4 cursor-move">
        {/* Traffic Light Controls */}
        <div className="flex items-center space-x-2">
          <motion.button
            className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClose}
          >
            <X size={8} className="text-red-800 opacity-0 hover:opacity-100 transition-opacity" />
          </motion.button>

          <motion.button
            className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleMinimize}
          >
            <Minus size={8} className="text-yellow-800 opacity-0 hover:opacity-100 transition-opacity" />
          </motion.button>

          <motion.button
            className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleMaximize}
          >
            <Square size={6} className="text-green-800 opacity-0 hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>

        {/* Window Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700 pointer-events-none">
          {window.title}
        </div>

        {/* Empty space for balance */}
        <div className="w-16"></div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto h-full">{window.content}</div>

      {/* Resize Handle */}
      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize opacity-0 hover:opacity-100 transition-opacity"
        onMouseDown={(e) => {
          e.preventDefault()
          setIsResizing(true)

          const startX = e.clientX
          const startY = e.clientY
          const startWidth = window.size.width
          const startHeight = window.size.height

          const handleMouseMove = (e: MouseEvent) => {
            const newWidth = Math.max(300, startWidth + (e.clientX - startX))
            const newHeight = Math.max(200, startHeight + (e.clientY - startY))
            updateWindowSize(window.id, { width: newWidth, height: newHeight })
          }

          const handleMouseUp = () => {
            setIsResizing(false)
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
          }

          document.addEventListener("mousemove", handleMouseMove)
          document.addEventListener("mouseup", handleMouseUp)
        }}
      >
        <div className="w-full h-full bg-gray-400/50 rounded-tl-lg"></div>
      </div>
    </motion.div>
  )
}
