import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-clone2-dba28.cloudfunctions.net/api",
  // withCredentials: true,
  // headers: {
  //   "Access-Control-Allow-Origin": "* always",
  //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  // },
});
export default instance;
