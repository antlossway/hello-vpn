/* eslint-disable react/no-unescaped-entities */
"use client"

import { sendmail } from "@/lib/actions/sendmail.action"
import React from "react"

interface FormValues {
  name: string
  email: string
  message: string
}
type InputProps = {
  type: string // input | textareas
  contentType?: string // text | email | password
  placeholder: string
  name: keyof FormValues
  onChange: (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  values: FormValues
}
const InputItem = ({
  type,
  contentType,
  name,
  placeholder,
  values,
  onChange,
}: InputProps) => {
  if (type === "textarea") {
    return (
      <textarea
        name={name}
        value={values[name]}
        required={true}
        onChange={onChange}
        rows={5}
        placeholder={placeholder}
        className="input-style"
      />
    )
  } else {
    return (
      <input
        type={contentType}
        name={name}
        value={values[name]}
        required={true}
        onChange={onChange}
        placeholder={placeholder}
        className="input-style"
      />
    )
  }
}
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      message: "",
    })
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // simulate delay
    // await new Promise((resolve) => setTimeout(resolve, 1000))

    const res = await sendmail({
      type: "newMessage",
      subject: `${values.name} from ${values.email} send you a message`,
      message: values.message,
    })

    console.log(res)

    if (res.status === "ERROR") {
      setFormStatus("error")
      setIsSubmitting(false)
      return
    }

    setIsSubmitting(false)
    setFormStatus("success")
    resetForm()
  }

  const onChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value })
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <InputItem
          name="name"
          type="input"
          contentType="text"
          placeholder="Your Name"
          onChange={onChange}
          values={values}
        />
      </div>
      <div className="mb-6">
        <InputItem
          name="email"
          placeholder="Your Email"
          type="input"
          contentType="email"
          onChange={onChange}
          values={values}
        />
      </div>
      <div className="mb-6">
        <InputItem
          name="message"
          placeholder="Your Message"
          type="textarea"
          onChange={onChange}
          values={values}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={` ${isSubmitting && "animate-pulse"}
                        w-full
                        text-white
                        primary-gradient
                        rounded-full
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        `}
        >
          {isSubmitting ? "Sending ..." : "Send Message"}
        </button>
      </div>

      {/* if message submitted successfully, notify the user */}
      {formStatus === "success" && (
        <div className="mt-6 text-center text-green-600 dark:text-green-400">
          Thank you, we will come back to you soon!
        </div>
      )}
      {/* if error, notify the user */}
      {formStatus === "error" && (
        <div className="mt-6 text-center text-red-600 dark:text-red-400">
          Oops, something went wrong, please try again later.
        </div>
      )}
    </form>
  )
}

export default ContactForm
