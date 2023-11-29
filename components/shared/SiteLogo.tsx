import Image from "next/image"
import Link from "next/link"
import React from "react"

const SiteLogo = () => {
  return (
    <Link href="/">
      <figure className="relative w-[150px] h-[100px] ">
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
          src="/logo/logo_darkmode.svg"
          fill={true}
          alt="logo"
          className=" object-contain"
        />
      </figure>
    </Link>
  )
}

export default SiteLogo
