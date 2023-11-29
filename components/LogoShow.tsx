import Image from "next/image"
import React from "react"

const LogoShow = () => {
  return (
    <div className="px-2 mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 ">
      <Image
        width={150}
        height={150}
        alt="logo cisco"
        src="/logo/logo_cisco.png"
        className="grayscale-[50%] object-cover"
      />
      <Image
        width={150}
        height={150}
        alt="logo juniper"
        src="/logo/logo_juniper.png"
        className="grayscale object-cover"
      />
      <Image
        width={150}
        height={150}
        alt="logo strongswan"
        src="/logo/logo_strongswan.png"
        className="grayscale-[50%] object-cover"
      />
      <Image
        width={150}
        height={150}
        alt="logo openvpn"
        src="/logo/logo_openvpn.png"
        className="grayscale-[50%] object-cover"
      />
    </div>
  )
}

export default LogoShow
