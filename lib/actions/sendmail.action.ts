"use server"
import sendEmail from "@/lib/sendEmail"
import { NextResponse } from "next/server"

type EmailDataProps = {
  type: string
  to?: string
  subject: string
  message: string
}
export const sendmail = async ({
  type,
  to,
  subject,
  message,
}: EmailDataProps) => {
  // newSubscriber(from me to new subscriber, confirm their subscription)
  // newsLetter (from me to subscriber)
  // newMessage (from me to myself: when user fill send me a message form)

  let sendTo = ""
  let from = ""

  if (type === "newMessage") {
    sendTo = process.env.EMAIL_PERSONAL!
    from = process.env.EMAIL_FROM!
  } else {
    sendTo = to!
    from = process.env.EMAIL_FROM!
  }

  const emailData = {
    to: sendTo,
    from: from,
    subject: subject,
    text: message,
    html: `<div>${message}</div>`,
  }

  // console.log("debug sendEmail action: ", emailData)

  return await sendEmail(emailData)
    .then((response) => {
      console.log("debug sendEmail action: ", response)
      // return new NextResponse("ok", { status: 200 })
      return { status: "OK" }
    })
    .catch((err) => {
      // return new NextResponse(err.toString(), { status: 500 })
      return { status: "ERROR" }
    })
}
