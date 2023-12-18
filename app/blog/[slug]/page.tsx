import React from "react"
import BackToList from "@/components/shared/BackToList"
import { getSinglePost } from "@/lib/wp-rest"
import parseHTML from "html-react-parser"
import ThemeSwitch from "@/components/ThemeSwitch"
import BlogHeader from "@/components/blog/BlogHeader"

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL || "60")

export async function generateMetadata({ params }: any) {
  const { slug } = params
  const post = await getSinglePost(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    date: post.date,
    description: post.excerpt,
    keywords: post.tags,
  }
}
export default async function BlogPost({ params }: any) {
  const { slug } = params
  const post = await getSinglePost(slug)
  if (!post) return <p>post does not exists</p>

  // console.log("debug singlepost tags: ", post.tags, Array.isArray(post.tags))

  return (
    // className=" container mx-auto"
    <main>
      <div className="p-6 sm:px-10">
        <BackToList />
      </div>
      <article
        className=" mx-auto p-6 sm:px-10 prose prose-base md:prose-lg prose-slate
       dark:prose-invert prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline"
      >
        <h1 className="capitalize">{post.title}</h1>
        {/* <div className="absolute top-2 right-2">
          <ThemeSwitch />
        </div> */}

        {parseHTML(post.content || "")}
      </article>
      <div className="p-6 sm:px-10">
        <BackToList />
      </div>
    </main>
  )
}
