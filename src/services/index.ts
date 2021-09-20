import axios from "axios"

const baseUrl = "http://127.0.0.1:3000"
export const agent = axios.create({ baseURL: baseUrl })
