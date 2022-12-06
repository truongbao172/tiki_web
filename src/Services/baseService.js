import axios from "axios";
import { DOMAIN, token } from "../util/config";

export class baseService {
  get = (url) => {
    if (token) {
      return axios({
        url: `${DOMAIN}/${url}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      });
    }
  };

  post = (url, userData) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: userData,
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    });
  };

  delete = (url, id) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      params: id,
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    });
  };

  put = (url, formData) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: formData,
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    });
  };

}

