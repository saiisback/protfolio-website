"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Phone, VideoIcon, Info } from "lucide-react"

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

  const contacts: Contact[] = [
    {
      id: "sarah-tech",
      name: "Sarah Chen",
      company: "TechFlow Inc",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "The AI integration exceeded our expectations!",
      timestamp: "2:34 PM",
      isOnline: true,
      messages: [
        {
          text: "Hi Sarah! How was your experience working with me on the TechFlow project?",
          isFromMe: true,
          timestamp: new Date("2024-01-15T14:30:00"),
        },
        {
          text: "Sai, working with you was absolutely fantastic! The AI integration you built for our customer service platform exceeded all our expectations.",
          isFromMe: false,
          timestamp: new Date("2024-01-15T14:32:00"),
        },
        {
          text: "Your attention to detail and ability to translate complex requirements into elegant solutions really impressed our entire team.",
          isFromMe: false,
          timestamp: new Date("2024-01-15T14:32:30"),
        },
        {
          text: "The sentiment analysis feature you implemented has improved our response time by 40% and customer satisfaction scores are through the roof!",
          isFromMe: false,
          timestamp: new Date("2024-01-15T14:34:00"),
        },
      ],
    },
    {
      id: "marcus-startup",
      name: "Marcus Rodriguez",
      company: "InnovateLab",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Best developer we've worked with!",
      timestamp: "Yesterday",
      isOnline: false,
      messages: [
        {
          text: "Marcus, I'd love to hear your thoughts on our collaboration for the InnovateLab platform!",
          isFromMe: true,
          timestamp: new Date("2024-01-14T16:20:00"),
        },
        {
          text: "Honestly, you're the best developer we've worked with. Period.",
          isFromMe: false,
          timestamp: new Date("2024-01-14T16:25:00"),
        },
        {
          text: "Your full-stack expertise saved us months of development time. The way you architected our SaaS platform was brilliant.",
          isFromMe: false,
          timestamp: new Date("2024-01-14T16:26:00"),
        },
        {
          text: "But what really stood out was your product thinking. You didn't just code what we asked for - you improved our ideas and suggested better solutions.",
          isFromMe: false,
          timestamp: new Date("2024-01-14T16:27:00"),
        },
        {
          text: "We're definitely working together again on our next project!",
          isFromMe: false,
          timestamp: new Date("2024-01-14T16:28:00"),
        },
      ],
    },
    {
      id: "emily-enterprise",
      name: "Emily Watson",
      company: "DataCorp Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Delivered beyond expectations",
      timestamp: "Monday",
      isOnline: true,
      messages: [
        {
          text: "Emily, how did you find working with me on the DataCorp analytics dashboard?",
          isFromMe: true,
          timestamp: new Date("2024-01-12T10:15:00"),
        },
        {
          text: "Sai, you delivered way beyond our expectations! The machine learning models you integrated have transformed how we analyze customer data.",
          isFromMe: false,
          timestamp: new Date("2024-01-12T10:20:00"),
        },
        {
          text: "Your code quality is exceptional - clean, well-documented, and scalable. Our engineering team was impressed with the architecture.",
          isFromMe: false,
          timestamp: new Date("2024-01-12T10:21:00"),
        },
        {
          text: "The real-time dashboard you built processes millions of data points seamlessly. It's exactly what we needed for our enterprise clients.",
          isFromMe: false,
          timestamp: new Date("2024-01-12T10:23:00"),
        },
      ],
    },
    {
      id: "alex-creative",
      name: "Alex Thompson",
      company: "Creative Studios",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Amazing attention to detail!",
      timestamp: "Last week",
      isOnline: false,
      messages: [
        {
          text: "Alex, what was your experience like working with me on the Creative Studios website?",
          isFromMe: true,
          timestamp: new Date("2024-01-08T15:45:00"),
        },
        {
          text: "Your attention to detail is incredible! Every animation, every interaction was perfectly crafted.",
          isFromMe: false,
          timestamp: new Date("2024-01-08T15:50:00"),
        },
        {
          text: "The way you brought our design vision to life with those smooth animations and micro-interactions... our clients are blown away!",
          isFromMe: false,
          timestamp: new Date("2024-01-08T15:51:00"),
        },
        {
          text: "You didn't just build a website - you created an experience. The performance is lightning fast too, even with all those animations.",
          isFromMe: false,
          timestamp: new Date("2024-01-08T15:52:00"),
        },
        {
          text: "Definitely recommending you to all our network. You're a true craftsman!",
          isFromMe: false,
          timestamp: new Date("2024-01-08T15:53:00"),
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

      const messages = selectedContact.messages.map((msg, index) => ({
        ...msg,
        id: `${selectedContact.id}-${index}`,
      }))

      // Animate messages in sequence
      let currentIndex = 0
      const showNextMessage = () => {
        if (currentIndex < messages.length) {
          const currentMessage = messages[currentIndex]

          if (!currentMessage.isFromMe) {
            // Show typing indicator before client messages
            setIsTyping(true)
            setTimeout(() => {
              setIsTyping(false)
              setDisplayedMessages((prev) => [...prev, currentMessage])
              currentIndex++
              setTimeout(showNextMessage, 800)
            }, 1500)
          } else {
            // Show user messages immediately
            setDisplayedMessages((prev) => [...prev, currentMessage])
            currentIndex++
            setTimeout(showNextMessage, 600)
          }
        }
      }

      showNextMessage()
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
    <div className="flex h-full bg-white">
      {/* Sidebar */}
      <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search size={18} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <motion.button
              key={contact.id}
              className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-100 transition-colors text-left ${
                selectedContact?.id === contact.id ? "bg-blue-100" : ""
              }`}
              onClick={() => setSelectedContact(contact)}
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
              <div className="relative">
                <img src={contact.avatar || "/placeholder.svg"} alt={contact.name} className="w-12 h-12 rounded-full" />
                {contact.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                  <span className="text-xs text-gray-500">{contact.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{contact.company}</p>
                <p className="text-sm text-gray-500 truncate mt-1">{contact.lastMessage}</p>
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
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedContact.avatar || "/placeholder.svg"}
                  alt={selectedContact.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{selectedContact.name}</h3>
                  <p className="text-sm text-gray-500">{selectedContact.company}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Phone size={18} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <VideoIcon size={18} className="text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Info size={18} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
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
                          : "bg-gray-200 text-gray-900 rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isFromMe ? "text-blue-100" : "text-gray-500"}`}>
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
                    <div className="bg-gray-200 px-4 py-2 rounded-2xl rounded-bl-md">
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
              <h3 className="text-xl font-medium text-gray-900 mb-2">Select a conversation</h3>
              <p className="text-gray-500">Choose a client to view testimonials</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
