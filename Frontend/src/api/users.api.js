import api from "./axios";

export const getMyProfile = () => api.get("/user/me");
export const getMyListings = () => api.get("/user/me/listings");
export const getMyDashboard = () => api.get("/user/me/dashboard");
export const deleteMyAccount = (data) => api.delete("/user/me", data);
