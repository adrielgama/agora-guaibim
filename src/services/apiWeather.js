import axios from "axios";

const api = axios.create({
  baseURL: "http://dataservice.accuweather.com/locations/v1/cities/search",
});

export default api;
