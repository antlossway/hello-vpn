import axios from "axios"

export const myAxios = axios.create({
  baseURL: process.env.WP_API_URL,
  headers: {
    Authorization: `Basic ${process.env.WP_BASIC_AUTH}`,
  },
})

// use fetch instead of axios because of the caching mechanism provided by next.js
export const myFetch = async (url: string) => {
  const res = await fetch(`${process.env.WP_API_URL}${url}`, {
    headers: {
      Authorization: `Basic ${process.env.WP_BASIC_AUTH}`,
    },
    next: { revalidate: parseInt(process.env.REVALIDATE_INTERVAL || "60") },
  })
  const data = await res.json()
  // console.log("debug data: ", data)
  return data
}
