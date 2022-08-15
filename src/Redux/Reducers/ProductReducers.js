import { GET_LIST_ISBESTPRODUCT, GET_LIST_ISRECPRODUCT, GET_LIST_PRODUCT, GET_ONE_PRODUCT } from "../Constants/ProductConstants";


export const productListReducers=(state={products:[]},action)=>{
    switch (action.type) {
        case GET_LIST_PRODUCT:
            return {
                ...state
               ,products:action.payload
            }
        default:
            return state;
    }
}
export const productById=(state={product:[]},action)=>{
    switch (action.payload) {
        case GET_ONE_PRODUCT:
            return{
                ...state,
                product:action.paylaod
            }
        default:
          return  state;
    }
}
export const productListRecReducers=(state={products:[]},action)=>{
    switch (action.type) {
        case GET_LIST_ISRECPRODUCT:
            return {
                ...state,
               products:action.payload
            }
        default:
            return state;
    }
}
export const productListBestReducers=(state={products:[]},action)=>{
    switch (action.type) {
        case GET_LIST_ISBESTPRODUCT:
            return {
                ...state,
               products:action.payload
            }
        default:
            return state;
    }
}
// export const productEditReducers=(state={product:{}},action)=>{
//     switch (action.type) {
//         case PRODUCT_EDIT_REQUEST:
//             return {...state,loading:true}
//         case PRODUCT_EDIT_SUCCESS:
//             return {loading:false,product:action.payload}
//             case PRODUCT_EDIT_FAIL:
//                 return {loading:false,error:action.payload}
//         default:
//             return state;
//     }
// }
