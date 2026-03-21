import api from "./axios";

export const getAllListings = (params) => api.get("/listings", { params });
export const createListing = (data) => api.post("/listings", data);
export const updateListing = (id, data) => api.put(`/listings/${id}`, data);
export const deleteListing = (id) => api.delete(`/listings/${id}`);

// params -> search, category, min, max, page, limit
