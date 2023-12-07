import { getPage } from "@/lib/wp-rest"
import React from "react"
import parseHTML from "html-react-parser"
import { team } from "@/constants/data"
import TeamCard from "@/components/cards/TeamCard"

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL || "60")

const About = async () => {
  const post = await getPage("about-us")

  return (
    <div className=" min-h-screen hero-bg-color py-10">
      <article className=" p-4 mx-auto prose prose-base md:prose-lg prose-slate dark:prose-invert prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline">
        <h1>{post.title}</h1>

        {parseHTML(post.content)}
      </article>
      <div className=" mt-10 mx-auto p-4 grid place-items-center  ">
        <div className=" p-4 sm:px-10 flex flex-wrap flex-col items-center sm:flex-row  gap-4 border-t border-gray-200 dark:border-gray-200/20">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              title={member.title}
              avatar={member.avatar}
              description={member.description}
              otherClasses=" max-w-[350px] flex flex-col items-start gap-2 shadow-sm shadow-primary-100/30 dark:shadow-none"
            />
          ))}
        </div>
      </div>
      {/* team */}
    </div>
  )
}

export default About
