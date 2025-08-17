"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Phone, VideoIcon, Info, X } from "lucide-react"
import { useWindowManager } from "../desktop/window-manager"

interface Message {
  id: string
  text: string
  isFromMe: boolean
  timestamp: Date
  isTyping?: boolean
}

interface Contact {
  id: string
  name: string
  company: string
  avatar: string
  lastMessage: string
  timestamp: string
  isOnline: boolean
  messages: Omit<Message, "id">[]
}

export default function MessagesApp() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [displayedMessages, setDisplayedMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const timeoutsRef = useRef<number[]>([])
  const { closeWindow } = useWindowManager()

  const contacts: Contact[] = [
    {
      id: "mayank-lilani",
      name: "Mayank Lilani",
      company: "Marketing Head",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "I would rate your service 5/5⭐️.",
      timestamp: "2:34 PM",
      isOnline: true,
      messages: [
        {
          text: "Hi Mayank! Would love your feedback on our recent work together.",
          isFromMe: true,
          timestamp: new Date("2025-06-01T14:30:00"),
        },
        {
          text:
            "I would rate your service 5/5⭐️. You have done a fantastic job while doing my work, it was systematic and quick service by Sai Karthik. I expected that it would take more than a week but it took less than that, and I also liked the designs made by Sai Karthik. It was quite unique and user‑friendly designs.",
          isFromMe: false,
          timestamp: new Date("2025-06-01T14:32:00"),
        },
      ],
    },
    {
      id: "akash-sarangi",
      name: "Akash Sarangi",
      company: "Head of the Tech Team",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Highly skilled frontend developer",
      timestamp: "Yesterday",
      isOnline: false,
      messages: [
        {
          text: "Akash, how was your experience working with me?",
          isFromMe: true,
          timestamp: new Date("2025-05-20T16:20:00"),
        },
        {
          text:
            "Sai is a highly skilled frontend developer with a strong portfolio that demonstrates his technical expertise, creativity, and dedication to delivering exceptional user experiences. He is well-equipped to take on challenging projects and make a meaningful impact in any development team.",
          isFromMe: false,
          timestamp: new Date("2025-05-20T16:25:00"),
        },
      ],
    },
    {
      id: "aditya-nair",
      name: "Aditya S Nair",
      company: "President, Atal Lab (DPSBN)",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Amazing work ethic and determination",
      timestamp: "Monday",
      isOnline: true,
      messages: [
        {
          text: "Aditya, could you share a testimonial about our collaboration?",
          isFromMe: true,
          timestamp: new Date("2025-05-10T10:15:00"),
        },
        {
          text:
            "Sai Karthik has a really amazing work ethic and determination. He stands out for being adaptable and productive, which makes him a great asset to any project. It's amazing how well he can handle several jobs at once and provide excellent outcomes. His persistent dedication and enthusiasm for perfection are absolutely admirable.",
          isFromMe: false,
          timestamp: new Date("2025-05-10T10:20:00"),
        },
      ],
    },
  ]

  // Auto-select first contact on mount
  useEffect(() => {
    if (contacts.length > 0 && !selectedContact) {
      setSelectedContact(contacts[0])
    }
  }, [selectedContact])

  // Animate messages when contact changes
  useEffect(() => {
    if (selectedContact) {
      setDisplayedMessages([])
      setIsTyping(false)

      // generate stable, unique ids using timestamp + sender
      const messages = selectedContact.messages.map((msg, index) => ({
        ...msg,
        id: `${selectedContact.id}-${msg.isFromMe ? "me" : "them"}-${msg.timestamp.getTime()}-${index}`,
      }))

      // Animate messages in sequence
      let currentIndex = 0
      const showNextMessage = () => {
        if (currentIndex < messages.length) {
          const currentMessage = messages[currentIndex]

          if (!currentMessage.isFromMe) {
            // Show typing indicator before client messages
            setIsTyping(true)
            const t1 = window.setTimeout(() => {
              setIsTyping(false)
              setDisplayedMessages((prev) => [...prev, currentMessage])
              currentIndex++
              const t2 = window.setTimeout(showNextMessage, 800)
              timeoutsRef.current.push(t2)
            }, 1500)
            timeoutsRef.current.push(t1)
          } else {
            // Show user messages immediately
            setDisplayedMessages((prev) => [...prev, currentMessage])
            currentIndex++
            const t3 = window.setTimeout(showNextMessage, 600)
            timeoutsRef.current.push(t3)
          }
        }
      }

      showNextMessage()
    }

    return () => {
      // Clear pending timers to avoid duplicate message appends
      timeoutsRef.current.forEach((t) => clearTimeout(t))
      timeoutsRef.current = []
    }
  }, [selectedContact])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [displayedMessages, isTyping])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="flex h-full bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl">
      {/* Sidebar */}
      <div className="w-80 bg-white/60 dark:bg-gray-900/60 backdrop-blur border-r border-gray-200/60 dark:border-gray-800/60 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200/60 dark:border-gray-800/60">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Messages</h2>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors">
              <Search size={18} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <motion.button
              key={contact.id}
              className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors text-left ${
                selectedContact?.id === contact.id ? "bg-blue-100/70 dark:bg-blue-900/30" : ""
              }`}
              onClick={() => setSelectedContact(contact)}
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
              <div className="relative">
                <img src={contact.avatar || "/placeholder.svg"} alt={contact.name} className="w-12 h-12 rounded-full" />
                {contact.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">{contact.name}</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{contact.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{contact.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-1">{contact.lastMessage}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedContact ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200/60 dark:border-gray-800/60 flex items-center justify-between bg-white/60 dark:bg-gray-900/60 backdrop-blur">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedContact.avatar || "/placeholder.svg"}
                  alt={selectedContact.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">{selectedContact.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{selectedContact.company}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors">
                  <Phone size={18} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors">
                  <VideoIcon size={18} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors">
                  <Info size={18} className="text-gray-500" />
                </button>
                <button
                  aria-label="Close Messages app"
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
                  onClick={() => closeWindow("messages")}
                >
                  <X size={18} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 bg-transparent">
              <AnimatePresence>
                {displayedMessages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.isFromMe ? "justify-end" : "justify-start"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.isFromMe
                          ? "bg-blue-500 text-white rounded-br-md"
                          : "bg-gray-200/80 dark:bg-gray-800/80 text-gray-900 dark:text-gray-100 rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isFromMe ? "text-blue-100" : "text-gray-500 dark:text-gray-400"}`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="bg-gray-200/80 dark:bg-gray-800/80 px-4 py-2 rounded-2xl rounded-bl-md">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">Select a conversation</h3>
              <p className="text-gray-500 dark:text-gray-400">Choose a client to view testimonials</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
