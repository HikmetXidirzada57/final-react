import { blogListReducers, singleBlogReducer } from "./Reducers/BlogReducer";
import { CartReducer } from "./Reducers/CartReducer";
import { categoryListReducers } from "./Reducers/CategoryReducers";
import { productById, productListBestReducers, productListRecReducers, productListReducers } from "./Reducers/ProductReducers";
import { LoginReducers, RegisterReducers } from "./Reducers/UserReducers";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");  

const reducer=combineReducers({
  allProduct:productListReducers,
  recProducts:productListRecReducers,
  bestProducts:productListBestReducers,
  oneProduct:productById,
  listCategory:categoryListReducers,
  listBlog:blogListReducers,
  blogById:singleBlogReducer,
  cart:CartReducer,
  userLogin:LoginReducers,
  userRegister:RegisterReducers

})

const cartItemFromLocalStorage = localStorage.getItem("cartItems")
 ? JSON.parse(localStorage.getItem("cartItems")):[]
 
 const  userInfoFromLocalStorage=localStorage.getItem("userInfo") ?
 JSON.parse(localStorage.getItem("userInfo"))
 :null
 const initialState={
  cart:{cartItems:cartItemFromLocalStorage},
  userLogin:{
    userInfo:userInfoFromLocalStorage
  }
}
const middleware=[thunk]
const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;