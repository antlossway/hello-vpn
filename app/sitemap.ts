import { getAllPosts } from "@/lib/wp-rest"
import { MetadataRoute } from "next"
import { postType } from "./types"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteURL = process.env.SITE_URL || "http://localhost:3000"
  const allPosts = await getAllPosts()

  const currentDate = new Date().toLocaleDateString("en-CA") // 2023-12-26
  const home = {
    url: siteURL,
    lastModified: currentDate,
    priority: 1,
  }
  const siteLinks = [
    {
      url: `${siteURL}/blog`,
      lastModified: currentDate,
      priority: 0.9,
    },
    {
      url: `${siteURL}/about`,
      lastModified: currentDate,
      priority: 0.7,
    },
    {
      url: `${siteURL}/faq`,
      lastModified: currentDate,
      priority: 0.6,
    },
    {
      url: `${siteURL}/contact`,
      lastModified: currentDate,
      priority: 0.5,
    },
  ]

  if (!allPosts) return [home, ...siteLinks]

  const postLinks = allPosts.posts?.map((post: postType) => ({
    url: `${siteURL}/blog/${post.slug}`,
    lastModified: post.modified.split("T")[0], // from "2023-12-16T02:58:04" to "2023-12-16"
    priority: 0.7,
  }))

  // date of most recent post
  home.lastModified = allPosts.posts[0].date.split("T")[0] // from "2023-12-16T02:58:04" to "2023-12-16"

  return [home, ...siteLinks, ...postLinks]
}
