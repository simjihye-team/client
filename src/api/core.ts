import axios from "axios";

export const customAxios = axios.create({
  baseURL: "http://172.30.1.66:8088",
});
