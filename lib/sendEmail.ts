import nodemailer from "nodemailer"

export default async function sendEmail(data: any) {
  const transporter = nodemailer.createTransport(process.env.EMAIL_SERVER)

  console.log("debug lib/sendEmail.js receive data: ", typeof data, data)

  return await transporter.sendMail({
    // from: process.env.EMAIL_FROM,
    ...data, //to, from, subject, text, html
  })
}
