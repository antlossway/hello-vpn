import Hero from "@/components/Hero"
import LogoShow from "@/components/LogoShow"
import Navbar from "@/components/Navbar"
import Pricing from "@/components/Pricing"
import Services from "@/components/Services"
import WhyUs from "@/components/WhyUs"
import Image from "next/image"

export default function Home() {
  return (
    <main className=" ">
      {/* <div className="container mx-auto"></div> */}
      <Hero />
      {/* cisco, juniper, strongswan, openvpn */}
      <LogoShow />

      <div className="container mx-auto">
        <Services />
      </div>
      <WhyUs />

      <div className="container mx-auto">
        <Pricing />
      </div>
    </main>
  )
}
