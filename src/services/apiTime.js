import axios from "axios";

const api = axios.create({
  baseURL: "https://timezoneapi.io/api/",
});

export default api;
