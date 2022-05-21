import Axios from "axios";

import { baseUrl } from "../const/const.js";
class ApiService {
  fetchUserData() {
    const token = localStorage.getItem("token");
    return Axios.get(`${baseUrl}/user-detail`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new ApiService();
