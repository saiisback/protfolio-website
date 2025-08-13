"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export interface WindowState {
  id: string
  title: string
  isMinimized: boolean
  isMaximized: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
  zIndex: number
  content: ReactNode
}

interface WindowManagerContextType {
  windows: WindowState[]
  openWindow: (window: Omit<WindowState, "zIndex">) => void
  closeWindow: (id: string) => void
  minimizeWindow: (id: string) => void
  maximizeWindow: (id: string) => void
  focusWindow: (id: string) => void
  updateWindowPosition: (id: string, position: { x: number; y: number }) => void
  updateWindowSize: (id: string, size: { width: number; height: number }) => void
}

const WindowManagerContext = createContext<WindowManagerContextType | null>(null)

export function useWindowManager() {
  const context = useContext(WindowManagerContext)
  if (!context) {
    throw new Error("useWindowManager must be used within WindowManagerProvider")
  }
  return context
}

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowState[]>([])
  const [nextZIndex, setNextZIndex] = useState(100)

  const openWindow = useCallback(
    (windowData: Omit<WindowState, "zIndex">) => {
      setWindows((prev) => {
        // Check if window is already open
        const existing = prev.find((w) => w.id === windowData.id)
        if (existing) {
          // Focus existing window
          return prev.map((w) => (w.id === windowData.id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w))
        }

        // Add new window
        return [...prev, { ...windowData, zIndex: nextZIndex }]
      })
      setNextZIndex((prev) => prev + 1)
    },
    [nextZIndex],
  )

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
  }, [])

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w)))
  }, [])

  const maximizeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? {
              ...w,
              isMaximized: !w.isMaximized,
              position: w.isMaximized ? w.position : { x: 0, y: 24 },
              size: w.isMaximized ? w.size : { width: window.innerWidth, height: window.innerHeight - 24 - 80 },
            }
          : w,
      ),
    )
  }, [])

  const focusWindow = useCallback(
    (id: string) => {
      setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w)))
      setNextZIndex((prev) => prev + 1)
    },
    [nextZIndex],
  )

  const updateWindowPosition = useCallback((id: string, position: { x: number; y: number }) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, position } : w)))
  }, [])

  const updateWindowSize = useCallback((id: string, size: { width: number; height: number }) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, size } : w)))
  }, [])

  return (
    <WindowManagerContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
        updateWindowPosition,
        updateWindowSize,
      }}
    >
      {children}
    </WindowManagerContext.Provider>
  )
}
