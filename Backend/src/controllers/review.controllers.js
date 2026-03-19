import Listing from "../models/listing.model.js";
import Review from "../models/review.model.js";

export const getAllReviews = async (req, res) => {
  const { id: listingId } = req.params;

  const listing = await Listing.findById(listingId);

  if (!listing) {
    return res.status(404).json({
      message: "Listing not found",
    });
  }

  const reviews = await Review.find({ listing: listingId }).populate(
    "author",
    "username",
  );

  return res.status(200).json({
    message: "Reviews fetched successfully",
    status: true,
    count: reviews.length,
    reviews,
  });
};

export const createReview = async (req, res) => {
  const { id: listingId } = req.params;

  const listing = await Listing.findById(listingId);

  if (!listing) {
    return res.status(404).json({
      message: "Listing not found",
    });
  }

  const existingReview = await Review.findOne({
    listing: listingId,
    author: req.user._id,
  });

  if (existingReview) {
    return res.status(409).json({
      message: "You already reviewed this listing",
    });
  }

  const review = await Review.create({
    ...req.body,
    listing: listingId,
    author: req.user._id,
  });

  return res.status(201).json({
    message: "review created successfully",
    status: true,
    review,
  });
};

export const updateReview = async (req, res) => {
  const review = req.review;

  Object.assign(review, req.body);
  await review.save();

  return res.status(200).json({
    message: "review updated successfully",
    status: true,
    review,
  });
};

export const deleteReview = async (req, res) => {
  const review = req.review;

  await Review.deleteOne();

  return res.status(200).json({
    message: "Review deleted successfully",
    status: true,
  });
};
