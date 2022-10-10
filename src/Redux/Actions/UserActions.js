import axios from "axios";
import {LOGIN_USER_REQUEST, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, USER_LOGOUT, GET_USER } from "../Constants/UserConstants";
import { API_URL } from "../../link/URL";
export const loginAction = (email,password)=>async(dispatch)=>{
    try {
        dispatch({type:LOGIN_USER_REQUEST})
        const {data}= await axios.post(`${API_URL}/account/login`,{email,password})   
        dispatch({
            type:LOGIN_USER_SUCCESS,
            payload:data
        })
        localStorage.setItem("userInfo",JSON.stringify(data))
    } catch (error) {
        dispatch({
            type:LOGIN_USER_FAIL,
            payload:error.message
        })
    }
}

export const registerAction=(email,firstName,lastName,password,confirmPassword)=>async(dispatch,getState)=>{
    try {
        dispatch({type:REGISTER_USER_REQUEST})
        const {data}= await axios.post(`${API_URL}/account/register`,{email,firstName,lastName,password,confirmPassword})   
        dispatch({
            type:REGISTER_USER_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error.message
        })
    }
}
export const logoutAction=()=>async(dispatch,getState)=>{
    
        dispatch({type:USER_LOGOUT})
        localStorage.removeItem("userInfo")    
}

export const getUserAction = () => async(dispach,getState) =>{
    try{
        var user = JSON.parse(localStorage.getItem("userInfo")) 
        let data = await (await fetch(`${API_URL}account/getbyEmail`,{
            method: "GET",
            headers: {
                "Authorization" : `Bearer ${user.token}`
            }
        })).json()
        dispach({
            type: GET_USER,
            payload: data
        })
    }
    catch(error){
        dispach({
            type: GET_USER,
            payload: []
        })
    }
}