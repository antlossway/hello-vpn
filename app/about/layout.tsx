import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
// import ThemeSwitch from "@/components/ThemeSwitch"

export const metadata = {
  title: "About",
  description: "About Us",
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
      {/* <Footer /> */}
      {/* <ThemeSwitch /> */}
    </>
  )
}
