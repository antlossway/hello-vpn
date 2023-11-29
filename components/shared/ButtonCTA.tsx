import Link from "next/link"
import React from "react"

type Props = {
  link: string
  text: string
  otherClasses?: string
}
const ButtonCTA = ({ link, text, otherClasses = "" }: Props) => {
  return (
    <Link
      href={link}
      // target="_blank"
      className={`${otherClasses} mt-8 block rounded-full  px-12 py-3 text-center text-sm font-medium  transition focus:outline-none focus:ring  }`}
    >
      <span className="text-center">{text}</span>
    </Link>
  )
}

export default ButtonCTA
