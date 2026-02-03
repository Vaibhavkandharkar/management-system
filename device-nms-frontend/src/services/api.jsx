import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // match your backend /api prefix
});

export default api;
