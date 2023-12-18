import React from "react"
import SiteLogo from "../shared/SiteLogo"
import ThemeSwitch from "../ThemeSwitch"
import Link from "next/link"

type Props = {
  totalNumOfPost?: number
}
const BlogHeader = ({ totalNumOfPost }: Props) => {
  return (
    <div className="w-full h-[200px] bg-[url('/blog-background-datacenter.jpeg')]  ">
      {/* overlay shadow */}
      <div className="w-full h-[200px] bg-dark-700/50 p-8 px-10 grid place-items-center">
        {/* header with logo and title */}
        <div className=" mx-auto w-full max-w-5xl p-4 flex justify-between items-center  ">
          <SiteLogo />
          <div className="flex items-center gap-8 ">
            <h1 className="text-center text-3xl text-white sm:text-4xl font-bold">
              <Link href="/blog" className="hover:text-white/80">
                Articles
                {totalNumOfPost ? (
                  <span className="text-lg"> (total {totalNumOfPost})</span>
                ) : null}
              </Link>
            </h1>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHeader
