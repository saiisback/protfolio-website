import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Inter, Kalam } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-kalam",
})

export const metadata: Metadata = {
  title: "Sai Karthik | Portfolio",
  description: "Explore Sai Karthik's portfolio: projects, skills, and experience in software engineering and design.",
  generator: "Next.js",
  authors: [{ name: "Sai Karthik", url: "https://github.com/saikarthik" }],
  keywords: [
    "Sai Karthik",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
    "React",
    "TypeScript",
    "Projects",
    "Resume",
    "Frontend",
    "Backend",
    "Design",
  ],
  openGraph: {
    title: "Sai Karthik | Portfolio",
    description: "Discover projects and skills of Sai Karthik, a passionate software engineer.",
    url: "https://your-portfolio-url.com",
    siteName: "Sai Karthik Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sai Karthik Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Karthik | Portfolio",
    description: "Explore Sai Karthik's work in software engineering and design.",
    images: ["https://your-portfolio-url.com/og-image.png"],
    creator: "@yourtwitterhandle",
  },
  themeColor: "#0a192f",
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${kalam.variable} antialiased`}>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
