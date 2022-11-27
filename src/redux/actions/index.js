import {FETCH_POST_REQUEST,FETCH_POST_SUCCESS,FETCH_POST_ERROR} from "../constans/index.js"

export const loadPost = () => async dispatch =>{
    try {
        dispatch({
            type: FETCH_POST_REQUEST
        })
        //xu ly lenh
        
    } catch (error) {
        console.log(error)
    }
}