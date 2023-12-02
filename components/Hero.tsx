/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import React from "react"
import ButtonCTA from "./shared/ButtonCTA"

const Hero = () => {
  return (
    <section
      id="hero"
      className="px-6 py-8 overflow-hidden hero-bg-color grid justify-items-center items-center md:grid-cols-2"
    >
      {/* leftside text */}
      <div className="p-4 md:p-12 lg:px-16  flex flex-col ">
        <div className="flex-1 max-w-xl text-left ltr:sm:text-left rtl:sm:text-right ">
          <h1 className="h1-bold ">
            <span>B2B VPN service by </span>
            <span className="text-primary-500  ">Hello-VPN</span>
          </h1>
          <p className="text-gray-600 dark:text-white/80 mt-4">
            Site-to-Site VPN is the common solution to secure the connection
            between two sites. However, it can be a challenging task due to
            various requirements.{" "}
          </p>
          <p className="mt-1 text-xl tracking-tight font-bold font-josefin ">
            Don't let VPN setup and maintenance slow you down.
          </p>{" "}
          <p className="text-gray-600 dark:text-white/80">
            We are here to handle the heavy lifting for you.
          </p>
          <div className="mt-4 md:mt-8">
            <ButtonCTA
              link="/contact"
              text="Get Started Today"
              otherClasses="w-fit primary-gradient text-white focus:ring-white"
            />
          </div>
        </div>

        {/* qualification */}
        {/* <div className="mt-8 flex gap-10">
          <div>
            <p className="text-2xl font-bold text-dark-800 dark:text-white/80">
              15
              <span className="text-3xl text-primary-500">+</span>
            </p>
            <p className="color-paragraph text-sm ">years of experience</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-dark-800 dark:text-white/90">
              10
              <span className="text-3xl text-primary-500">+</span>
            </p>
            <p className="color-paragraph ">satisfied customers</p>
          </div>
        </div> */}
      </div>

      <Image
        width={500}
        height={500}
        alt="vpn cloud"
        src="/clouds-with-router.png"
        className="hidden md:block object-cover "
      />
    </section>
  )
}

export default Hero
