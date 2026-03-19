import { Router } from "express";
import * as reviewControllers from "../controllers/review.controllers.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import { protect } from "../middlewares/auth.middlewares.js";
import { validateReview } from "../middlewares/validate.middleware.js";
import { isReviewAuthor } from "../middlewares/review.middleware.js";

const router = Router({ mergeParams: true });

router.get("/", wrapAsync(reviewControllers.getAllReviews));

router.post(
  "/",
  protect,
  validateReview,
  wrapAsync(reviewControllers.createReview),
);

router.put(
  "/:review_id",
  protect,
  isReviewAuthor,
  validateReview,
  wrapAsync(reviewControllers.updateReview),
);

router.delete(
  "/:review_id",
  protect,
  isReviewAuthor,
  wrapAsync(reviewControllers.deleteReview),
);

export default router;
