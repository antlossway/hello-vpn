import Link from "next/link"
import React from "react"

type Props = {
  link: string
  text: string
  otherClasses?: string
  btnId?: string
  dataUmamiEvent?: string
  targetBlank?: boolean
}
const ButtonCTA = ({
  link,
  text,
  btnId,
  targetBlank = false,
  dataUmamiEvent,
  otherClasses = "",
}: Props) => {
  return (
    <Link
      href={link}
      target={targetBlank ? "_blank" : undefined}
      // target="_blank"
      className={`${otherClasses} mt-8 block rounded-full  px-12 py-3 text-center text-sm font-medium  transition focus:outline-none focus:ring  }`}
      id={btnId || undefined}
      data-umami-event={dataUmamiEvent || undefined}
    >
      <span className="text-center">{text}</span>
    </Link>
  )
}

export default ButtonCTA
