import Image from "next/image"
import React from "react"
import IconCircle from "../shared/IconCircle"

type Props = {
  icon: string
  title: string
  description: string
}
const ServiceCard = ({ icon, title, description }: Props) => {
  return (
    <div className="mx-auto max-w-[300px] flex flex-col items-center  ">
      <IconCircle icon={icon} title={title} />

      <div className="-mt-6 p-6 h-full rounded-xl border border-primary-100/50 text-center shadow-primary-100/50 shadow-md">
        <h3 className="mt-4 text-lg font-medium color-h2 ">{title}</h3>
        <p className="mt-2 color-paragraph text-sm">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
