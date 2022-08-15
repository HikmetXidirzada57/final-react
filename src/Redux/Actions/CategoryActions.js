import axios from "axios"
import { API_URL } from "../../link/URL"
import {GET_CATEGORY_LIST,GET_ONE_CATEGORY} from '../Constants/CategoryConstants'

export const listCategories=()=>async(dispatch)=>{
 const {data}=await axios.get(`${API_URL}/category/getAllCategory`)
  dispatch({
    type:GET_CATEGORY_LIST,
    payload:data
  })
}

export const categoryByIdAction=(id)=>async(dispatch)=>{
  const {data}=await axios.get(`${API_URL}/category/${id}`)
  dispatch({
    type:GET_ONE_CATEGORY,
    payload:data
  })
}



