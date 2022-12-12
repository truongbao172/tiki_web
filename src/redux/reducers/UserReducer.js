
import { LOGIN_ACTION } from "../constants";


let user = {};
if (localStorage.getItem("userData")) {
  user = JSON.parse(localStorage.getItem("userData")) || null;
}
console.log(user)
const initialState = {
  userLogin: user,

};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      const { isAdmin, email, desDetail  } = action.data
      const data = {
          email: email,
          desDetail : desDetail,
          isAdmin: isAdmin
      }
      localStorage.setItem("userData", JSON.stringify({data}));
      return { ...state, userLogin: data};
    }
    case "LOGOUT_USER":{
        window.localStorage.removeItem('userData');
        window.localStorage.removeItem('token');
        return {...state, userLogin : {}}
        
    }
    default:
      return { ...state };
  }
};