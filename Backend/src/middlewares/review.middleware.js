import Listing from "../models/listing.model.js";
import Review from "../models/review.model.js";

export const isReviewAuthor = async (req, res, next) => {
  const { review_id } = req.params;

  const review = await Review.findById(review_id);

  if (!review) {
    return res.status(404).json({
      message: "review not found",
    });
  }

  if (review.author.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      message: "Unauthorizes user",
    });
  }

  req.review = review;
  next();
};
