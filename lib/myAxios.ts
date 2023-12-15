import axios from "axios"

export const myAxios = axios.create({
  baseURL: process.env.WP_API_URL,
  headers: {
    Authorization: `Basic ${process.env.WP_BASIC_AUTH}`,
  },
})
