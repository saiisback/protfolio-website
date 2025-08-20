"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Portfolio() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".scroll-animate, .scroll-zoom")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-background relative">
      <div className="ink-spot ink-spot-1"></div>
      <div className="ink-spot ink-spot-2"></div>
      <div className="ink-spot ink-spot-3"></div>
      <div className="ink-spot ink-spot-4"></div>

      {/* Newspaper Masthead Hero */}
      <section
        className="bg-background border-b-4 border-foreground relative flex flex-col justify-center items-center w-full min-h-[70vh] md:min-h-[90vh] px-2 md:px-0"
        style={{
          paddingTop: '2vw',
          paddingBottom: '2vw',
        }}
      >
        <div className="confidential-stamp absolute top-6 right-8 md:right-24 text-base md:text-xl">TOP SECRET</div>
        <div className="classified-stamp absolute top-6 left-8 md:left-24 text-base md:text-xl">CLASSIFIED</div>

        <div className="w-full max-w-none md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw] mx-auto pt-6 md:pt-10 flex flex-col justify-center items-center">
          {/* Newspaper Header */}
          <div className="text-center border-b-2 border-foreground pb-6 md:pb-10 mb-8 md:mb-12 w-full">
            <div className="flex w-full justify-between items-center text-xs md:text-base newspaper-body mb-2 md:mb-4 px-2 md:px-8">
              <span>PORTFOLIO EDITION</span>
              <span>WEDNESDAY, DECEMBER 2024</span>
              <span>4X NATIONAL HACKATHON WINNER</span>
            </div>
            <h1 className="newspaper-headline text-6xl md:text-[6vw] lg:text-[5vw] xl:text-[4vw] mb-2 tracking-tight justify-center items-center leading-tight">
              <span className="flex justify-center w-full"><span className="typewriter">SAI KARTHIK KETHA</span></span>
            </h1>
            <div className="newspaper-separator w-48 md:w-72 mx-auto mb-4 md:mb-6"></div>
            <p className="newspaper-subhead text-xl md:text-3xl lg:text-4xl scroll-animate">SOFTWARE ENGINEER & AI/ML ENGINEER</p>
            <div className="mt-4 md:mt-6 flex gap-4 justify-center">
              <span className="newspaper-symbol text-xl md:text-2xl">★</span>
              <span className="newspaper-symbol text-xl md:text-2xl">◆</span>
              <span className="newspaper-symbol text-xl md:text-2xl">★</span>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="grid grid-cols-4 md:grid-cols-7 gap-0 border-2 border-foreground scroll-animate w-full text-xs sm:text-sm md:text-base lg:text-lg">
            {["ABOUT", "EXPERIENCE", "EDUCATION", "PROJECTS", "SKILLS", "HOBBIES", "CONTACT",].map((item, idx) => (
              <div
                key={item}
                className={`border-r border-foreground last:border-r-0 flex items-center justify-center h-16 sm:h-18 md:h-20 lg:h-24 bg-white ${idx === 0 ? 'bg-muted' : ''} px-1`}
                style={{ minWidth: 0 }}
              >
                <span className="newspaper-body text-xs sm:text-sm md:text-base font-bold tracking-wide w-full text-center leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Hero Article */}
        <section className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b-2 border-foreground relative">
          <div className="absolute -top-4 left-0 z-10">
            <span className="breaking-news-tag">BREAKING NEWS</span>
          </div>

          <div className="md:col-span-2 scroll-animate">
            <div className="w-full h-48 sm:h-56 md:h-64 bg-muted newspaper-border mb-4 sm:mb-6 relative overflow-hidden">
              <Image
                src="/winner.png"
                alt="Sai Karthik Ketha - Professional Portrait"
                className="w-full h-full object-cover grayscale"
                style={{ objectPosition: 'center bottom' }}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background p-2">
                <p className="newspaper-body text-xs sm:text-sm text-center font-bold">
                  SAI KARTHIK KETHA, 4X NATIONAL HACKATHON WINNER
                </p>
              </div>
            </div>

            <h2 className="newspaper-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight md:leading-none animate-slide-in-left">
              4X NATIONAL HACKATHON CHAMPION REVOLUTIONIZES AI
            </h2>
            <p className="newspaper-subhead text-base sm:text-lg mb-4 text-muted-foreground">
              Founding Engineer leads breakthrough innovations in AI/ML applications and full-stack development
            </p>
            <div className="newspaper-body text-base leading-relaxed space-y-4">
              <p>
                <strong>BENGALURU</strong> — Sai Karthik Ketha, a distinguished 4x National Hackathon Winner and
                Founding Engineer at Margros, has been making waves in the technology sector with groundbreaking
                contributions to artificial intelligence and full-stack development.
              </p>
              <p>
                Currently serving as Software Engineer Intern at ResuMatch.io and General Manager at BMSIT&M's
                Innovation Council, Ketha represents the new generation of engineers bridging traditional software
                development with cutting-edge AI technologies.
              </p>
              <p>
                "Innovation happens at the intersection of creativity and technology," Ketha stated in a recent
                interview. "My goal is to build solutions that not only solve problems but create new possibilities."
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 scroll-zoom">
            {/* Quick Facts Box */}
            <div className="newspaper-border p-3 sm:p-4 bg-card relative">
              <div className="classified-stamp" style={{ top: "5px", right: "5px", fontSize: "8px" }}>
                CONFIDENTIAL
              </div>
              <h3 className="newspaper-subhead text-base sm:text-lg mb-3">QUICK FACTS</h3>
              <div className="newspaper-body text-xs sm:text-sm space-y-2">
                <p>
                  <strong>Achievement:</strong> 4x National Hackathon Winner
                </p>
                <p>
                  <strong>Current Role:</strong> Software Intern at ResuMatch.io
                </p>
                <p>
                  <strong>Location:</strong> Bengaluru, India
                </p>
                <p>
                  <strong>Focus:</strong> AI/ML, Full-Stack Development
                </p>
              </div>
            </div>

            <div className="newspaper-border p-3 sm:p-4 relative">
              <div
                className="confidential-stamp"
                style={{ top: "5px", right: "5px", fontSize: "8px", transform: "rotate(-15deg)" }}
              >
                EXCLUSIVE
              </div>
              <div className="w-full h-24 sm:h-32 bg-muted newspaper-border mb-3 relative">
                <Image
                  src="/masyn.png"
                  alt="Masyn UI Library"
                  className="w-full h-full object-cover grayscale"
                  style={{ objectPosition: 'center bottom' }}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background p-1">
                  <p className="newspaper-body text-xs text-center">MASYN UI LIBRARY - 50+ DOWNLOADS</p>
                </div>
              </div>
              <h3 className="newspaper-subhead text-base sm:text-lg mb-3">LATEST ACHIEVEMENT</h3>
              <p className="newspaper-body text-xs sm:text-sm">
                Successfully launched Masyn - a reusable UI component library for React and TypeScript, accelerating development across projects with 50+ downloads and 4.7/5 rating.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Timeline - Real Data */}
        <section className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b-2 border-foreground">
          <div className="scroll-animate">
            <h2 className="newspaper-headline text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 animate-slide-in-right">
              CAREER CHRONICLE
              <span className="newspaper-symbol ml-2 sm:ml-4">◆</span>
            </h2>
            <div className="newspaper-separator w-16 sm:w-24 mb-6 sm:mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                year: "Jun 2025-Present",
                title: "Software Engineer Intern",
                company: "ResuMatch.io",
                location: "United States · Remote",
                description:
                  "Developing features across the ResuMatch platform and related Chrome extensions. Building scalable web applications with Next.js, TypeScript, and PostgreSQL.",
                achievements: [
                  "Developing core platform features",
                  "Building Chrome extension integrations",
                  "Working with PostgreSQL databases",
                ],
                stamp: "CURRENT",
                image: "/resumatch.png",
              },
              {
                year: "Nov 2024-Present",
                title: "Founding Engineer & Product Lead",
                company: "Margros",
                location: "Bengaluru, India",
                description:
                  "Leading product and engineering for Margros systems and web applications. Architecting scalable solutions and managing end-to-end product development.",
                achievements: [
                  "Built Margros POS System with 2.3K+ users",
                  "Developed company portfolio website",
                  "Leading product strategy and engineering",
                ],
                stamp: "FOUNDING",
                image: "/margros.png",
              },
              {
                year: "Apr 2025-Present",
                title: "General Manager",
                company: "Institution's Innovation Council, BMSIT&M",
                location: "Bengaluru, Karnataka, India",
                description:
                  "Overseeing strategy and operations for the Institution's Innovation Council, driving entrepreneurship and innovation initiatives.",
                achievements: [
                  "Developing yearly innovation roadmaps",
                  "Leading cross-functional teams",
                  "Building industry partnerships",
                ],
                stamp: "LEADERSHIP",
                image: "/iic.png",
              },
              {
                year: "Feb 2025-Apr 2025",
                title: "Web Developer & AI Contributor",
                company: "RedPaper",
                location: "Kathmandu, Nepal · Remote",
                description:
                  "Contributed to Art Attack and Turtle Justice projects, integrating AI-driven solutions and collaborating across international teams.",
                achievements: [
                  "Integrated AI solutions in projects",
                  "Cross-team collaboration",
                  "International remote work experience",
                ],
                stamp: "COMPLETED",
                image: "/redpaper.png",
              },
              {
                year: "Jul 2022-Dec 2024",
                title: "Co-Founder",
                company: "Waycup Studios",
                location: "Bengaluru, India · Remote",
                description:
                  "Led projects across web and game design, managing delivery end-to-end. Built multiple client projects and established studio operations.",
                achievements: [
                  "Co-founded successful studio",
                  "Managed end-to-end project delivery",
                  "Built diverse client portfolio",
                ],
                stamp: "ARCHIVED",
                image: "/waycup.png",
              },
              {
                year: "Aug 2024-Nov 2024",
                title: "Senior Web Developer",
                company: "Anime Canvas",
                location: "Bengaluru, India · Remote",
                description:
                  "Designed and developed AnimeCanvas.in with responsive e-commerce, high performance animations and user experience optimization.",
                achievements: [
                  "Built AnimeCanvas.in (1K+ users)",
                  "Implemented responsive e-commerce",
                  "Optimized performance and animations",
                ],
                stamp: "DELIVERED",
                image: "/anime.png",
              },
            ].map((job, index) => (
              <div key={index} className="newspaper-border p-4 sm:p-6 bg-card relative scroll-zoom">
                <div className="confidential-stamp" style={{ fontSize: "8px" }}>
                  {job.stamp}
                </div>

                <div className="w-full h-16 sm:h-20 bg-muted newspaper-border mb-3 sm:mb-4 relative overflow-hidden">
                  <Image
                    src={job.image || "/placeholder.svg"}
                    alt={`${job.company} workplace environment`}
                    className="w-full h-full object-cover grayscale"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Badge variant="outline" className="newspaper-body font-bold text-sm sm:text-lg px-2 sm:px-3 py-1 breaking-news-tag">
                    {job.year}
                  </Badge>
                  <div className="h-px bg-foreground flex-1"></div>
                </div>
                <h3 className="newspaper-subhead text-lg sm:text-xl mb-2">{job.title}</h3>
                <p className="newspaper-body font-bold text-muted-foreground mb-1 text-sm sm:text-base">{job.company}</p>
                <p className="newspaper-body text-xs text-muted-foreground mb-3">{job.location}</p>
                <p className="newspaper-body mb-3 sm:mb-4 text-sm sm:text-base">{job.description}</p>
                <div className="space-y-1">
                  {job.achievements.map((achievement, i) => (
                    <p key={i} className="newspaper-body text-xs sm:text-sm">
                      • {achievement}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b-2 border-foreground">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="scroll-animate">
              <h2 className="newspaper-headline text-3xl sm:text-4xl mb-4 sm:mb-6 animate-slide-in-left">
                EDUCATION
                <span className="newspaper-symbol ml-2">★</span>
              </h2>
              <div className="newspaper-separator w-12 sm:w-16 mb-4 sm:mb-6"></div>

              <div className="w-full h-32 sm:h-40 bg-muted newspaper-border relative mb-4">
                <Image
                  src="/bmsit.png"
                  alt="BMSIT&M Campus - Computer Science Department"
                  className="w-full h-full object-cover grayscale"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-foreground text-background p-2">
                  <p className="newspaper-body text-xs text-center">BMSIT&M - COMPUTER SCIENCE ENGINEERING</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4 sm:space-y-6">
              <div className="newspaper-border p-4 sm:p-6 bg-card relative scroll-zoom">
                <div className="classified-stamp" style={{ fontSize: "8px" }}>
                  CURRENT
                </div>
                <h3 className="newspaper-subhead text-lg sm:text-xl mb-2">Bachelor of Engineering in Computer Science</h3>
                <p className="newspaper-body font-bold text-muted-foreground mb-2 text-sm sm:text-base">
                  BMS Institute of Technology & Management • 2024-2028
                </p>
                <p className="newspaper-body mb-3 text-sm sm:text-base">Specialization: Software Engineering & AI/ML</p>
                <p className="newspaper-body text-xs sm:text-sm">
                  <strong>Leadership:</strong> General Manager at Institution's Innovation Council, driving
                  entrepreneurship and innovation initiatives
                </p>
              </div>
              <div className="newspaper-border p-4 sm:p-6 relative scroll-zoom">
                <div className="confidential-stamp" style={{ fontSize: "8px", transform: "rotate(10deg)" }}>
                  ACHIEVEMENT
                </div>
                <h3 className="newspaper-subhead text-lg sm:text-xl mb-2">4x National Hackathon Winner</h3>
                <p className="newspaper-body font-bold text-muted-foreground mb-2 text-sm sm:text-base">
                  Multiple National Competitions • 2021-Present
                </p>
                <p className="newspaper-body mb-3 text-sm sm:text-base">Consistent Excellence in Competitive Programming</p>
                <p className="newspaper-body text-xs sm:text-sm">
                  <strong>Recognition:</strong> Demonstrated exceptional problem-solving skills and innovative thinking
                  across multiple national-level competitions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects - Real Data */}
        <section className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b-2 border-foreground">
          <div className="scroll-animate">
            <h2 className="newspaper-headline text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 typewriter">FEATURED PROJECTS</h2>
            <div className="text-center">
              <span className="newspaper-symbol">◆</span>
              <span className="newspaper-symbol">★</span>
              <span className="newspaper-symbol">◆</span>
            </div>
            <div className="newspaper-separator w-16 sm:w-24 mx-auto mb-8 sm:mb-12"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Handwriting Generator",
                description: "An ML-powered project to generate handwriting styles for documents.",
                tech: ["Python", "Deep Learning"],
                githubUrl: "https://github.com/saiisback/handwriting-gen",
                stamp: "Deep Learning",
                image: "/hand.png",
              },
              {
                title: "ResuMatch - Job Search Platform",
                description:
                  "Smart job search companion that streamlines applications with auto-apply features and Chrome extension.",
                tech: ["Next.js", "TypeScript", "PostgreSQL", "Chrome APIs"],
                impact: "6.4K+ downloads, 4.7/5 rating, 12K extension users",
                stamp: "LIVE",
                url: "https://resumatch.io",
                image: "/chrome.png",
              },
              {
                title: "Masyn - NPM Utility Package",
                description: "Reusable utilities published as npm package to accelerate development across projects.",
                tech: ["TypeScript", "npm"],
                impact: "1.1K downloads, 4.7/5 rating, Open source",
                stamp: "LIBRARY",
                url: "https://masyn.vercel.app/",
                image: "/masyn-1.png",
              },
              {
                title: "PDF Analyser & Quiz Generator",
                description:
                  "AI-powered tool that processes PDFs using LLMs and creates interactive quizzes with explanations.",
                tech: ["Next.js", "TypeScript", "Python", "LLMs"],
                impact: "1.9K downloads, 4.7/5 rating, Educational tool",
                stamp: "AI/ML",
                url: "https://pdf-analyser-quiz-generator.vercel.app/",
                image: "/pdf.png",
              },
              {
                title: "Low-level RDBMS",
                description:
                  "Educational RDBMS implementation with storage, indexing, and query layer built from scratch.",
                tech: ["C/C++", "Data Structures", "B+ Trees"],
                impact: "720 downloads, 4.8/5 rating, Educational",
                stamp: "SYSTEMS",
                url: "https://github.com/saiisback/Low-level-rdbms",
                image: "/dbms.png",
              },
              {
                title: "Search Engine - Azizah",
                description:
                  "Custom search engine with crawling, inverted index, and ranking algorithms for educational purposes.",
                tech: ["Python", "IR", "Algorithms"],
                impact: "3.5K downloads, 4.6/5 rating, Live at azizah.live",
                stamp: "SYSTEMS",
                url: "https://azizah.live",
                image: "/azizah.png",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="newspaper-border p-4 sm:p-6 hover:shadow-lg transition-shadow bg-card relative scroll-zoom"
              >
                <div className="confidential-stamp" style={{ fontSize: "8px" }}>
                  {project.stamp}
                </div>
                <div className="breaking-news-tag mb-3 sm:mb-4 text-xs">{project.title}</div>
                <div className="h-32 sm:h-40 bg-muted mb-3 sm:mb-4 flex items-center justify-center newspaper-border relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} - Project Screenshot`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="newspaper-body text-xs sm:text-sm mb-3">{project.description}</p>
               {/* <p className="newspaper-body text-xs text-muted-foreground mb-3 font-semibold">{project.impact}</p> */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs newspaper-border">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {/* {project.url && (
                  <Button size="sm" variant="outline" className="w-full newspaper-border text-xs bg-transparent">
                    VIEW PROJECT
                  </Button>
                )} */}
              </Card>
            ))}
          </div>
        </section>

        {/* Client Reviews - Interview Style */}
        <section className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b-2 border-foreground">
          <div className="scroll-animate">
            <h2 className="newspaper-headline text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 animate-slide-in-left">
              CLIENT INTERVIEWS
              <span className="newspaper-symbol ml-2 sm:ml-4">◆</span>
            </h2>
            <div className="newspaper-separator w-16 sm:w-24 mx-auto mb-8 sm:mb-12"></div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {[
              {
                name: "Mayank Lilani",
                title: "Marketing Head",
                company: "Client Company",
                interview: {
                  question: "How would you rate Sai Karthik's service and what stood out to you?",
                  answer:
                    "I would rate your service 5/5⭐️. You have done a fantastic job while doing my work, it was systematic and quick service by Sai Karthik. I expected that it would take more than a week but it took less than that, and I also liked the designs made by Sai Karthik. It was quite unique and user‑friendly designs.",
                },
                stamp: "5/5 STARS",
                image: "/mayank.png",
              },
              {
                name: "Akash Sarangi",
                title: "Head of the Tech Team",
                company: "Technology Company",
                interview: {
                  question: "What's your assessment of Sai Karthik as a frontend developer?",
                  answer:
                    "Sai is a highly skilled frontend developer with a strong portfolio that demonstrates his technical expertise, creativity, and dedication to delivering exceptional user experiences. He is well-equipped to take on challenging projects and make a meaningful impact in any development team.",
                },
                stamp: "EXPERT",
                image: "/akash.png",
              },
              {
                name: "Aditya S Nair",
                title: "President, Atal Lab (DPSBN)",
                company: "DPSBN",
                interview: {
                  question: "Could you share your experience working with Sai Karthik?",
                  answer:
                    "Sai Karthik has a really amazing work ethic and determination. He stands out for being adaptable and productive, which makes him a great asset to any project. It's amazing how well he can handle several jobs at once and provide excellent outcomes. His persistent dedication and enthusiasm for perfection are absolutely admirable.",
                },
                stamp: "LEADERSHIP",
                image: "/nair.png",
              },
            ].map((review, index) => (
              <div key={index} className="newspaper-border p-4 sm:p-6 md:p-8 bg-card relative scroll-zoom">
                <div className="confidential-stamp" style={{ fontSize: "8px" }}>
                  {review.stamp}
                </div>
                <div className="grid md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="md:col-span-1">
                    <div className="newspaper-border p-3 sm:p-4 bg-background text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted mx-auto mb-2 sm:mb-3 newspaper-border flex items-center justify-center overflow-hidden relative">
                        <Image
                          src={review.image || "/placeholder.svg"}
                          alt={`${review.name} Portrait`}
                          className="w-full h-full object-cover grayscale"
                          fill
                          sizes="64px"
                        />
                      </div>
                      <h4 className="newspaper-subhead text-base sm:text-lg mb-1">{review.name}</h4>
                      <p className="newspaper-body text-xs sm:text-sm text-muted-foreground mb-1">{review.title}</p>
                      <p className="newspaper-body text-xs text-muted-foreground">{review.company}</p>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="space-y-3 sm:space-y-4">
                      <div>
                        <p className="newspaper-body font-bold text-xs sm:text-sm mb-2">INTERVIEWER:</p>
                        <p className="newspaper-body text-xs sm:text-sm italic">"{review.interview.question}"</p>
                      </div>
                      <div>
                        <p className="newspaper-body font-bold text-xs sm:text-sm mb-2">{review.name.toUpperCase()}:</p>
                        <p className="newspaper-body text-xs sm:text-sm leading-relaxed">"{review.interview.answer}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Infographic Section */}
        <section className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b-2 border-foreground">
          <div className="scroll-animate">
            <h2 className="newspaper-headline text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 animate-slide-in-left">
              TECHNICAL EXPERTISE
              <span className="newspaper-symbol ml-2 sm:ml-4">◆</span>
            </h2>
            <div className="newspaper-separator w-16 sm:w-24 mx-auto mb-8 sm:mb-12"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* AI/ML Skills */}
            <div className="newspaper-border p-4 sm:p-6 md:p-8 bg-card relative scroll-zoom">
              <div className="classified-stamp" style={{ fontSize: "8px" }}>
                TOP SECRET
              </div>
              <div className="float-right ml-3 sm:ml-4 mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-muted newspaper-border relative">
                  <Image
                    src="/aiml.png"
                    alt="AI/ML Technology"
                    className="w-full h-full object-cover grayscale"
                    fill
                    sizes="80px"
                  />
                </div>
              </div>
              <h3 className="newspaper-headline text-2xl sm:text-3xl mb-4 sm:mb-6">AI/ML STACK</h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { skill: "LangGraph & AI Orchestration", level: 95 },
                  { skill: "OpenAI & Groq Integration", level: 92 },
                  { skill: "FastAPI & Python", level: 90 },
                  { skill: "Deep Learning Frameworks", level: 85 },
                  { skill: "Computer Vision", level: 82 },
                  { skill: "Natural Language Processing", level: 88 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="newspaper-body font-semibold text-xs sm:text-sm pr-2">{item.skill}</span>
                      <span className="newspaper-body text-xs sm:text-sm font-bold flex-shrink-0">{item.level}%</span>
                    </div>
                    <Progress value={item.level} className="h-2 sm:h-3 newspaper-border" />
                  </div>
                ))}
              </div>
            </div>

            {/* Software Development Skills */}
            <div className="newspaper-border p-4 sm:p-6 md:p-8 relative scroll-zoom">
              <div className="confidential-stamp" style={{ fontSize: "8px", transform: "rotate(-12deg)" }}>
                VERIFIED
              </div>
              <div className="float-left mr-3 sm:mr-4 mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-muted newspaper-border relative">
                  <Image
                    src="/sde.png"
                    alt="Software Development"
                    className="w-full h-full object-cover grayscale"
                    fill
                    sizes="80px"
                  />
                </div>
              </div>
              <h3 className="newspaper-headline text-2xl sm:text-3xl mb-4 sm:mb-6">SOFTWARE DEV</h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { skill: "Next.js & React", level: 95 },
                  { skill: "TypeScript & JavaScript", level: 92 },
                  { skill: "PostgreSQL & Databases", level: 88 },
                  { skill: "Chrome Extension APIs", level: 85 },
                  { skill: "Node.js & Backend", level: 87 },
                  { skill: "Tailwind CSS & Styling", level: 90 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="newspaper-body font-semibold text-xs sm:text-sm pr-2">{item.skill}</span>
                      <span className="newspaper-body text-xs sm:text-sm font-bold flex-shrink-0">{item.level}%</span>
                    </div>
                    <Progress value={item.level} className="h-2 sm:h-3 newspaper-border" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Communication Skills */}
          <div className="mt-6 sm:mt-8 newspaper-border p-4 sm:p-6 md:p-8 bg-card relative scroll-animate">
            <div
              className="classified-stamp"
              style={{ fontSize: "8px", left: "50%", transform: "translateX(-50%) rotate(5deg)" }}
            >
              LEADERSHIP
            </div>
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted newspaper-border relative">
                <Image
                  src="/leader.png"
                  alt="Leadership"
                  className="w-full h-full object-cover grayscale"
                  fill
                  sizes="64px"
                />
              </div>
            </div>
            <h3 className="newspaper-headline text-2xl sm:text-3xl mb-4 sm:mb-6 text-center pr-16 sm:pr-20">LEADERSHIP & COMMUNICATION</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                { skill: "Product Leadership", level: 92 },
                { skill: "Cross-functional Teams", level: 88 },
                { skill: "Client Communication", level: 95 },
                { skill: "Innovation Management", level: 87 },
                { skill: "Remote Collaboration", level: 90 },
                { skill: "Mentoring & Training", level: 85 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="newspaper-body font-semibold text-xs sm:text-sm pr-2">{item.skill}</span>
                    <span className="newspaper-body text-xs sm:text-sm font-bold flex-shrink-0">{item.level}%</span>
                  </div>
                  <Progress value={item.level} className="h-2 sm:h-3 newspaper-border" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies & Interests - Magazine Clippings Style */}
          <section className="mb-12 pb-8 border-b-2 border-foreground">

          <div className="scroll-animate">
            <h2 className="newspaper-headline text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 animate-slide-in-right">
              LIFE BEYOND CODE
                            <span className="newspaper-symbol ml-4">★</span>

            </h2>
                        <div className="newspaper-separator w-24 mx-auto mb-12"></div>

          </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {[
              { name: "Karate", image: "/karate.png" },
              { name: "Mountain Hiking", image: "/mountain.png" },
              { name: "Photography", image: "/photo.png" },
              { name: "Writing", image: "/writing.png" },
              { name: "Reading", image: "/reading.png" },
              { name: "Travel", image: "/travel.png" },
              
            ].map((hobby, index) => (
              <div
                key={index}
                                className="newspaper-border bg-background p-3 hover:shadow-lg transition-shadow relative scroll-zoom"

              >
                {index % 3 === 0 && (
                  <div className="classified-stamp" style={{ fontSize: "6px", top: "5px", right: "5px" }}>
                    PERSONAL
                  </div>
                )}
                <Image
                  src={hobby.image || "/placeholder.svg"}
                  alt={hobby.name}
                                    className="w-full h-62 object-cover mb-3 grayscale hover:grayscale-0 transition-all newspaper-border"

                  width={200}
                  height={128}
                />
                                <p className="newspaper-body font-bold text-sm text-center">{hobby.name}</p>

                {index % 4 === 1 && (
                  <div
                    className="ink-spot"
                    style={{ width: "4px", height: "4px", bottom: "5px", left: "5px", opacity: "0.3" }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact - Classified Ad Style */}
        <section className="mb-6 sm:mb-8">
          <div className="newspaper-border bg-card p-6 sm:p-8 relative scroll-animate">
            <div className="confidential-stamp">FOR HIRE</div>
            <div className="classified-stamp" style={{ left: "50%", transform: "translateX(-50%) rotate(-5deg)" }}>
              AVAILABLE
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <h2 className="newspaper-headline text-3xl sm:text-4xl md:text-5xl mb-4 typewriter">CLASSIFIED</h2>
              <div className="newspaper-separator w-16 sm:w-24 mx-auto mb-4"></div>
              <p className="newspaper-subhead text-lg sm:text-xl">SEEKING: Innovative Projects & Collaborations</p>
              <div className="mt-4">
                <span className="newspaper-symbol">◆</span>
                <span className="newspaper-symbol">★</span>
                <span className="newspaper-symbol">◆</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="newspaper-border p-4 sm:p-6 bg-background relative">
                <div className="classified-stamp" style={{ fontSize: "8px", top: "5px", right: "5px" }}>
                  CONTACT
                </div>
                
                <h3 className="newspaper-subhead text-lg sm:text-xl mb-4">CONTACT INFORMATION</h3>
                <div className="space-y-3 newspaper-body text-sm sm:text-base">
                      <p>
                        <strong>Email:</strong>{" "}
                        <a
                          href="mailto:karthiksaiketha@gmail.com"
                          className="underline  hover:bg-black hover:text-white text-xs sm:text-sm break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          karthiksaiketha@gmail.com
                        </a>
                      </p>
                      <p>
                        <strong>Location:</strong> Bengaluru, Karnataka, India
                      </p>
                      <p>
                        <strong>LinkedIn:</strong>{" "}
                        <a
                          href="https://linkedin.com/in/sai-karthik-ketha"
                          className="underline  hover:bg-black hover:text-white text-xs sm:text-sm break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          /in/sai-karthik-ketha
                        </a>
                      </p>
                      <p>
                        <strong>GitHub:</strong>{" "}
                        <a
                          href="https://github.com/saiisback"
                          className="underline  hover:bg-black hover:text-white text-xs sm:text-sm break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          /saiisback
                        </a>
                      </p>
                  
                </div>

                <div className="mt-4 sm:mt-6 pt-4 border-t border-border">
                  <h4 className="newspaper-subhead text-base sm:text-lg mb-2">AVAILABILITY</h4>
                  <p className="newspaper-body text-xs sm:text-sm">
                    Open to full-time opportunities, internships, and collaborative projects. Specializing in AI/ML
                    solutions, full-stack development, and product leadership.
                  </p>
                </div>
              </div>

              <div className="newspaper-border p-4 sm:p-6 bg-background relative">
                <div
                  className="confidential-stamp"
                  style={{ fontSize: "8px", top: "5px", right: "5px", transform: "rotate(8deg)" }}
                >
                  URGENT
                </div>
                
                <h3 className="newspaper-subhead text-lg sm:text-xl mb-4 mt-6">SEND MESSAGE</h3>
                <form className="space-y-4">
                  <Input placeholder="Your Name" className="newspaper-body newspaper-border text-sm" />
                  <Input placeholder="Your Email" type="email" className="newspaper-body newspaper-border text-sm" />
                  <Input placeholder="Subject" className="newspaper-body newspaper-border text-sm" />
                  <Textarea placeholder="Your Message" rows={4} className="newspaper-body newspaper-border text-sm" />
                  <Button className="w-full newspaper-body font-bold newspaper-border bg-foreground text-background hover:bg-muted-foreground text-sm">
                    SEND MESSAGE
                  </Button>
                </form>
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-foreground">
              <p className="newspaper-body text-xs sm:text-sm">
                <strong>SPECIALTIES:</strong> AI/ML Engineering • Full-Stack Development • Product Leadership • 4x
                National Hackathon Winner
              </p>
              <p className="newspaper-body text-xs text-muted-foreground mt-2">
                Available for remote work worldwide • Open to relocation for the right opportunity
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer - Newspaper Style */}
      <footer className="bg-foreground text-background py-6 px-6 relative pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4 items-center">
            <div className="newspaper-body text-sm">© 2024 Sai Karthik Ketha</div>
            <div className="text-center">
              <p className="newspaper-body text-sm">PORTFOLIO EDITION • 4X NATIONAL HACKATHON WINNER</p>
            </div>
            <div className="text-right">
              <p className="newspaper-body text-sm">SOFTWARE ENGINEER & AI/ML SPECIALIST</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="breaking-ticker">
        <div className="ticker-wrapper">
          <div className="ticker-label">BREAKING NEWS</div>
          <div className="ticker-content-wrapper">
            <div className="ticker-content newspaper-body font-bold text-sm">
              ● 4X NATIONAL HACKATHON WINNER SAI KARTHIK KETHA AVAILABLE FOR NEW OPPORTUNITIES ● FOUNDING ENGINEER AT
              MARGROS WITH AI/ML EXPERTISE ● EMPOWER AI PLATFORM: 2.2K+ DOWNLOADS, 4.9/5 RATING ● RESUMATCH: 6.4K+
              DOWNLOADS, 12K+ CHROME EXTENSION USERS ● SPECIALIZED IN NEXT.JS, TYPESCRIPT, AI/ML INTEGRATION ● CONTACT:
              karthiksaiketha@gmail.com ● GITHUB: /saiisback ●
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
