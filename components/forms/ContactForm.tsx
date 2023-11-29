/* eslint-disable react/no-unescaped-entities */
"use client"

import React from "react"

type InputProps = {
  type: string
  placeholder: string
}
const InputItem = ({ type, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
                        w-full
                        rounded-xl
                        py-3
                        px-[14px]
                        text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary-500
                        bg-white dark:bg-darkmode-700
                        "
    />
  )
}
const ContactForm = () => {
  return (
    <form>
      <h3 className="h3-bold uppercase">
        Need B2B VPN?
        <span
          className="ml-2 h3-bold uppercase
                  bg-clip-text text-transparent bg-gradient-to-r from-[#405fcd] to-[#2da7dd]"
        >
          let's team up!
        </span>
      </h3>
      <div className="mt-6 mb-6">
        <InputItem placeholder="Your Name" type="text" />
      </div>
      <div className="mb-6">
        <InputItem placeholder="Your Email" type="email" />
      </div>
      <div className="mb-6">
        <textarea
          rows={5}
          placeholder="Your Message"
          className="
                        w-full
                        rounded-xl
                        py-3
                        px-[14px]
                        text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        bg-white dark:bg-darkmode-700
                        "
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="
                        w-full
                        text-white
                        primary-gradient
                        rounded-full
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
