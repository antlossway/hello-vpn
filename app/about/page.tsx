import { getPage } from "@/lib/wp-rest"
import React from "react"
import parseHTML from "html-react-parser"
import { team } from "@/constants/data"
import TeamCard from "@/components/cards/TeamCard"

export const revalidate = parseInt(process.env.REVALIDATE_INTERVAL || "60")

const About = async () => {
  const post = await getPage("about-us")

  return (
    // calculate height to avoid useless vertical scrolling: height header 6rem (12rem when xl screen), footer 9rem
    <div className=" min-h-[calc(100vh-6rem-9rem)] xl:min-h-[calc(100vh-12rem-9rem)] hero-bg-color py-10">
      <article className=" p-4 mx-auto prose prose-base md:prose-lg prose-slate dark:prose-invert prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline">
        <h1>{post.title}</h1>

        {parseHTML(post.content)}
      </article>
      {/* Team photo */}
      {/* border-t border-gray-200 dark:border-gray-200/20 */}
      <section className="py-2 px-4">
        {/* <h2 className=" h3-bold color-h2">On this project</h2> */}
        <div className=" mx-auto p-4 grid place-items-center  ">
          <div className=" w-full px-4 py-8 sm:px-10 flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-4  ">
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
      </section>
    </div>
  )
}

export default About
