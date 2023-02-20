import axios,{AxiosResponse} from "axios"
import { posts } from "./types"

export const fetchposts =():any=>{

return axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
    return res.data
  })


}



export const singlefetchrq=async (id:string)=>{

    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`).then((res)=>{
        return res.data
      })



}