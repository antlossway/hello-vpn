import Image from "next/image"
import React from "react"

type Props = {
  name: string
  avatar: string
  imgSize?: number
  description: string
  title: string
  otherClasses?: string
}
const TeamCard = ({
  name,
  avatar,
  imgSize = 80,
  title,
  description,
  otherClasses,
}: Props) => {
  return (
    <div className={`px-4 py-2 rounded-md ${otherClasses}`}>
      <Image
        src={avatar}
        alt={`image of ${name}`}
        width={imgSize}
        height={imgSize}
        className={`rounded-full object-cover flex-shrink-0`}
      />

      <div className=" ">
        <h3 className="font-bold text-base color-h2">{name}</h3>
        <span className="text-sm text-gray-500 ">{title}</span>
        <p className="mt-1 text-sm text-gray-800 dark:text-white/60">
          {description}
        </p>
      </div>
    </div>
  )
}

export default TeamCard
