import axios from "axios";

export default axios.create({
  baseURL: "https://dummyjson.com/products",
  headers: {
    "Content-type": "application/json"
  }
});