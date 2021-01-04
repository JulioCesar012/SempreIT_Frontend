import axios from "axios";

const api = axios.create({
  baseURL: "https://backendapisempreit.herokuapp.com/",
});

export default api;
