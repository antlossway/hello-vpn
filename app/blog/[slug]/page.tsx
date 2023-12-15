import React from "react"
import BackToList from "@/components/shared/BackToList"
import { getCategories, getSinglePost } from "@/lib/wp-rest"
import parseHTML from "html-react-parser"
import Link from "next/link"
import ThemeSwitch from "@/components/ThemeSwitch"

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL || "60")

// export async function generateStaticParams() {
//   const { posts } = await getBlogPosts(); //deduped
//   if (!posts) return [];

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const post = await getPostByName(slug);

//   if (!post) {
//     return {
//       title: "Post Not Found",
//     };
//   }

//   return {
//     title: post.title,
//     date: formatDate(post.date),
//     description: post.description,
//     tag: post.tag,
//   };
// }
export default async function BlogPost({ params }: any) {
  const { slug } = params
  // const posts = await getBlogPosts()
  // const post = posts.find(post => post.slug === slug )

  const post = await getSinglePost(slug)
  if (!post) return <p>post does not exists</p>

  console.log("debug singlepost tags: ", post.tags)

  return (
    <main className=" container mx-auto">
      <article
        className=" mx-auto p-6 sm:px-10 prose prose-base md:prose-lg prose-slate
       dark:prose-invert prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline"
      >
        <h1 className="capitalize">{post.title}</h1>
        <div className="absolute top-2 right-2">
          <ThemeSwitch />
        </div>

        {parseHTML(post.content)}
      </article>
      <div className="p-6 sm:px-10">
        <BackToList />
      </div>
    </main>
  )
}
