import type { Metadata } from "next"
import { Inter, Josefin_Sans } from "next/font/google"
import "./globals.css"
import ThemeSwitch from "@/components/ThemeSwitch"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/context/ThemeProvider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
})
// favicon.ico and opengraph-image.png are in /app, not in /public
export const metadata: Metadata = {
  title: {
    template: "%s | Hello-VPN",
    default: "Hello-VPN",
  },
  description:
    "Outsourcing site-to-site VPN service for your business, no bullshit, it works. Powered by AMEEX|mobile.",
  metadataBase: new URL(process.env.SITE_URL!),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
  keywords: [
    "VPN",
    "IPsec",
    "Cisco",
    "Juniper",
    "BGP",
    "GRE",
    "DMVPN",
    "site-to-site",
    "site to site",
    "outsourcing",
  ],
  // <link rel="canonical" href="https://hello-vpn.com/"> in head to indicate the preferred canonical URL for the page
  alternates: {
    canonical: "/",
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
      <Script
        async
        // src="https://umami-analytics-tawny.vercel.app/script.js"
        // data-website-id="fecd0ddb-b5b1-4916-81b0-f1880ff84813"
        src="https://umami-vercel-eta.vercel.app/script.js"
        data-website-id="8d9bf735-2a3a-4565-8f68-d4d072457440"
      />
    </html>
  )
}
