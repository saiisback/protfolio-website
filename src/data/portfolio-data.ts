export const services = [
  {
    label: "01",
    title: "Website Development",
    description:
      "Full-stack web development with modern frameworks, optimized for performance, SEO, and scalability.",
    items: [
      "Next.js & React Applications",
      "E-commerce Platforms",
      "CMS Integration",
      "SEO Optimization",
      "Performance Optimization",
      "Database Design & APIs",
    ],
  },
  {
    label: "02",
    title: "Agentic AI",
    description:
      "Building intelligent AI agents and autonomous systems that learn, adapt, and execute complex workflows.",
    items: [
      "AI Agent Development",
      "LangGraph & AI Orchestration",
      "LLM Integration & Fine-tuning",
      "RAG Systems",
      "Multi-Agent Systems",
      "Workflow Automation with AI",
    ],
  },
  {
    label: "03",
    title: "Automation",
    description:
      "Streamlining business processes and workflows through intelligent automation and system integrations.",
    items: [
      "Workflow Automation",
      "API Integration & Webhooks",
      "Chrome Extension Development",
      "Task Automation Scripts",
      "CI/CD Pipeline Setup",
      "DevOps Automation",
    ],
  },
  {
    label: "04",
    title: "Application Design",
    description:
      "Crafting intuitive digital experiences across platforms with user-centered design and modern interfaces.",
    items: [
      "Mobile Applications",
      "Desktop Applications",
      "SaaS Platforms",
      "Design System Creation",
      "User Experience (UX) Design",
      "Prototyping & User Testing",
    ],
  },
];

export const projects = [
  {
    year: "2025",
    title: "@saiisback/git-secure",
    blurb:
      "A lightweight, zero-dependency NPM utility that automatically encrypts sensitive files before git commits and decrypts them after checkout.",
    tags: ["NPM Package", "Git", "Security"],
    expandedContent: {
      description:
        "A lightweight, zero-dependency (other than husky) NPM utility that automatically encrypts a folder of files before a git commit and decrypts it after a git checkout. Works by serializing a user-defined 'secret folder' into an object, encrypting that object into a single 'vault file,' and adding that vault file to the commit. Uses pre-commit and post-checkout hooks to ensure seamless encryption/decryption workflow.",
      links: {
        npm: "https://www.npmjs.com/package/@saiisback/git-secure",
      },
    },
  },
  {
    year: "2025",
    title: "Masyn - NPM Utility Package",
    blurb:
      "Reusable utilities published as npm package to accelerate development across projects.",
    tags: ["NPM Package", "Utilities", "Developer Tools"],
    expandedContent: {
      description:
        "A comprehensive npm utility package containing reusable functions and utilities designed to accelerate development across multiple projects. Provides common helper functions, validators, formatters, and developer tools that streamline the development workflow.",
      links: {
        website: "https://masyn.vercel.app",
        npm: "https://www.npmjs.com/package/@saiisback/masyn",
      },
    },
  },
  {
    year: "2025",
    title: "Low-level RDBMS",
    blurb:
      "Educational RDBMS implementation with storage, indexing, and query layer built from scratch.",
    tags: ["Database", "Education", "Backend", "Systems Design"],
    expandedContent: {
      description:
        "A fully functional relational database management system built from the ground up. Implements core database concepts including storage engines, indexing strategies (B-trees, hash indexes), query optimization, and transaction management. Created as an educational project to deeply understand how databases work at the system level.",
      links: {
        github: "https://github.com/saiisback/Low-level-rdbms",
      },
      image: "/project-rdbms.png",
    },
  },
  {
    year: "2025",
    title: "Search Engine - Azizah",
    blurb:
      "Custom search engine with crawling, inverted index, and ranking algorithms for educational purposes.",
    tags: ["Search Engine", "Crawling", "Algorithms", "Full-Stack"],
    expandedContent: {
      description:
        "A custom web search engine implementation featuring web crawling capabilities, inverted index data structure, and advanced ranking algorithms. Includes components for URL discovery, content extraction, index building, and relevance scoring. Built to understand the fundamentals of information retrieval systems.",
      links: {
        website: "https://azizah.live",
        github: "https://github.com/saiisback/search-engine",
      },
      image: "/project-search-engine.png",
    },
  },
  {
    year: "2025",
    title: "Handwriting Generator",
    blurb:
      "An ML-powered project to generate handwriting styles for documents using machine learning.",
    tags: ["Machine Learning", "Generator", "Document", "AI"],
    expandedContent: {
      description:
        "A machine learning-powered application that generates realistic handwriting styles for documents. Uses neural networks to learn and replicate individual handwriting patterns, enabling the creation of personalized handwritten documents. Useful for document generation, personalized notes, and educational purposes.",
      links: {
        github: "https://github.com/saiisback/handwriting-gen",
      },
      image: "/project-handwriting.png",
    },
  },
];

export const testimonials = [
  {
    quote:
      "His keen eye for detail and innovative approach impressed our team, turning challenges into creative solutions that set him apart.",
    name: "Maya Lopez",
    role: "CEO, Fundwizz",
  },
  {
    quote:
      "His strong problem-solving skills and dedication to excellence consistently elevated our projects, making a lasting impact on the team.",
    name: "George Jones",
    role: "Product Manager, Gliss",
  },
  {
    quote:
      "With a unique blend of creativity and precision, he brought fresh perspectives that drove meaningful results.",
    name: "Ray Brown",
    role: "Head of Product, ISO",
  },
];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sai-karthik-ketha" },

  { label: "Instagram", href: "https://www.instagram.com/invalid.dev" },
  { label: "Twitter", href: "https://x.com/SAIKARTHIKKETH2" },

];

export const experiences = [
  {
    period: "Jun 2025 — Present",
    role: "Software Engineer Intern",
    company: "resumatch.io",
    description:
      "Building scalable solutions for resume matching and career optimization platforms.",
  },
  {
    period: "Nov 2024 — Aug 2025",
    role: "Founding Engineer & Product Lead",
    company: "Margros",
    description:
      "Leading product development and engineering initiatives as a founding team member.",
  },
  {
    period: "Feb 2025 — Apr 2025",
    role: "Web Developer & AI Contributor",
    company: "RedPaper",
    description:
      "Developed web solutions and AI integrations for Art Attack and Turtle Justice projects.",
  },
  
];

// Tweet IDs from Twitter/X URLs
// Format: https://x.com/username/status/TWEET_ID
export const tweets = [
  {
    id: "1973641711781028151", // https://x.com/MoveClubIN/status/1973641711781028151
    category: "Launch Notes",
  },
  {
    id: "1971815590231998646", // https://x.com/diekneee/status/1971815590231998646
    category: "Design Ops",
  },
  {
    id: "1966594114432188573", // https://x.com/algodevs/status/1966594114432188573
    category: "Process",
  },
  {
    id: "1977712030636261459", // https://x.com/ianjali_th/status/1977712030636261459
    category: "Showcase",
  },
];

// Categories removed - no longer needed for infinite scroll

export const hackathons = [
  {
    event: "Hyperthon Wildcard Edition",
    year: "2025",
    award: "1st Prize",
    prize: "$282",
    location: "Bangalore",
    host: "Base Global",
    highlight:
      "Secured first prize at the Hyperthon Wildcard Edition, hosted by Base Global, showcasing exceptional innovation in web3 development.",
    icon: "🥇",
  },
  {
    event: "Build on Aptos",
    year: "2025",
    award: "3rd Place - Consumer Dapp",
    prize: "$900",
    location: "New Delhi",
    track: "Build on Aptos",
    highlight:
      "Took 3rd place in the Consumer Dapp category on the Build on Aptos track, demonstrating strong product-market fit and user experience.",
    icon: "🥉",
  },
  {
    event: "Rise in AlgoHack",
    year: "2025",
    award: "Best AI x Blockchain Award",
    prize: "$750",
    location: "Bangalore",
    highlight:
      "Kicked off the winning streak by claiming the Best AI x Blockchain Award, combining cutting-edge AI with blockchain innovation.",
    icon: "🏅",
  },
];

