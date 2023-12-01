import { whyus } from "@/constants/data"
import Image from "next/image"
import React from "react"
import IconCircle from "./shared/IconCircle"

const WhyUs = () => {
  return (
    <section className="mt-10 px-4 py-8 hero-bg-color ">
      <h2 className="h2-bold color-h2 text-center uppercase">Why Us</h2>
      {/* [&>*]:border-b [&>*]:border-primary-100/20 */}
      <div
        className=" mt-8 mx-auto px-4 divide-y divide-primary-100/20
       "
      >
        {whyus.map((item: any) => (
          // Whyus Card
          <section
            key={item.title}
            className=" relative mx-auto flex flex-col justify-center items-center gap-20
              md:flex-row
               md:[&:nth-child(odd)]:flex-row-reverse
                 dark:text-white/80
                 overflow-hidden

              "
          >
            {/* item text */}
            <div className="p-4 sm:p-8   ">
              <div className=" flex justify-start items-center gap-2">
                {/* smaller screen switch to icon instead of image */}
                <figure className="md:hidden ">
                  <IconCircle icon={item.icon} title={item.title} />
                </figure>
                <h4 className="h4-bold color-h2 uppercase">{item.title}</h4>
              </div>
              <p className="mt-2 max-w-[50ch] color-paragraph text-sm">
                {item.description}
              </p>
            </div>

            {/* mobile screen: image hidden, replace by icons */}
            <Image
              className="hidden md:block object-cover "
              // fill={true}
              width={250}
              height={250}
              alt={item.title}
              src={item.image}
            />
          </section>
        ))}
      </div>
    </section>
  )
}

export default WhyUs
