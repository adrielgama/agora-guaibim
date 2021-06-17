import axios from "axios";

const api = axios.create({
  // baseURL: "https://api.openweathermap.org/data/2.5/weather",
  baseURL: "https://dataservice.accuweather.com/currentconditions/v1/43080",
});

export default api;
