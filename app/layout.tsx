import type React from "react"
import type { Metadata } from "next"
import { Caveat, DM_Sans } from "next/font/google"
import "./globals.css"

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Alexandra Chen - Dancer, Artist & Researcher",
  description:
    "Portfolio of competitive dancer, visual artist, theater performer, and neurological dance injury researcher",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${caveat.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
