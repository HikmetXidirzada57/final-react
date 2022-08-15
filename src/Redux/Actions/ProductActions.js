import axios from "axios";
import { API_URL } from "../../link/URL";
import {GET_LIST_ISBESTPRODUCT, GET_LIST_ISRECPRODUCT, GET_LIST_PRODUCT,GET_ONE_PRODUCT} from '../Constants/ProductConstants'

export const productListAction=()=>async(dispatch)=>{
  const {data}=await axios.get(`${API_URL}/product/getAll`)
  dispatch({
    type:GET_LIST_PRODUCT,
    payload:data
})
}
export const productListRecAction=()=>async(dispatch)=>{
    const {data}=await axios.get(`${API_URL}/product/getIsRecommend`)
    dispatch({
      type:GET_LIST_ISRECPRODUCT,
      payload:data
  })
  }

  export const productListBestAction=()=>async(dispatch)=>{
    const {data}=await axios.get(`${API_URL}/product/getIsBestSeller`)
    dispatch({
      type:GET_LIST_ISBESTPRODUCT,
      payload:data
  })
  }
export const productByCategoryAction=(id)=>async(dispatch)=>{
    const {data}=await axios.get(`${API_URL}/product/getAll/by/${id}`)
    dispatch({
      type:GET_LIST_PRODUCT,
      payload:data
  })
  }
export const OneProduct=(id)=>async(dispatch)=>{
   const {data}= await axios.get(`${API_URL}/product/${id}`)
   dispatch({
    type:GET_ONE_PRODUCT,
    payload:data
})
}



