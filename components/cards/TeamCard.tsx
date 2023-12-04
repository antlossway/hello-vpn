import Image from "next/image"
import React from "react"

type Props = {
  name: string
  avatar: string
  description: string
  title: string
}
const TeamCard = ({ name, avatar, title, description }: Props) => {
  return (
    <div className=" px-4 py-2 w-full rounded-md shadow-sm shadow-primary-100/30 dark:shadow-none flex items-center gap-2 even:flex-row-reverse even:text-right ">
      <Image
        src={avatar}
        alt={`image of ${name}`}
        width={80}
        height={80}
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
