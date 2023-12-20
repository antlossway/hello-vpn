import { formatDate } from "@/lib/utils"
// wordpress rest API

import { myAxios } from "@/lib/myAxios"
import qs from "qs"
import { postType } from "@/app/types"
// import { postType, postsType } from "../../data";

// example query
//https://example.com/wp-json/wp/v2/posts?categories=13&per_page=100

// yoursite.com/wp-json/wp/v2/posts?orderby=date&order=desc
// the number of posts is included in reseponse HTTP header
// res.headers.get("x-wp-totalpages") || 0;

//search post by tags
//https://13.212.76.243/wp-json/wp/v2/posts?tags=4

// get key fields from posts
// const extractDataFromPosts = (posts: any, tagMap?: any): postType[] => {
//   const postsData = posts.map((post: any) => {
//     return {
//       slug: post?.slug,
//       title: post?.title.rendered,
//       // content: post?.content.rendered,
//       excerpt: post?.excerpt.rendered,
//       featuredImgUrl: post?.acf.featured_image_url,
//       tags: post?.tags.map((tagId: number) => tagMap.get(tagId)), // array of tag names
//       date: formatDate(post?.date),
//     }
//   })

//   return postsData
// }

const extractDataFromPost = (
  post: any,
  tagMap?: any,
  includesContent: boolean = false
): postType => {
  if (includesContent) {
    // getSinglePost
    return {
      slug: post?.slug,
      title: post?.title.rendered,
      content: post?.content.rendered,
      excerpt: post?.excerpt.rendered,
      featuredImgUrl: post?.acf.featured_image_url,
      tags: post?.tags.map((tagId: number) => tagMap.get(tagId)), // array of tag names
      date: formatDate(post?.date),
      modified: formatDate(post?.modified),
    }
  }

  return {
    slug: post?.slug,
    title: post?.title.rendered,
    excerpt: post?.excerpt.rendered,
    featuredImgUrl: post?.acf.featured_image_url,
    tags: post?.tags.map((tagId: number) => tagMap.get(tagId)), // array of tag names
    date: formatDate(post?.date),
    modified: formatDate(post?.modified),
  }
}

export async function getAllPosts() {
  // const res = await myAxios.get("/posts?_embed");
  // const resCat: Map<number, string> = await getCategories(); // Map id => name

  // const { categoryMap, categoryMapNameToId } = await getCategories() // (hash like) Map id => name

  // const categoryArray = Array.from(categoryMap, ([id, slug]) => ({
  //   id,
  //   slug,
  // }))

  const { tagMap, tagMapNameToId } = await getTags() // (hash like) Map id => name
  const tagArrOfObj = Array.from(tagMap, ([id, slug]) => ({
    id,
    slug,
  }))

  const res = await myAxios.get("/posts?orderby=date&order=desc")
  const data = res.data
  const posts = data.map((post: any) => extractDataFromPost(post, tagMap))

  const totalNumOfPost = parseInt(res.headers["x-wp-total"])
  //   console.log({ totalNumOfPost }, { posts })

  const result = {
    posts: posts,
    totalNumOfPost,
    tagMap, // map Tag Id to Name
    tagMapNameToId, // map Tag Name to Id
  }
  // console.log(result);
  return result
}

//below is using the result of getAllPosts to extract array of categories(number)
// export async function getCategories(): Promise<number[]> {
//   const { posts, totalNumOfPost } = await getAllPosts(); //deduped

//   if (!posts) return [];

//   const categories = new Set<number>(
//     posts.map((post: postType) => post.category).flat()
//   );

//   return Array.from(categories);
// }

// change below function to arrow function due to some strange typescript error, and add named export "export { getCategories }"
// export async function getCategories(): Promise<{Map<number, string>, Map<string,number>}>
const getCategories = async () => {
  const res = await myAxios.get("/categories?_fields=id,slug")
  const data = res.data //array of object
  // console.log(data, Array.isArray(data));

  const categoryMap = new Map() // id to name
  const categoryMapNameToId = new Map() // name to id

  data?.forEach((item: any) => {
    categoryMap.set(item.id, item.slug)
    categoryMapNameToId.set(item.slug, item.id)
  })

  // console.log(categoryMap, typeof categoryMap);
  return { categoryMap, categoryMapNameToId }
}
export { getCategories }

// getTags
export const getTags = async () => {
  const res = await myAxios.get("/tags?_fields=id,slug")
  const data = res.data //array of object
  // console.log(data, Array.isArray(data));

  const tagMap = new Map() // id to name
  const tagMapNameToId = new Map() // name to id

  data?.forEach((item: any) => {
    tagMap.set(item.id, item.slug)
    tagMapNameToId.set(item.slug, item.id)
  })

  return { tagMap, tagMapNameToId }
}
// export { getTags }

export async function getSinglePost(slug: string) {
  const { tagMap, tagMapNameToId } = await getTags() // Map id => name

  const query = qs.stringify(
    {
      slug: slug,
    },
    {
      encodeValuesOnly: true,
    }
  )

  const res = await myAxios.get(`/posts?${query}`)
  const post = res.data[0]
  // console.log(post);
  const postData = extractDataFromPost(post, tagMap, true)

  // console.log("debug getSinglePost: ", postData)
  return postData
}

export async function getRecentPosts(num: number) {
  const { posts, totalNumOfPost } = await getAllPosts() //deduped

  if (!posts) return []

  if (num >= totalNumOfPost) {
    return posts
  } else {
    return posts.slice(0, num)
  }
}

export async function getPage(slug: string) {
  const query = qs.stringify(
    {
      slug: slug,
    },
    {
      encodeValuesOnly: true,
    }
  )
  const res = await myAxios.get(`/pages?${query}`)
  const page = res.data[0]

  return {
    slug: page?.slug,
    title: page?.title.rendered,
    content: page?.content.rendered,
  }
}
