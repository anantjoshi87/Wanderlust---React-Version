import api from "./axios";

export const getAllListings = (params) => api.get("/listings", { params }); // params -> search, category, min, max, page, limit

export const getFeaturedListings = (limit = 8) =>
  api.get(`/listings/featured?limit=${limit}`);

export const getRandomListings = () => api.get("/listings/random");

export const getListingById = (id) => api.get(`/listings/${id}`);

export const createListing = (data) => api.post("/listings", data);

export const updateListing = (id, data) => api.put(`/listings/${id}`, data);

export const deleteListing = (id) => api.delete(`/listings/${id}`);

export const getMyListings = () => api.get(`/listings/my-listings`);
