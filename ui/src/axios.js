import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://192.168.18.24:8800/api/",
  withCredentials: true,
});