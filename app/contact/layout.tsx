import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
// import ThemeSwitch from "@/components/ThemeSwitch"

export const metadata = {
  title: "HelloVPN | Contact",
  description: "Contact info@hello-vpn.com",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Navbar withThemeSwitch={false} /> */}
      <Navbar />
      {children}
      {/* <Footer /> */}
      {/* <ThemeSwitch /> */}
    </>
  )
}
