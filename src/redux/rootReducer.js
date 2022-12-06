import { combineReducers } from "redux";
import { UserReducer } from "./reducers/UserReducer";

export const rootReducer = combineReducers({
    //link reducer
   UserReducer,
});
export default rootReducer;