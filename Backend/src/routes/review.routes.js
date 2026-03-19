import { Router } from "express";
import * as reviewControllers from "../controllers/review.controllers.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import { protect } from "../middlewares/auth.middlewares.js";
import { validateReview } from "../middlewares/validate.middleware.js";
import { isReviewAuthor } from "../middlewares/review.middleware.js";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(wrapAsync(reviewControllers.getAllReviews))
  .post(protect, validateReview, wrapAsync(reviewControllers.createReview));

router
  .route("/:review_id")
  .put(
    protect,
    isReviewAuthor,
    validateReview,
    wrapAsync(reviewControllers.updateReview),
  )
  .delete(protect, isReviewAuthor, wrapAsync(reviewControllers.deleteReview));

export default router;
