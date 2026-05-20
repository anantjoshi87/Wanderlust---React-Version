import axios from "axios";
import { setToken, getToken, clearToken } from "@/utils/tokenManager";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

api.interceptors.request.use((config) => { //run before request
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const refreshClient = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

api.interceptors.response.use( //run after response
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    const skipRefreshEndpoints = [
      "/auth/login",
      "/auth/register",
      "/auth/verify-email",
      "/auth/forgot-password",
      "/auth/verify-reset-otp",
      "/auth/reset-password",
      "/auth/rotate-token",
    ];

    const shouldSkipRefresh =
      skipRefreshEndpoints.some((path) =>
        originalRequest.url?.includes(path),
      ) || !getToken();

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !shouldSkipRefresh
    ) {
      originalRequest._retry = true;
      try {
        const res = await refreshClient.get("/auth/rotate-token");
        const newAccessToken = res.data.accessToken;
        setToken(newAccessToken);

        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        clearToken();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
