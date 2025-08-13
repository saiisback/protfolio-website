"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, MapPin, CalendarIcon, Award } from "lucide-react"

interface TimelineEvent {
  id: string
  title: string
  company: string
  location: string
  startDate: Date
  endDate: Date | null // null for current positions
  type: "work" | "education" | "achievement" | "project"
  description: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
  color: string
}

function formatDateRange(startDate: Date, endDate: Date | null) {
  const start = startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
  const end = endDate ? endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Present"
  return `${start} - ${end}`
}

function getEventIcon(type: string) {
  switch (type) {
    case "work":
      return <CalendarIcon size={16} />
    case "education":
      return <CalendarIcon size={16} />
    case "achievement":
      return <Award size={16} />
    default:
      return <CalendarIcon size={16} />
  }
}

export default function CalendarApp() {
  const [selectedYear, setSelectedYear] = useState(2024)
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const [viewMode, setViewMode] = useState<"timeline" | "year">("timeline")

  const events: TimelineEvent[] = [
    {
      id: "quantumleap-ai",
      title: "AI Engineer",
      company: "QuantumLeap AI",
      location: "San Francisco, CA",
      startDate: new Date("2023-08-01"),
      endDate: null,
      type: "work",
      description: "Leading AI/ML development at a cutting-edge startup focused on enterprise AI solutions.",
      responsibilities: [
        "Led development of real-time recommendation engine using collaborative filtering",
        "Architected scalable ML pipelines processing millions of data points daily",
        "Implemented deep learning models for natural language processing",
        "Collaborated with product team to define AI-driven features",
      ],
      achievements: [
        "Achieved 15% increase in user engagement through recommendation engine optimization",
        "Reduced model inference time by 60% through optimization techniques",
        "Built automated ML pipeline reducing deployment time from days to hours",
      ],
      technologies: ["Python", "PyTorch", "TensorFlow", "AWS", "Docker", "Kubernetes", "PostgreSQL"],
      color: "bg-blue-500",
    },
    {
      id: "software-intern",
      title: "Software Engineer Intern",
      company: "TechFlow Inc",
      location: "Austin, TX",
      startDate: new Date("2023-05-01"),
      endDate: new Date("2023-07-31"),
      type: "work",
      description: "Full-stack development internship focusing on customer service automation.",
      responsibilities: [
        "Developed customer service chatbot using NLP and machine learning",
        "Built responsive web interfaces using React and TypeScript",
        "Integrated third-party APIs for payment processing and analytics",
        "Participated in agile development processes and code reviews",
      ],
      achievements: [
        "Delivered chatbot that reduced customer service response time by 40%",
        "Implemented features used by 10,000+ daily active users",
        "Received outstanding intern performance rating",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Python", "MongoDB", "AWS"],
      color: "bg-green-500",
    },
    {
      id: "smart-india-hackathon",
      title: "Winner - Smart India Hackathon",
      company: "Government of India",
      location: "New Delhi, India",
      startDate: new Date("2023-03-15"),
      endDate: new Date("2023-03-17"),
      type: "achievement",
      description: "Won national hackathon with innovative AI solution for agricultural optimization.",
      responsibilities: [
        "Led team of 6 developers in 48-hour hackathon",
        "Developed AI-powered crop yield prediction system",
        "Created mobile app for farmers with real-time recommendations",
        "Presented solution to panel of government officials and industry experts",
      ],
      achievements: [
        "First place among 1000+ participating teams nationwide",
        "Solution adopted by state agriculture department for pilot program",
        "Featured in national technology publications",
      ],
      technologies: ["Python", "Machine Learning", "React Native", "Firebase", "Google Cloud"],
      color: "bg-yellow-500",
    },
    {
      id: "computer-science-degree",
      title: "B.Tech Computer Science",
      company: "Indian Institute of Technology",
      location: "Mumbai, India",
      startDate: new Date("2020-08-01"),
      endDate: new Date("2024-05-31"),
      type: "education",
      description: "Bachelor's degree in Computer Science with focus on AI/ML and software engineering.",
      responsibilities: [
        "Completed coursework in algorithms, data structures, and machine learning",
        "Conducted research in natural language processing",
        "Teaching assistant for introductory programming courses",
        "Active member of coding club and hackathon organizing committee",
      ],
      achievements: [
        "Graduated with First Class Honors (GPA: 8.7/10)",
        "Published research paper on sentiment analysis in regional languages",
        "Led university team to victory in inter-college programming contest",
      ],
      technologies: ["Python", "Java", "C++", "Machine Learning", "Data Structures", "Algorithms"],
      color: "bg-purple-500",
    },
    {
      id: "freelance-projects",
      title: "Freelance Developer",
      company: "Self-Employed",
      location: "Remote",
      startDate: new Date("2022-01-01"),
      endDate: new Date("2023-04-30"),
      type: "work",
      description: "Full-stack development services for startups and small businesses.",
      responsibilities: [
        "Built custom web applications for diverse client needs",
        "Developed Chrome extensions with 10K+ active users",
        "Created SaaS platforms with subscription billing integration",
        "Provided technical consulting for startup founders",
      ],
      achievements: [
        "Delivered 15+ successful projects with 100% client satisfaction",
        "Generated $50K+ in revenue through freelance work",
        "Built applications serving 25,000+ combined users",
      ],
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "Vercel"],
      color: "bg-red-500",
    },
  ]

  const years = [2020, 2021, 2022, 2023, 2024]

  const getEventsForYear = (year: number) => {
    return events.filter((event) => {
      const eventYear = event.startDate.getFullYear()
      const endYear = event.endDate?.getFullYear() || new Date().getFullYear()
      return year >= eventYear && year <= endYear
    })
  }

  const TimelineView = ({
    events,
    onEventClick,
  }: { events: TimelineEvent[]; onEventClick: (event: TimelineEvent) => void }) => {
    const sortedEvents = [...events].sort((a, b) => b.startDate.getTime() - a.startDate.getTime())

    return (
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

        <div className="space-y-8">
          {sortedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="relative flex items-start space-x-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Timeline Dot */}
              <div className={`w-4 h-4 rounded-full ${event.color} border-4 border-white shadow-lg z-10`}></div>

              {/* Event Card */}
              <motion.div
                className="flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => onEventClick(event)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{event.title}</h3>
                    <p className="text-blue-600 font-medium">{event.company}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                      <span>{formatDateRange(event.startDate, event.endDate)}</span>
                    </div>
                    <p className="text-gray-700 mt-2">{event.description}</p>
                  </div>
                  <div className="ml-4 text-gray-400">{getEventIcon(event.type)}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  const YearView = ({
    events,
    onEventClick,
  }: { events: TimelineEvent[]; onEventClick: (event: TimelineEvent) => void }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => onEventClick(event)}
          >
            <div className="flex items-start space-x-3">
              <div className={`w-3 h-3 rounded-full ${event.color} mt-2`}></div>
              <div>
                <h3 className="font-semibold text-gray-900">{event.title}</h3>
                <p className="text-blue-600 font-medium text-lg">{event.company}</p>
                <p className="text-sm text-gray-500 mt-1">{formatDateRange(event.startDate, event.endDate)}</p>
                <p className="text-gray-700 mt-2">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  const EventDetailModal = ({ event, onClose }: { event: TimelineEvent; onClose: () => void }) => {
    const formatDateRange = (startDate: Date, endDate: Date | null) => {
      const start = startDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      const end = endDate
        ? endDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
        : "Present"
      return `${start} - ${end}`
    }

    return (
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className={`w-4 h-4 rounded-full ${event.color} mt-1`}></div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>
                  <p className="text-blue-600 font-medium text-lg">{event.company}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                    <span>{formatDateRange(event.startDate, event.endDate)}</span>
                  </div>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
              <ul className="space-y-2">
                {event.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Achievements</h3>
              <ul className="space-y-2">
                {event.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {event.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Professional Timeline</h1>
          <div className="flex items-center space-x-2">
            <button
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                viewMode === "timeline" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setViewMode("timeline")}
            >
              Timeline
            </button>
            <button
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                viewMode === "year" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setViewMode("year")}
            >
              Year View
            </button>
          </div>
        </div>

        {viewMode === "year" && (
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setSelectedYear(selectedYear - 1)}
              disabled={selectedYear <= 2020}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-xl font-semibold text-gray-800 min-w-20 text-center">{selectedYear}</h2>
            <button
              onClick={() => setSelectedYear(selectedYear + 1)}
              disabled={selectedYear >= 2024}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {viewMode === "timeline" ? (
          <TimelineView events={events} onEventClick={setSelectedEvent} />
        ) : (
          <YearView events={getEventsForYear(selectedYear)} onEventClick={setSelectedEvent} />
        )}
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && <EventDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </AnimatePresence>
    </div>
  )
}
