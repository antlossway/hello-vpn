import { getAllPosts } from "@/lib/wp-rest"
import { MetadataRoute } from "next"
import { postType } from "./types"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteURL = process.env.SITE_URL || "http://localhost:3000"
  const allPosts = await getAllPosts()

  const home = {
    url: siteURL,
    lastModified: new Date().toString(),
    priority: 1,
  }
  const siteLinks = [
    {
      url: `${siteURL}/blog`,
      lastModified: new Date().toString(),
      priority: 0.9,
    },
    {
      url: `${siteURL}/about`,
      lastModified: new Date().toString(),
      priority: 0.7,
    },
    {
      url: `${siteURL}/faq`,
      lastModified: new Date().toString(),
      priority: 0.6,
    },
    {
      url: `${siteURL}/contact`,
      lastModified: new Date().toString(),
      priority: 0.5,
    },
  ]

  if (!allPosts) return [home, ...siteLinks]

  const postLinks = allPosts.posts?.map((post: postType) => ({
    url: `${siteURL}/blog/${post.slug}`,
    lastModified: post.modified,
    priority: 0.7,
  }))

  // date of most recent post
  home.lastModified = allPosts.posts[0].date

  return [home, ...siteLinks, ...postLinks]
}
