import { PricingData } from "@/constants/data"
import React from "react"
import PricingCard from "./cards/PricingCard"

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full mt-10 mx-auto px-8 py-8 sm:px-6 sm:py-12 lg:px-8 "
    >
      <h2 className="h2-bold color-h2 text-center uppercase">Pricing</h2>
      {/* <div className="mt-10 max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8"> */}
      <div className=" w-full mx-auto mt-10  flex flex-col sm:flex-row justify-center items-stretch flex-wrap gap-4 md:gap-8">
        {/* Default Plan */}

        {PricingData.map((plan) => (
          <PricingCard
            key={plan.name}
            title={plan.name}
            price={plan.price}
            bill={plan.bill}
            features={plan.features}
            active={plan.active}
          />
        ))}
      </div>
    </section>
  )
}

export default Pricing
