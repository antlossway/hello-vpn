import React from "react"

const BackToTop = () => {
  return (
    // sm:end-6 sm:top-6 lg:end-8 lg:top-8
    <div className="absolute end-4 top-4 ">
      <a
        className="inline-block rounded-full bg-primary-500 dark:bg-accent-600 p-2 text-white shadow transition  sm:p-3 lg:p-4"
        href="#navbar"
      >
        <span className="sr-only">Back to top</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  )
}

export default BackToTop
