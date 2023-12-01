import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
// import ThemeSwitch from "@/components/ThemeSwitch"

export const metadata = {
  title: "HelloVPN: Site-to-Site VPN as a Service",
  description:
    "Don't let VPN setup and maintenance slow you down. We help you to setup and maintain Site-to-Site IPSec VPN.",
  // icons: {
  //   icon: "/favicon.ico",
  // }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <div className="container mx-auto"> */}
      <div className="hero-bg-color">
        <Navbar />
      </div>
      {/* </div> */}
      {children}
      <Footer />
      {/* <ThemeSwitch /> */}
    </>
  )
}
