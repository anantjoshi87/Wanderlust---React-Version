import { Router } from "express";
import * as listingControllers from "../controllers/listing.controllers.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import { protect } from "../middlewares/auth.middlewares.js";
import multer from "multer";
import { isListingOwner } from "../middlewares/listing.middlewares.js";
import { validateListing } from "../middlewares/validate.middleware.js";

const upload = multer({ storage: multer.memoryStorage() });

const router = Router();

router
  .route("/")
  .get(wrapAsync(listingControllers.getAllListings))
  .post(
    protect,
    validateListing,
    upload.single("image"),
    wrapAsync(listingControllers.createListing),
  );

router
  .route("/:id")
  .get(wrapAsync(listingControllers.showListing))
  .put(
    protect,
    isListingOwner,
    validateListing,
    upload.single("image"),
    wrapAsync(listingControllers.editListing),
  )
  .delete(protect, isListingOwner, wrapAsync(listingControllers.deleteListing));

export default router;
