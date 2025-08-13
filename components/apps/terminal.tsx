"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TerminalLine {
  id: string
  type: "command" | "output" | "input"
  content: string
  timestamp: Date
}

interface ContactForm {
  step: "email" | "name" | "message" | "complete"
  email: string
  name: string
  message: string
}

export default function TerminalApp() {
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [contactForm, setContactForm] = useState<ContactForm | null>(null)
  const [isBlinking, setIsBlinking] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const prompt = "SaiKarthikKetha@portfolio:~$"

  // Focus input on mount and keep it focused
  useEffect(() => {
    inputRef.current?.focus()
    const handleClick = () => inputRef.current?.focus()
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  // Scroll to bottom when new lines are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Welcome message on mount
  useEffect(() => {
    addLine("output", "Welcome to Sai Karthik's Portfolio Terminal!")
    addLine("output", "Type 'help' to see available commands.")
    addLine("output", "")
  }, [])

  const addLine = (type: TerminalLine["type"], content: string) => {
    const newLine: TerminalLine = {
      id: Date.now().toString() + Math.random(),
      type,
      content,
      timestamp: new Date(),
    }
    setLines((prev) => [...prev, newLine])
  }

  const clearTerminal = () => {
    setLines([])
  }

  const executeCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase()

    // Add command to history
    if (trimmedCommand && !commandHistory.includes(trimmedCommand)) {
      setCommandHistory((prev) => [...prev, trimmedCommand])
    }

    // Add command line to terminal
    addLine("command", `${prompt} ${command}`)

    // Handle contact form flow
    if (contactForm) {
      handleContactFormInput(command)
      return
    }

    // Execute commands
    switch (trimmedCommand) {
      case "help":
        addLine("output", "Available commands:")
        addLine("output", "  help      - Show this help message")
        addLine("output", "  contact   - Start contact form")
        addLine("output", "  socials   - Show social media links")
        addLine("output", "  about     - Show brief about information")
        addLine("output", "  skills    - List technical skills")
        addLine("output", "  clear     - Clear the terminal")
        addLine("output", "  whoami    - Display user information")
        addLine("output", "  date      - Show current date and time")
        addLine("output", "")
        break

      case "contact":
        addLine("output", "📧 Contact Form")
        addLine("output", "Let's get in touch! I'll need a few details.")
        addLine("output", "")
        setContactForm({ step: "email", email: "", name: "", message: "" })
        addLine("input", "Enter your email address:")
        break

      case "socials":
        addLine("output", "🔗 Social Media & Links")
        addLine("output", "")
        addLine("output", "  ╭─────────────────────────────────────╮")
        addLine("output", "  │  GitHub    │ github.com/saikarthik  │")
        addLine("output", "  │  LinkedIn  │ linkedin.com/in/sai-k  │")
        addLine("output", "  │  Twitter   │ twitter.com/saikarthik │")
        addLine("output", "  │  Email     │ hello@saikarthik.dev   │")
        addLine("output", "  │  Website   │ saikarthik.dev         │")
        addLine("output", "  ╰─────────────────────────────────────╯")
        addLine("output", "")
        break

      case "about":
        addLine("output", "👨‍💻 About Sai Karthik Ketha")
        addLine("output", "")
        addLine("output", "AI/ML & Full-Stack Engineer passionate about building")
        addLine("output", "complete, thoughtful, and high-quality products.")
        addLine("output", "")
        addLine("output", "Currently: AI Engineer at QuantumLeap AI")
        addLine("output", "Education: B.Tech Computer Science, IIT Mumbai")
        addLine("output", "Achievement: Winner, Smart India Hackathon 2023")
        addLine("output", "")
        break

      case "skills":
        addLine("output", "🛠️  Technical Skills")
        addLine("output", "")
        addLine("output", "Languages:    Python, TypeScript, JavaScript, Java")
        addLine("output", "Frontend:     React, Next.js, Tailwind CSS")
        addLine("output", "Backend:      Node.js, FastAPI, Flask")
        addLine("output", "AI/ML:        PyTorch, TensorFlow, Hugging Face")
        addLine("output", "Databases:    PostgreSQL, MongoDB, Redis")
        addLine("output", "Cloud:        AWS, Google Cloud, Vercel")
        addLine("output", "Tools:        Docker, Git, Kubernetes")
        addLine("output", "")
        break

      case "clear":
        clearTerminal()
        break

      case "whoami":
        addLine("output", "saikarthik")
        addLine("output", "AI/ML Engineer | Full-Stack Developer | Product Builder")
        addLine("output", "")
        break

      case "date":
        addLine("output", new Date().toString())
        addLine("output", "")
        break

      case "":
        // Empty command, just add a new prompt
        break

      default:
        addLine("output", `Command not found: ${command}`)
        addLine("output", "Type 'help' to see available commands.")
        addLine("output", "")
        break
    }
  }

  const handleContactFormInput = (input: string) => {
    if (!contactForm) return

    const trimmedInput = input.trim()

    switch (contactForm.step) {
      case "email":
        if (trimmedInput && trimmedInput.includes("@")) {
          setContactForm({ ...contactForm, email: trimmedInput, step: "name" })
          addLine("output", `Email: ${trimmedInput}`)
          addLine("input", "Enter your name:")
        } else {
          addLine("output", "Please enter a valid email address:")
        }
        break

      case "name":
        if (trimmedInput) {
          setContactForm({ ...contactForm, name: trimmedInput, step: "message" })
          addLine("output", `Name: ${trimmedInput}`)
          addLine("input", "Enter your message:")
        } else {
          addLine("output", "Please enter your name:")
        }
        break

      case "message":
        if (trimmedInput) {
          setContactForm({ ...contactForm, message: trimmedInput, step: "complete" })
          addLine("output", `Message: ${trimmedInput}`)
          addLine("output", "")
          addLine("output", "✅ Thank you for your message!")
          addLine("output", "I'll get back to you as soon as possible.")
          addLine("output", "")
          addLine("output", "Contact details saved:")
          addLine("output", `  Email: ${contactForm.email}`)
          addLine("output", `  Name: ${contactForm.name}`)
          addLine("output", `  Message: ${trimmedInput}`)
          addLine("output", "")
          setContactForm(null)
        } else {
          addLine("output", "Please enter your message:")
        }
        break
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(currentInput)
      setCurrentInput("")
      setHistoryIndex(-1)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCurrentInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1)
        if (newIndex === commandHistory.length - 1 && historyIndex === commandHistory.length - 1) {
          setHistoryIndex(-1)
          setCurrentInput("")
        } else {
          setHistoryIndex(newIndex)
          setCurrentInput(commandHistory[newIndex])
        }
      }
    }
  }

  return (
    <div
      ref={terminalRef}
      className="h-full bg-black text-green-400 font-mono text-sm p-4 overflow-y-auto cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="space-y-1">
        <AnimatePresence>
          {lines.map((line) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${
                line.type === "command" ? "text-white" : line.type === "input" ? "text-yellow-400" : "text-green-400"
              }`}
            >
              {line.content}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Current input line */}
        <div className="flex items-center text-white">
          <span className="text-green-400">{contactForm ? ">" : prompt}</span>
          <span className="ml-1">{currentInput}</span>
          <span className={`ml-0.5 ${isBlinking ? "opacity-100" : "opacity-0"}`}>█</span>
        </div>

        {/* Hidden input for capturing keystrokes */}
        <input
          ref={inputRef}
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="absolute opacity-0 pointer-events-none"
          autoComplete="off"
        />
      </div>
    </div>
  )
}
