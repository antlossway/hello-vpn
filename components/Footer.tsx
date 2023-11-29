import React from "react"
import BackToTop from "./shared/BackToTop"
import { getCurrentYear } from "@/lib/utils"
import { navlist } from "@/constants/data"
import Link from "next/link"
import Image from "next/image"
import SiteLogo from "./shared/SiteLogo"
import IconCircle from "./shared/IconCircle"

const Footer = () => {
  const currentYear = getCurrentYear()

  return (
    <footer
      className="footer-gradient
    rounded-tl-[120px] px-12 "
    >
      <div className="relative mx-auto max-w-screen-xl p-4 sm:px-6 lg:px-8 ">
        <BackToTop />

        <div className="lg:flex lg:items-end lg:justify-between">
          {/* logo with contact info */}
          <div>
            <div className="flex justify-center lg:justify-start">
              {/* site logo */}
              <SiteLogo />
            </div>

            {/* contact info */}

            <p className="mx-auto max-w-md text-center leading-relaxed text-white/70 lg:text-left">
              <Link href="/contact">info@hello-vpn.com</Link>
            </p>
          </div>

          {/* <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            {navlist.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="text-gray-700 transition hover:text-gray-700/75"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>

        <p className="mt-4 text-center text-sm text-white/30 lg:text-right">
          Copyright &copy; {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
