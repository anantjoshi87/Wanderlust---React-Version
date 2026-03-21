import api from "./axios";

export const registerUser = (data) => api.post("/auth/register", data);

export const verifyEmail = (otp, email) =>
  api.post("/auth/verify-email", { otp, email });

export const loginUser = (data) => api.post("/auth/login", data);

export const getUser = () => api.get("/users/me");

export const logoutUser = () => api.post("/auth/logout");

export const logoutUserAllAcc = () => api.post("/auth/logout-all");

export const rotateToken = () => api.get("/auth/rotate-token");

export const forgotPassword = (email) =>
  api.post("/auth/forgot-password", email);

export const verifyResetOtp = (email, otp) =>
  api.post("/auth/verify-reset-otp", { email, otp });

export const resetPassword = (email, newPassword) =>
  api.post("/auth/reset-password", { email, newPassword });
