import axios from "axios";

const api = axios.create({
  // baseURL: "https://timezoneapi.io/api/",
  baseURL: "https://worldtimeapi.org/api/timezone/America/",
});

export default api;
