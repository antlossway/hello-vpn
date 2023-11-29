import axios from "axios"

export const myAxios = axios.create({
  baseURL: process.env.WP_API_URL,
  // headers: {
  //     Authorization: `Bearer ${process.env.WP_AUTH_TOKEN}`,
  // },
})
