
import { LOGIN_ACTION } from "../constants";

const initialState = {
  userLogin: {},

};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      console.log("reducer")
      return { ...state, userLogin: action.data }
    }
    default:
      return { ...state };
  }
};