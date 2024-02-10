import Link from "next/link"
import React from "react"
import ButtonCTA from "../shared/ButtonCTA"
import Image from "next/image"
/* eslint-disable react/no-unescaped-entities */
// use service of mailer lite, problem is loading too slow

const EngageForm = () => {
  return (
    <div>
      <h3 className="h3-bold uppercase">
        Need B2B VPN?
        <span
          className="ml-2 h3-bold uppercase
                  bg-clip-text text-transparent bg-gradient-to-r from-[#405fcd] to-[#2da7dd]"
        >
          let's team up!
        </span>
      </h3>
      {/* mailerlite */}
      {/* <div className="ml-embedded" data-form="WfQMzh"></div> */}
      <div className="grid place-content-center mt-2 -mb-6 ">
        <Image
          src="/icons/hand-click.png"
          alt="hand click icon"
          width={40}
          height={40}
          className=" "
        />
      </div>

      <ButtonCTA
        link="https://forms.gle/K18NqQhjAHUbBC6U7"
        text="Yes, It's A Form!"
        btnId="btn-engage-cta"
        dataUmamiEvent="Engage Form CTA"
        otherClasses="w-full primary-gradient text-white focus:ring-white"
        targetBlank={true}
      />
    </div>
  )
}

export default EngageForm
