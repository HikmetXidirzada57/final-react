import { GET_CATEGORY_LIST } from "../Constants/CategoryConstants";


export const categoryListReducers=(state={categories:[]},action)=>{
    switch (action.type) {
        case GET_CATEGORY_LIST:
            return {
                ...state,
                categories:action.payload
            }
        default:
            return state;
    }
}
