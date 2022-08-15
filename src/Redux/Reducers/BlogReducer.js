import { GET_BLOG_LIST, GET_ONE_BLOG } from "../Constants/BlogConstants";



export const blogListReducers=(state={blogs:[]},action)=>{
    switch (action.type) {
        case GET_BLOG_LIST:
            return {
                ...state, 
                blogs:action.payload
            }
        default:
            return state;
    }
}

export const singleBlogReducer=(state={blog:[]},action)=>{
    switch (action.payload) {
        case GET_ONE_BLOG:
            return {
                ...state,
                blog:action.payload
            }
        default:
          return state;
    }
}

