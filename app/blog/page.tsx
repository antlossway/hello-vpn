import React from "react"
import { getAllPosts, getCategories } from "@/lib/wp-rest"
import PostCard from "@/components/cards/PostCard"
import Link from "next/link"
import Image from "next/image"

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL || "60")

const BlogPage = async () => {
  const { posts, totalNumOfPost, categoryArray: tags } = await getAllPosts()

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>
  }

  //   console.log(posts)

  return (
    <>
      <div className="absolute top-0 left-0 right-0 w-full h-[200px]">
        <Image
          src="/blog-background-datacenter.jpeg"
          alt="hero image"
          //   layout="responsive"
          fill
          className="object-cover -z-10"
        />
      </div>
      <main className="container py-10">
        <div className="wrapper p-6 grid place-items-center gap-4 ">
          <h1 className="text-center text-3xl text-white sm:text-4xl font-bold">
            Articles <span className="text-lg">(total {totalNumOfPost})</span>
          </h1>

          {/* categories only shown in bigger screen */}
          {/* <ul className="hidden place-self-start sm:flex sm:gap-4 sm:justify-between">
          {tags.map((tag) => (
            <li key={tag.id}>
              <Link href={`/tags/${tag.slug}`} className="hover:underline">
                {tag.slug}
              </Link>
            </li>
          ))}
        </ul> */}

          {/* grid of article card */}
          <ul className="m-10 mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-10">
            {posts.map((post: any) => (
              <li key={post.slug} className="">
                <PostCard post={post} />
              </li>
            ))}
          </ul>

          {/* <Pagination paginationData={meta.pagination} /> */}
        </div>
      </main>
    </>
  )
}

export default BlogPage
