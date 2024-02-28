import Image from "next/image"
import React from "react"

const WhatsAppBtn = () => {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const url = `https://wa.me/${number}`
  return (
    <a
      aria-label="Chat on WhatsApp"
      target="_blank"
      href={url}
      id="contact-whatsapp-chat"
      data-umami-event="contact-whatsapp-chat"
    >
      <Image
        alt="Chat on WhatsApp"
        src="/WhatsAppButtonGreenMedium.png"
        width={283}
        height={60}
      />
    </a>
  )
}

export default WhatsAppBtn
