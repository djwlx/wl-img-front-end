import axios from "axios";
import config from "../config/config";

// 封装请求
const http = axios.create({
  baseURL: config.baseUrl,
});
// 请求拦截器
http.interceptors.request.use(
  (config) => {},
  (error) => {}
);
// 相应拦截器
http.interceptors.response.use(
  (response) => {
    if (response.data.code === 200) {
      return response.data;
    }
  },
  (error) => {}
);

export default http;
