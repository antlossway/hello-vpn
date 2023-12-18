import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import BlogHeader from "@/components/blog/BlogHeader"
import { getAllPosts } from "@/lib/wp-rest"
import { Metadata } from "next"
// import ThemeSwitch from "@/components/ThemeSwitch"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about VPN setup, VPN devices and software, and more",
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const { posts, totalNumOfPost } = await getAllPosts()
  return (
    <>
      {/* header with background image */}
      <BlogHeader totalNumOfPost={totalNumOfPost} />
      {/* </div> */}
      {children}
    </>
  )
}
