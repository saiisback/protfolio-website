import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Merriweather } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/next';

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Sai Karthik Ketha - Software Engineer & AI/ML Engineer",
  description:
    "Personal portfolio of Sai Karthik Ketha - Software Engineer & AI/ML Engineer",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${merriweather.variable}`}>
      <body>{children}
        <Analytics />
      </body>
    </html>
  )
}
