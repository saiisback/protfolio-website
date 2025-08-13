"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useWindowManager } from "./window-manager"
import Window from "./window"
import { useState, useEffect } from "react"

function DesktopContent() {
  const { windows } = useWindowManager()
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 pt-6 pb-20">
      {/* Desktop content area */}
      <div className="w-full h-full relative">
        {/* Photo Widget */}
        <motion.div
          className="absolute top-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-1 border border-white/20 shadow-2xl"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="text-center">
            <div className="w-50 h-50 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 mx-auto  flex items-center justify-center overflow-hidden">
              <img
                src="/sai.jpg"
                alt="Sai Karthik Ketha"
                className="w-full h-full object-cover"
              />
            </div>
           
          </div>
        </motion.div>

        {/* Sticky Note */}
        <motion.div
          className="absolute top-8 left-8 bg-yellow-200 rounded-lg p-4 shadow-lg transform rotate-2"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileHover={{ rotate: 0, scale: 1.05 }}
          style={{ fontFamily: "Kalam, cursive" }}
        >
          <div className="w-65">
            <h4 className="text-gray-800 font-bold text-lg mb-2">📁 Finder: <span className="text-gray-700 text-sm">Bio, skills & resume.</span></h4>
            <h4 className="text-gray-800 font-bold text-lg mb-2">🛒 App Store: <span className="text-gray-700 text-sm">My projects & tech stack.</span></h4>
            <h4 className="text-gray-800 font-bold text-lg mb-2">💬 iMessage: <span className="text-gray-700 text-sm">Client reviews.</span></h4>
            <h4 className="text-gray-800 font-bold text-lg mb-2">📅 Calendar: <span className="text-gray-700 text-sm">Work experience.</span></h4>
            <div className="mt-2 text-xs text-gray-600">- Your friendly portfolio guide</div>
          </div>
        </motion.div>

      

     

        {/* Animated Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Welcome message with enhanced animations */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl font-bold text-white/90 mb-4 font-sans"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 30px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Sai Karthik Ketha
          </motion.h1>
          <motion.p
            className="text-xl text-white/70 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            AI/ML & Full-Stack Engineer
          </motion.p>
          <motion.p
            className="text-sm text-white/50 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            Click an app in the dock to explore my portfolio
          </motion.p>
        </motion.div>

        {/* Windows */}
        <AnimatePresence>
          {windows.map((window) => (
            <Window key={window.id} window={window} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Desktop() {
  return <DesktopContent />
}
