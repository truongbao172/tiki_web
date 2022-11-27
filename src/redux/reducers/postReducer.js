import {FETCH_POST_REQUEST,FETCH_POST_SUCCESS,FETCH_POST_ERROR} from "../constans/index.js"

const initialState = {
    requesting : false,
    success: false,
    message:null,
    data: null
}

function postReducer(state = initialState,  payload ){
  switch (payload.type) {

    case FETCH_POST_REQUEST:
        return state
    case FETCH_POST_SUCCESS:
        return state
    case FETCH_POST_ERROR:
        return state
  default:
    return state
  }
}
export default postReducer

