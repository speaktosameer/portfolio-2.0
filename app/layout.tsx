import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sameer Ansari - Full-Stack Developer & UI/UX Designer",
  description:
    "Professional portfolio of Sameer Ansari, a Full-Stack Developer and UI/UX Designer specializing in React, WordPress, and modern web technologies. Based in Nepal, working globally.",
  keywords:
    "Sameer Ansari, Full-Stack Developer, UI/UX Designer, React Developer, WordPress Developer, Nepal, Web Development, Frontend, Backend",
  authors: [{ name: "Sameer Ansari" }],
  creator: "Sameer Ansari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameer-ansari.com.np",
    title: "Sameer Ansari - Full-Stack Developer & UI/UX Designer",
    description: "Professional portfolio showcasing React development, UI/UX design, and WordPress solutions.",
    siteName: "Sameer Ansari Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Ansari - Full-Stack Developer & UI/UX Designer",
    description: "Professional portfolio showcasing React development, UI/UX design, and WordPress solutions.",
    creator: "@speaktosameer",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Analytics />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
