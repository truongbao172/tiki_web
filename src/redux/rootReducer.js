import { combineReducers } from "redux";
import { CardIdeasReducer } from "./reducers/CardIdeasReducer";
import { CategoryReducer } from "./reducers/CategoryReducer";
import { ProductReducer } from "./reducers/ProductReducer";
import { UserReducer } from "./reducers/UserReducer";

export const rootReducer = combineReducers({
    //link reducer
   UserReducer,
   ProductReducer,
   CategoryReducer,
   CardIdeasReducer,
});
export default rootReducer;