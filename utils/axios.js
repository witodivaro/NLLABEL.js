import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  xsrfCookieName: "_csrf",
  xsrfHeaderName: "X-CSRF-TOKEN",
});

export default instance;
