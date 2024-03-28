import axios from "axios";
const axiosInterceptorInstance = axios.create({});

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    const auth = JSON.parse(localStorage.getItem("authToken") ?? "{}");

    if (auth?.token) {
      config.headers.Authorization = `Bearer ${auth?.token}`;
    }
    return config;
  },
  (error) => {
    console.error(error);

    return error;
  }
);
// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return error;
  }
);

export default axiosInterceptorInstance;
