"use client"

import { RemoveKeysFromQuery, formUrlQuery } from "@/lib/utils"
import Link from "next/link"
import { redirect, useRouter, useSearchParams } from "next/navigation"
import React, { useState } from "react"

type Props = {
  tagArray: { id: any; slug: any }[]
}

const TagFilter = ({ tagArray }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const lastFilter = searchParams.get("tag")

  //   useState is to track the current active selected filter and
  // 1. update URL
  // 2. give a different style, to indicate which filter is active
  const [filter, setFilter] = useState(lastFilter || "")

  const toggleFilter = (value: string) => {
    if (filter === value) {
      // tag is already selected, remove it
      setFilter("")
      const newUrl = RemoveKeysFromQuery({
        params: searchParams.toString(),
        keys: ["tag"],
      })

      //   redirect(newUrl)
      router.push(newUrl, { scroll: false })
    } else {
      // tag is not selected, add it
      setFilter(value)
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "tag",
        value,
      })
      router.push(newUrl, { scroll: false })
    }
  }

  return (
    <ul className="mb-6 sm:place-self-start flex items-center flex-wrap gap-4 sm:justify-between">
      {tagArray.map((tag) => (
        <li key={tag.id} onClick={() => toggleFilter(tag.slug)}>
          <Link
            href={`/blog?tag=${tag.slug}`}
            className={`py-2 px-3 grid place-items-center rounded-md
            ${
              filter === tag.slug
                ? " bg-accent-400/60 hover:bg-accent-400 dark:bg-accent-800 dark:hover:bg-accent-800/50"
                : " bg-primary-100/60 hover:bg-primary-100 dark:bg-darkmode-300 dark:hover:bg-darkmode-300/50"
            } `}
          >
            {tag.slug}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default TagFilter
