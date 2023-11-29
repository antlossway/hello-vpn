import React from "react"
import Image from "next/image"
import Link from "next/link"
import parseHTML from "html-react-parser"

type PostCardProps = {
  post: {
    title: string
    slug: string
    featuredImgUrl: string
    category: string
    excerpt: string
  }
}
const PostCard = ({ post }: PostCardProps) => {
  return (
    // <article className="flex bg-white transition hover:shadow-xl dark:bg-gray-900 dark:shadow-gray-800/25">
    <article
      className="relative h-full bg-white dark:bg-stone-300 rounded-lg shadow-md
      flex flex-col items-center gap-4 text-center
    "
    >
      {/* post featured image */}
      <figure className="relative w-full h-[200px] overflow-hidden">
        <Link href={`/blog/${post.slug}`}>
          <Image
            className="object-cover "
            src={post.featuredImgUrl}
            alt="post image"
            fill
          />
        </Link>
      </figure>

      {/* post title and excerpt */}
      <div
        className="w-full p-6 flex-1
        flex flex-col items-center gap-2 text-center"
      >
        <Link href={`/blog/${post.slug}`}>
          <h1 className="text-2xl">{post.title}</h1>
        </Link>
        <div className="text-sm text-gray-700 max-w-[50ch] line-clamp-3 ">
          {parseHTML(post.excerpt)}
        </div>
      </div>

      {/* category */}
      {/* <span className="self-start p-4  font-medium text-xs uppercase italic text-purple-500 ">
          {post.category}
        </span> */}
    </article>
  )
}

export default PostCard
