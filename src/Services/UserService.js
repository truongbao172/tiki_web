import { baseService } from "./baseService";

export class UserService extends baseService {
  constructor() {
    super();
  }

  Login = (info) => {
    // {taiKhoan:'',matKhau:''}
    return this.post(`user/login`, info);
  };
  SignUp = (info) => {
    return this.post(`/`, info);
  };
}

export const userService = new UserService();