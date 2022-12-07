import { userService } from "../../Services/UserService.js";
import {GET_ALL_PRODUCT, LOGIN_ACTION} from "../constants"
import { history } from "../../App";
import { productService } from "../../Services/ProductService.js";
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

  export const getAllProductAction = () => {
    return async (dispatch) => {
      try {
        
        const result = await productService.getAllProduct();
        console.log("listpriduct", result.data.data.status)
        if (result.data.data.status === "OK") {
          dispatch({
            type: GET_ALL_PRODUCT,
            data: result.data.data.data,
          });
        }else{
          console.log("err")
        }
        
      } catch (error) {
        console.log(error);
      }
    };
  };