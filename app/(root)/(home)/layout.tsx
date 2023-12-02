import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
// import ThemeSwitch from "@/components/ThemeSwitch"

export const metadata = {
  title: "HelloVPN | Home",
  description:
    "Don't let VPN setup and maintenance slow you down. We are here to handle the heavy lifting for you.",
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
