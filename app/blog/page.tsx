import React from "react"
import { getAllPosts } from "@/lib/wp-rest"
import PostListItem from "@/components/blog/PostListItem"
import SiteLogo from "@/components/shared/SiteLogo"
import ThemeSwitch from "@/components/ThemeSwitch"
import TagFilter from "@/components/blog/TagFilter"
import { Metadata } from "next"
import BlogHeader from "@/components/blog/BlogHeader"

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL || "60")

type Props = {
  searchParams: {
    tag?: string
  }
}
const BlogPage = async ({ searchParams }: Props) => {
  const { tag } = searchParams

  const { posts, totalNumOfPost } = await getAllPosts()

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
      {/* TODO: search bar */}

      <section className=" mx-auto container p-4">
        <div className="max-w-7xl p-6 grid place-items-center  ">
          {/* tags */}
          <TagFilter tags={tags as string[]} />

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
