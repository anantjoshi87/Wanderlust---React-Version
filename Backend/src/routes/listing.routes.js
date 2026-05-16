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
    upload.array("images",10),
    wrapAsync(listingControllers.createListing),
  );

router.get("/featured", wrapAsync(listingControllers.getFeaturedListings));

router.get("/random", wrapAsync(listingControllers.getRandomListings));

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
