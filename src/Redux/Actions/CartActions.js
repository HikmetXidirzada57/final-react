import axios from "axios"
import { API_URL } from "../../link/URL";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../Constants/CartConstants";

export const AddToCart=(id,qty)=>async(dispatch,getState)=>{
    const { data }=await axios.get(`${API_URL}/product/${id}`);
    const product={
        id:data.id,
        name:data.name,
        price:data.price,
        discount:data.dicount,
        photoUrl:data.photoUrl,
        quantity:qty,
    } 

    dispatch({type:ADD_TO_CART,payload:product})
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart=(id)=>(dispatch,getState)=>{
    dispatch({type:REMOVE_FROM_CART,payload:id})
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}
export const ClearCart=()=>(dispatch,getState)=>{
    dispatch({type:CLEAR_CART})
    localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems))
}