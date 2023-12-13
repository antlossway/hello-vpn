import Image from "next/image"
import Link from "next/link"
import React from "react"

const SubLogo = () => {
  return (
    <Link href="https://ameex-mobile.com" target="_blank">
      {/* logo orig size 223x81 */}
      <figure className=" relative hover:opacity-50 transition w-[100px] h-[36px] xl:w-[150px] xl:h-[54px] ">
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
          src="/logo/logo-powered-by-v2.png"
          fill={true}
          alt="logo ameex mobile"
          className=" object-contain"
        />
      </figure>
    </Link>
  )
}

export default SubLogo
