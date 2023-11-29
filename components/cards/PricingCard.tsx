import React from "react"
import ButtonCTA from "../shared/ButtonCTA"

const FeatureItem = ({ children }: { children: string }) => {
  return (
    <div className="flex gap-2">
      {/* click sign */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 text-primary-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>

      <span className="color-paragraph">{children}</span>
    </div>
  )
}

type Props = {
  title: string
  price: string
  features: string[]
  active?: boolean
}
const PricingCard = ({ title, price, features, active }: Props) => {
  return (
    <div
      className={`p-6 h-full sm:px-8 lg:p-12 rounded-2xl shadow-sm border ${
        active
          ? "border-primary-500   ring-1 ring-primary-500"
          : "border-gray-200"
      } `}
    >
      <div className=" h-full flex flex-col items-stretch gap-4">
        {/* package name and price */}
        <div className="text-center  ">
          <h2 className="text-lg font-medium color-h2">
            {title}
            <span className="sr-only">Plan</span>
          </h2>

          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold color-h2 sm:text-4xl">
              {price}€{/* euro sign */}
            </strong>

            {title !== "Project" ? (
              <span className="text-sm font-medium text-gray-700">/month</span>
            ) : null}
          </p>
        </div>

        {/* features */}
        <ul className="space-y-2 flex-1">
          {features.map((feature) => (
            <li key={feature}>
              <FeatureItem>{feature}</FeatureItem>
            </li>
          ))}
        </ul>

        {/* button */}
        {active ? (
          <ButtonCTA
            link="/contact"
            text="Get Started"
            otherClasses="primary-gradient text-white focus:ring-white"
          />
        ) : (
          <ButtonCTA
            link="/contact"
            text="Get Started"
            otherClasses="border border-primary-500 bg-white text-primary-500 hover:ring-1 hover:ring-indigo-600 active:text-indigo-500 "
          />
        )}
      </div>
    </div>
  )
}

export default PricingCard
