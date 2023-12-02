import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
// import ThemeSwitch from "@/components/ThemeSwitch"

// below metadata will appear in search engine results and social media
// this overrides the metadata from app/layout.tsx
// export const metadata = {
//   title: "HelloVPN",
//   description:
//     "Outsourcing site-to-site VPN service for your business, no bullshit, it works.",
// }

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
