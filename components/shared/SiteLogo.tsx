import Image from "next/image"
import Link from "next/link"
import React from "react"

const SiteLogo = () => {
  return (
    <Link href="/">
      <figure className=" relative hover:opacity-50 transition w-[150px] h-[45px] xl:w-[250px] xl:h-[75px] ">
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
          // width={150}
          // height={100}
          fill={true}
          alt="logo"
          className=" object-contain"
        />
      </figure>
    </Link>
  )
}

export default SiteLogo
