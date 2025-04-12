import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Construction Company - Building Excellence, Constructing Trust",
  description:
      "Premier construction services with unmatched quality, safety, and innovation for projects of any scale.",
  keywords:
      "construction, building, commercial construction, residential construction, renovation, infrastructure, project management",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
      </body>
      </html>
  )
}
