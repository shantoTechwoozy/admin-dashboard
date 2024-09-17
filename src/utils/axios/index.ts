import axios from "axios";
import {
  accessGroup,
  travelPortAuthToken,
  travelportBaseUrl,
} from "../../../env";

// Create an instance of Axios with default headers
const travelport = axios.create({
  baseURL: travelportBaseUrl, // Replace with your base URL
  headers: {
    // "Accept-Encoding": "gzip, deflate",
    "Cache-Control": "no-cache",
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${travelPortAuthToken}`, // This needs to be dynamically set with the token
    XAUTH_TRAVELPORT_ACCESSGROUP: accessGroup, // Add your PCC access group
  },
});

// Add an interceptor to dynamically set the Authorization token and Travelport Access Group
travelport.interceptors.request.use(
  (config) => {
    // Insert logic here to get the token dynamically, if needed
    const token = travelPortAuthToken; // You should replace this with your token logic

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (accessGroup) {
      config.headers["XAUTH_TRAVELPORT_ACCESSGROUP"] = accessGroup;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default travelport;
