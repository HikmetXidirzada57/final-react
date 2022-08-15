import axios from "axios";
import { API_URL } from "../../link/URL";
import { GET_BLOG_LIST, GET_ONE_BLOG } from "../Constants/BlogConstants";



export const blogListAction=()=>async(dispatch)=>{
  const {data}=await axios.get(`${API_URL}/blog/getAll`)
  dispatch({
    type:GET_BLOG_LIST,
    payload:data
  })
}

export const blogById=(id)=>async(dispatch)=>{
    const {data}=await axios.get(`${API_URL}/blog/${id}`)
    dispatch({
      type:GET_ONE_BLOG,
      payload:data
    })
}

