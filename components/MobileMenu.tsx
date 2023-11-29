"use client"

import React, { useState } from "react"
import { Menu, SearchIcon } from "lucide-react"
import { X } from "lucide-react"
import { navlist } from "@/constants/data"
import Link from "next/link"

type Props = {
  setOpen: (open: boolean) => void
}
const MobileMenuModal = ({ setOpen }: Props) => {
  return (
    /* click any empty area of the mobile-menu will close the menu */
    <section
      className="absolute z-20 top-0 right-0 w-full py-10 bg-darkmode-800/50 backdrop-blur-sm  text-white text-4xl flex flex-col justify-center origin-top animate-open-menu"
      onClick={() => setOpen(false)}
    >
      {/* close button */}
      <button
        className="text-5xl self-end px-6 "
        onClick={() => setOpen(false)}
      >
        <X />
      </button>

      <nav
        className="flex flex-col min-h-screen items-center py-8 gap-10"
        aria-label="mobile"
      >
        {navlist.map((item) => (
          <Link
            href={item.path}
            key={item.name}
            className="hover:decoration-2 hover:underline hover:underline-offset-8 hover:decoration-wavy hover:decoration-accent-400"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </section>
  )
}

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="sm:hidden">
      {open ? (
        <MobileMenuModal setOpen={setOpen} />
      ) : (
        <button onClick={() => setOpen(true)}>
          <Menu color="white" />
        </button>
      )}
    </div>
  )
}

export default MobileMenu
