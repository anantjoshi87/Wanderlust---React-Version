import config from "../config/config.js";
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

  let userId = null;
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (accessToken) {
    try {
      const decoded = jwt.verify(accessToken, config.JWT_SECRET);
      userId = decoded.user;
    } catch (err) {
      userId = null;
    }
  }

  const reviews = await Review.find({ listing: listingId })
    .populate("author", "username")
    .lean();

  let sortedReviews = reviews;
  if (userId) {
    sortedReviews = [...reviews].sort((a, b) => {
      if (a.author._id.toString() === userId.toString()) return -1;
      if (b.author._id.toString() === userId.toString()) return 1;
      return 0;
    });
  }

  return res.status(200).json({
    message: "Reviews fetched successfully",
    status: true,
    count: sortedReviews.length,
    sortedReviews,
  });
};

export const createReview = async (req, res) => {
  const { id: listingId } = req.params;
  const { comment, rating } = req.body;

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
    comment,
    rating,
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
