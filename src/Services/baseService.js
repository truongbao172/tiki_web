import Axios from "axios";

const headers = {
  Authorization: "Bearer " + localStorage.getItem("ACCESS_TOKEN"),
};

export class baseService {
  //put json về phía backend
  put = (url, model) => {
    return Axios({
      url: `${"DOMAIN"}${url}`,
      method: "PUT",
      data: model,
      headers: { ...headers }, //JWT
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${"DOMAIN"}${url}`,
      method: "POST",
      data: model,
      headers: { ...headers }, //JWT
    });
  };

  get = (url) => {
    return Axios({
      url: `${"DOMAIN"}${url}`,
      method: "GET",
      headers: { ...headers }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  delete = (url) => {
    return Axios({
      url: `${"DOMAIN"}${url}`,
      method: "DELETE",
      headers: { ...headers }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}