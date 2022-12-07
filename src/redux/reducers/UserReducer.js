
import { LOGIN_ACTION } from "../constants";

const initialState = {
  userLogin: {},

};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      console.log("reducer")
      const { name , isAdmin, email} = action.data
      return { ...state, userLogin: {name : name, isAdmin : isAdmin , email: email} }
    }
    default:
      return { ...state };
  }
};