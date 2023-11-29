import Image from "next/image"
import React from "react"

import { navlist } from "@/constants/data"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import ThemeSwitch from "./ThemeSwitch"
import SiteLogo from "./shared/SiteLogo"

type Props = {
  withThemeSwitch?: boolean
}

const Navbar = ({ withThemeSwitch = true }: Props) => {
  return (
    <nav
      id="navbar"
      className="z-200 p-4 flex justify-between items-center footer-gradient rounded-bl-[80px] sm:px-10 lg:px-16 "
    >
      {/* icon */}

      <Link href="/">
        <SiteLogo />
      </Link>

      <div className="flex items-center gap-10">
        {/* theme switch */}
        {withThemeSwitch === false ? null : <ThemeSwitch />}

        {/* menu when desktop */}
        <div className="hidden sm:flex justify-center items-center gap-10">
          {navlist.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className="text-white/80 transition hover:text-gray-700/75 dark:text-white/80 dark:hover:text-white/60"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <MobileMenu />
    </nav>
  )
}

export default Navbar
