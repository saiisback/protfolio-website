import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sai Karthik Ketha | Full-Stack Developer & Entrepreneur",
  description: "Portfolio of Sai Karthik Ketha - Full-Stack Developer, Entrepreneur, and Founder of Waycup Studios. Specializing in web and app development, delivering modern, efficient, and innovative digital solutions.",
  keywords: "Sai Karthik Ketha, Full-Stack Developer, Web Developer, App Developer, Entrepreneur, Waycup Studios, Portfolio, Modern Web Development, Freelance Developer",
  authors: [{ name: "Sai Karthik Ketha", url: "https://github.com/saiisback" }],
  robots: "index, follow",

  // Open Graph Metadata for link previews
  openGraph: {
    title: "Sai Karthik Ketha | Full-Stack Developer & Entrepreneur",
    description: "Explore the portfolio of Sai Karthik Ketha, a skilled developer and entrepreneur. Specializing in modern web and app development.",
    url: "https://saikarthikketha.vercel.app", // Replace with your actual portfolio URL
    images: [
      {
        url: "/sai.jpg", // Replace with your preview image
        width: 1200,
        height: 630,
        alt: "Sai Karthik Ketha Portfolio",
      },
    ],
    type: "website",
  },

  // Twitter Card Metadata for link previews on Twitter
  twitter: {
    card: "summary_large_image", // Use "summary" for a smaller image, "summary_large_image" for a larger one
    title: "Sai Karthik Ketha | Full-Stack Developer & Entrepreneur",
    description: "Portfolio of Sai Karthik Ketha - Full-Stack Developer and Entrepreneur.",
    images: ["/sai.jpg"], // Replace with your preview image URL
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
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
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