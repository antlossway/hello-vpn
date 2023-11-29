/* eslint-disable react/no-unescaped-entities */

// import ThemeSwitch from "@/components/ThemeSwitch"
import CornerShape from "@/components/decoration/CornerShape"
import DottedLeft from "@/components/decoration/DottedLeft"
import DottedRight from "@/components/decoration/DottedRight"
import ContactForm from "@/components/forms/ContactForm"
import SiteLogo from "@/components/shared/SiteLogo"
import Image from "next/image"
import React from "react"

const ContactPage = () => {
  return (
    <section className=" py-20 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-4">
          {/* leftside title and info */}
          <div className="w-full px-4">
            <div className="max-w-[570px] mt-6">
              {/* <SiteLogo /> */}
              <div className="mt-4 flex items-start gap-4">
                <figure className="p-3.5 bg-primary-100 rounded-full grid place-content-center place-items-center">
                  <Image
                    src="/icons/icon-mail.svg"
                    width={20}
                    height={20}
                    alt="mail icon"
                    className="block icon-blue object-contain "
                  />
                </figure>
                <div>
                  <p className="text-lg font-semibold">Email Us</p>
                  <p className="text-base text-gray-500 leading-relaxed">
                    Our team is here to help you.
                  </p>
                  <span className="text-primary-500">info@hello-vpn.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* right side contact form */}
          <div className="w-full px-4">
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
