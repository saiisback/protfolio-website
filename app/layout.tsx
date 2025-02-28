import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react"

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sai Karthik Ketha | Full-Stack Developer & Entrepreneur",
  description: "Full-Stack Developer, AI Enthusiast, and Founder of Waycup Studios. Explore modern web and app development projects.",
  keywords: "Full-Stack Developer, AI, Web Development, Freelance Developer, Next.js, React, Tailwind CSS, TypeScript",
  authors: [{ name: "Sai Karthik Ketha", url: "https://github.com/saiisback" }],
  robots: "index, follow",
  openGraph: {
    title: "Sai Karthik Ketha | Full-Stack Developer & Entrepreneur",
    description: "Portfolio showcasing modern web and app development projects.",
    url: "https://saikarthikketha.tech",
    images: [{ url: "/sai.jpg", width: 1200, height: 630, alt: "Sai Karthik Ketha Portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Karthik Ketha | Full-Stack Developer & Entrepreneur",
    description: "Explore the portfolio of Sai Karthik Ketha, a skilled developer and entrepreneur.",
    images: ["/sai.jpg"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>

      <Analytics/>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}