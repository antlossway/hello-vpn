import { services } from "@/constants/data"
import React from "react"
import ServiceCard from "./cards/ServiceCard"

const Services = () => {
  return (
    <section className="w-full mx-auto mt-6 p-4 ">
      <h2 className="h2-bold color-h2 text-center uppercase">Our Services</h2>
      <div className="mt-6 flex flex-col justify-center sm:flex-row flex-wrap gap-6 ">
        {services.map((service) => (
          <ServiceCard {...service} key={service.title} />
        ))}
      </div>
    </section>
  )
}

export default Services
