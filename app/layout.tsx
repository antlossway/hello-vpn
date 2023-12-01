import type { Metadata } from "next"
import { Inter, Josefin_Sans } from "next/font/google"
import "./globals.css"
import ThemeSwitch from "@/components/ThemeSwitch"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/context/ThemeProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
})

export const metadata: Metadata = {
  title: "Hello VPN",
  description:
    "Outsourcing site-to-site VPN service for your business, no bullshit, it works.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${josefinSans.variable} antialiased  text-dark-800 dark:bg-darkmode-900 dark:text-light-100 `}
      >
        <ThemeProvider>{children}</ThemeProvider>
        {/* ThemeSwitch has to be at the bottom */}
        {/* <ThemeSwitch /> */}
      </body>
    </html>
  )
}
