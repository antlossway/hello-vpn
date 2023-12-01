import Image from "next/image"
import React from "react"

type Props = {
  icon: string
  title: string
}
const IconCircle = ({ icon, title }: Props) => {
  return (
    <figure className=" z-10 p-2 bg-primary-100 dark:bg-darkmode-300 rounded-full grid place-items-center">
      <Image
        src={icon}
        width={24}
        height={24}
        alt={`icon-${title}`}
        className="icon-blue object-cover "
      />
    </figure>
  )
}

export default IconCircle
