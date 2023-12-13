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
      <div className="flex items-center gap-2">
        <Image
          src={avatar}
          alt={`image of ${name}`}
          width={imgSize}
          height={imgSize}
          className={`rounded-full object-cover flex-shrink-0`}
        />
        <div>
          <h3 className="font-bold text-base color-h2">{name}</h3>
          <span className="block text-sm text-gray-500 ">{title}</span>
          <span className="text-xs font-medium text-gray-600 ">
            AMEEX|Mobile
          </span>
        </div>
      </div>

      <p className="mt-1 text-sm text-gray-800 dark:text-white/60">
        {description}
      </p>
    </div>
  )
}

export default TeamCard
