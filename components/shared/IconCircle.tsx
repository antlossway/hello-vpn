import Image from "next/image"
import React from "react"

type Props = {
  icon: string
  title: string
}
const IconCircle = ({ icon, title }: Props) => {
  return (
    <figure className="z-10 p-3.5 bg-primary-100 dark:bg-darkmode-300 rounded-full grid place-content-center place-items-center">
      <Image
        src={icon}
        width={25}
        height={25}
        alt={`icon-${title}`}
        className="icon-blue object-contain "
      />
    </figure>
  )
}

export default IconCircle
