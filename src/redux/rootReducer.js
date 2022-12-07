import { combineReducers } from "redux";
import { ProductReducer } from "./reducers/ProductReducer";
import { UserReducer } from "./reducers/UserReducer";

export const rootReducer = combineReducers({
    //link reducer
   UserReducer,
   ProductReducer,
});
export default rootReducer;