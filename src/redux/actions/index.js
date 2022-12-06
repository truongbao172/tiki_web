import { userService } from "../../Services/UserService.js";
import {LOGIN_ACTION} from "../constants"
import { history } from "../../App";
export const LoginAction = (value) => {
    return async (dispatch) => {
      try {
        
        const result = await userService.Login(value);
        console.log("action", result.data)
        if (result.data.status === "OK") {
            console.log("do ham")
            localStorage.setItem("token", result.data.data.access_token);
          dispatch({
            type: LOGIN_ACTION,
            data: result.data.data,
          });
          alert("login success")
          //Chuyển hướng đăng nhập về trang trước đó
          history.back();
        }else{
            alert(result.data.message)
        }
        
      } catch (error) {
        console.log(error);
      }
    };
  };