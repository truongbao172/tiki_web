import { userService } from "../../Services/UserService.js";
import {GET_ALL_CATEGORY, GET_ALL_DEMO_CATEGORY, GET_ALL_PRODUCT, LOGIN_ACTION} from "../constants"
import { history } from "../../App";
import { productService } from "../../Services/ProductService.js";
import { categoryService } from "../../Services/CategoryService.js";
  export const LoginAction = (value) => {
    return async (dispatch) => {
      try {
        const result = await userService.Login(value);
        if (result.data.status === "OK") {
          const {access_token} = result.data.data
         
            localStorage.setItem("token", access_token);
          dispatch({
            type: LOGIN_ACTION,
            data: result.data.data,
          });
          alert("login success")
          //Chuyển hướng đăng nhập về trang trước đó

        }else{
            alert(result.data.message)
        }
        
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const CreatAccountAction = (value) => {
    return async (dispatch) => {
      try {
        const result = await userService.SignUp(value);
        console.log("CREATE", result)
        if (result.data.status === "OK") {
          alert("creat user success")
          history.back();
        }else{
          alert(result.data.message)
        }
        
      } catch (error) {
        console.log(error);
      }
    };
  }

  export const LogOutAction = (value) => {
    return async (dispatch) => {
      try {
        dispatch({
          type: "LOGOUT_USER",
          data: '',
        });
      } catch (error) {
        console.log(error);
      }
    };
  };
  export const getAllProductAction = () => {
    return async (dispatch) => {
      try {
        
        const result = await productService.getAllProduct();
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

  export const getAllCategoryAction = () => {
    return async (dispatch) => {
      try {
        
        const result = await categoryService.getAllCategory();
        if (result.data.data.status === "OK") {
          dispatch({
            type: GET_ALL_CATEGORY,
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

  export const getAllDemoCategoryAction = () => {
    return async (dispatch) => {
      try {
        
        const result = await categoryService.getAllDemoCategory();
        if (result.data.data.status === "OK") {
          dispatch({
            type: GET_ALL_DEMO_CATEGORY,
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