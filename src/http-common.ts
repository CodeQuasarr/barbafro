import axios, { AxiosHeaders, AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

const myInterceptor = http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    // config.headers["Authorization"] = `Bearer ${token}`;
    (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`);
  }
  return config;
});
axios.interceptors.request.eject(myInterceptor);

export default http;
