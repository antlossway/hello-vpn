import React from "react"
// import formatDate from "@/lib/formatDate"
import Link from "next/link"

export default function PostListItem({ post }: { post: any }) {
  const { slug, title, date } = post
  // console.log("debug post: ", post)

  return (
    <li className="mt-4 text-xl dark:text-white/90 flex flex-col items-center sm:flex-row   ">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/blog/${slug}`}
      >
        {title}
      </Link>
      <span className="ml-6 text-sm">{date}</span>

      {/* <span className="ml-6 text-sm">{pubDate}</span> */}
    </li>
  )
}
