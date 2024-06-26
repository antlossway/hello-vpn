import { getPage } from "@/lib/wp-rest"
import React from "react"
import parseHTML from "html-react-parser"

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL || "60")

const FAQ = async () => {
  const post = await getPage("faq")

  return (
    <div className="hero-bg-color py-10 font-outfit">
      <article className="mx-auto p-4 prose prose-base md:prose-lg prose-slate dark:prose-invert prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline">
        <h1>{post.title}</h1>

        {parseHTML(post.content)}
      </article>
    </div>
  )
}

export default FAQ
