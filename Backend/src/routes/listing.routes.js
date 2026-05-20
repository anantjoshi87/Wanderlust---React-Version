import { Router } from "express";
import * as listingControllers from "../controllers/listing.controllers.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import { protect } from "../middlewares/auth.middlewares.js";
import multer from "multer";
import { isListingOwner, parseListingFields } from "../middlewares/listing.middlewares.js";
import { validateListing } from "../middlewares/validate.middleware.js";

const upload = multer({ storage: multer.memoryStorage() });

const router = Router();

router
  .route("/")
  .get(wrapAsync(listingControllers.getAllListings))
  .post(
    protect,
    upload.array("images",10),
    parseListingFields,
    validateListing,
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
    upload.single("image"),
    validateListing,
    wrapAsync(listingControllers.editListing),
  )
  .delete(protect, isListingOwner, wrapAsync(listingControllers.deleteListing));

export default router;
