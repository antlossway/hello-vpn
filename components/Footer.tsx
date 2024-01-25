import React from "react"
import BackToTop from "./shared/BackToTop"
import { getCurrentYear } from "@/lib/utils"
import { navlist } from "@/constants/data"
import Link from "next/link"
import Image from "next/image"
import SiteLogo from "./shared/SiteLogo"
import IconCircle from "./shared/IconCircle"
import SubLogo from "./shared/SubLogo"

const Footer = () => {
  const currentYear = getCurrentYear()

  return (
    <footer
      className=" footer-gradient
    rounded-tl-[120px] px-12"
    >
      <div className=" relative mx-auto max-w-screen-xl p-4 py-8 sm:px-6 lg:px-8 ">
        <BackToTop />

        <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-end md:justify-between">
          {/* logo with contact info */}
          <div className="flex flex-col gap-2 items-center">
            {/* site logo */}
            <SiteLogo />

            {/* contact info */}
            <div className="">
              <Link
                href="/contact"
                className=" mx-auto max-w-md text-center leading-relaxed text-color-link md:text-left"
              >
                info@hello-vpn.com
              </Link>
            </div>
          </div>

          <div className="h-full flex flex-col max-md:items-center ">
            <SubLogo />
            <Link
              href="/about"
              className="mt-4 text-sm text-center md:text-left text-color-link "
            >
              No BS
            </Link>
            <p className=" text-center text-sm text-white/30 md:text-right">
              Copyright &copy; {currentYear}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
