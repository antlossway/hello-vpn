/* eslint-disable react/no-unescaped-entities */

// import ThemeSwitch from "@/components/ThemeSwitch"
import TeamCard from "@/components/cards/TeamCard"
import CornerShape from "@/components/decoration/CornerShape"
import DottedLeft from "@/components/decoration/DottedLeft"
import DottedRight from "@/components/decoration/DottedRight"
import ContactForm from "@/components/forms/ContactForm"
import SiteLogo from "@/components/shared/SiteLogo"
import { team } from "@/constants/data"
import Image from "next/image"
import React from "react"

const ContactPage = () => {
  return (
    <section className=" py-20 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* leftside title and info */}
          <div className="order-2 lg:order-1 w-full px-4 mb-10 lg:mb-0">
            <div className=" max-w-[570px] h-full flex flex-col justify-between">
              {/* email icon and email */}
              <div className=" p-4 mb-10 flex items-start gap-4">
                <figure className="p-3.5 bg-primary-100 rounded-full grid place-content-center place-items-center">
                  <Image
                    src="/icons/icon-mail.svg"
                    width={20}
                    height={20}
                    alt="mail icon"
                    className="block icon-blue object-contain "
                  />
                </figure>
                <div className="">
                  <p className="text-lg font-semibold">Email Us</p>
                  <p className="text-base text-gray-500 leading-relaxed">
                    Hello! You will hear back from us soon.
                  </p>
                  <span className="text-primary-500">info@hello-vpn.com</span>
                </div>
              </div>

              {/* team */}
              <div className=" space-y-6  ">
                {team.map((member) => (
                  <TeamCard
                    key={member.name}
                    name={member.name}
                    title={member.title}
                    avatar={member.avatar}
                    imgSize={60}
                    description={member.description}
                    otherClasses="flex items-start gap-2 even:flex-row-reverse even:text-right"
                    //  shadow-sm shadow-primary-100/30 dark:shadow-none
                  />
                ))}
              </div>
            </div>
          </div>

          {/* right side contact form */}
          <div className="order-1 w-full px-4">
            <div className="bg-white dark:bg-darkmode-800 relative rounded-lg p-8 sm:p-12 shadow-lg">
              <ContactForm />

              <div>
                <span className="absolute -top-10 -right-9 z-[-1]">
                  <CornerShape fill="#2d50dd" />
                </span>
                <span className="absolute -right-10 top-[90px] z-[-1]">
                  <DottedRight fill="#2dddba" />
                </span>
                <span className="absolute -left-7 -bottom-7 z-[-1]">
                  <DottedLeft fill="#2dddba" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ThemeSwitch put here because for some reason if put outside of this file is not responsive */}
      {/* <ThemeSwitch /> */}
    </section>
  )
}

export default ContactPage
