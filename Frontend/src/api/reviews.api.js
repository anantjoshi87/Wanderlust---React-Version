import api from "./axios";

export const getAllReviews = (id) => api.get(`/listings/${id}/reviews`);

export const createReview = (id, reviewData) =>
  api.post(`/listings/${id}/reviews`, reviewData);

export const updateReview = (id, review_id, reviewData) =>
  api.put(`/listings/${id}/reviews/${review_id}`, reviewData);

export const deleteReview = (id, review_id) =>
  api.delete(`/listings/${id}/reviews/${review_id}`);

//reviewData -> {comment.rating}
//id -> listingId
