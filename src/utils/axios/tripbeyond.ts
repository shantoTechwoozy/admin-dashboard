import axios from "axios";

const tripbeyond = axios.create({
  baseURL: "http://localhost:4000/api/v1", // Use environment variable for the base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default tripbeyond;
