import React from "react"

import { X } from "lucide-react"
import { navlist } from "@/constants/data"
import Link from "next/link"
type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}
const test = ({ open, setOpen }: Props) => {
  return (
    <section
      className={
        open
          ? "absolute z-10 top-0 right-0 w-full bg-black/50 backdrop-blur-sm  text-white text-4xl flex flex-col justify-center origin-top animate-open-menu"
          : "hidden"
      }
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
          <li key={item.name}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </nav>
    </section>
  )
}

export default test
