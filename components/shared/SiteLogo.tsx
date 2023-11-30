import Image from "next/image"
import Link from "next/link"
import React from "react"

const SiteLogo = () => {
  return (
    <Link href="/">
      <figure className=" relative hover:opacity-50 transition ">
        {/* <Image
          src="/logo/logo_lightmode.svg"
          fill={true}
          alt="logo"
          className="dark:hidden object-contain"
        />
        <Image
          src="/logo/logo_darkmode.svg"
          fill={true}
          alt="logo"
          className="hidden dark:block object-contain"
        /> */}
        <Image
          // src="/logo/logo_darkmode.svg"
          src="/logo/logo-puffin-white.png"
          width={150}
          height={100}
          alt="logo"
          className=" object-contain"
        />
      </figure>
    </Link>
  )
}

export default SiteLogo
