import Image from "next/image"
import React from "react"

import { navlist } from "@/constants/data"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import ThemeSwitch from "./ThemeSwitch"
import SiteLogo from "./shared/SiteLogo"
import SubLogo from "./shared/SubLogo"

type Props = {
  withThemeSwitch?: boolean
}

const Navbar = ({ withThemeSwitch = true }: Props) => {
  return (
    <header>
      <nav
        id="navbar"
        className=" z-200 h-24 xl:h-48 transition-height px-8 py-6 flex justify-between items-center footer-gradient rounded-bl-[80px] sm:px-12 lg:px-16 font-outfit "
      >
        {/* icon */}
        {/* <div className="flex gap-4">
          <div className="self-center"> */}
        <SiteLogo />
        {/* </div>
          <div className=" hidden lg:block lg:self-start">
            <SubLogo />
          </div>
        </div> */}

        <div className="flex items-center gap-10">
          {/* theme switch */}
          {withThemeSwitch === false ? null : <ThemeSwitch />}

          {/* menu when desktop */}
          <div className="hidden sm:flex justify-center items-center gap-10">
            {navlist.map((item) => (
              <Link
                href={item.path}
                key={item.name}
                className="text-color-link"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <MobileMenu />
      </nav>
    </header>
  )
}

export default Navbar
