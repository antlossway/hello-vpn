import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
// import ThemeSwitch from "@/components/ThemeSwitch"

export const metadata = {
  title: "HelloVPN: outsourcing Site-to-Site VPN service",
  description:
    "Outsourcing site-to-site VPN service for your business, no bullshit, it works.",
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
