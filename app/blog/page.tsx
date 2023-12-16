import React from "react"
import { getAllPosts, getCategories } from "@/lib/wp-rest"
import PostCard from "@/components/cards/PostCard"
import Link from "next/link"
import Image from "next/image"
import PostListItem from "@/components/blog/PostListItem"
import SiteLogo from "@/components/shared/SiteLogo"
import ThemeSwitch from "@/components/ThemeSwitch"
import TagFilter from "@/components/blog/TagFilter"

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL || "60")

type Props = {
  searchParams: {
    tag?: string
  }
}
const BlogPage = async ({ searchParams }: Props) => {
  const { tag } = searchParams

  const { posts, totalNumOfPost, tagMap, tagMapNameToId } = await getAllPosts()

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>
  }

  //   console.log(posts)
  // get all tags from posts
  const tagSet = new Set(posts.map((post: any) => post.tags).flat())
  const tags = Array.from(tagSet)

  // if there is a tag in the url, filter the posts
  let filteredPosts = posts
  if (tag) {
    filteredPosts = posts.filter((post: any) => post.tags.includes(tag))
  }

  return (
    <main>
      {/* background image */}
      <div className="w-full h-[200px] bg-[url('/blog-background-datacenter.jpeg')] grid place-items-center p-8 px-10">
        <div className=" mx-auto w-full max-w-5xl p-4 flex justify-between items-center bg-dark-700/50 shadow-lg ">
          <SiteLogo />
          <div className="flex items-center gap-8 ">
            <ThemeSwitch />
            <h1 className="text-center text-3xl text-white sm:text-4xl font-bold">
              Articles <span className="text-lg">(total {totalNumOfPost})</span>
            </h1>
          </div>
        </div>
      </div>

      {/* TODO: search bar */}

      <section className=" mx-auto container p-4">
        <div className="max-w-7xl p-6 grid place-items-center  ">
          {/* tags */}
          <TagFilter tags={tags} />

          {/* list of articles */}
          <ul className="w-full list-none ">
            {filteredPosts.map((post: any) => (
              <PostListItem key={post.slug} post={post} />
            ))}
          </ul>
          {/* TODO: Pagination */}
          {/* <Pagination paginationData={meta.pagination} /> */}
        </div>
      </section>
    </main>
  )
}

export default BlogPage
