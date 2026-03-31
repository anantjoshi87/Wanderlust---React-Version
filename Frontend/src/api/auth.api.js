import api from "./axios";

export const registerUser = (data) => api.post("/auth/register", data);

export const verifyEmail = (data) => api.post("/auth/verify-email", data);

export const resendOtp = (data) => api.post("/auth/resend-otp", data);

export const loginUser = (data) => api.post("/auth/login", data);

export const getUser = () => api.get("/user/me");

export const logoutUser = () => api.post("/auth/logout");

export const logoutUserAllAcc = () => api.post("/auth/logout-all");

export const rotateToken = () => api.get("/auth/rotate-token");

export const forgotPassword = (data) => api.post("/auth/forgot-password", data);

export const verifyResetOtp = (data) =>
  api.post("/auth/verify-reset-otp", data);

export const resetPassword = (data) => api.post("/auth/reset-password", data);
