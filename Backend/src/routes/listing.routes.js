import { Router } from "express";
import * as listingControllers from "../controllers/listing.controllers.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import { protect } from "../middlewares/auth.middlewares.js";
import multer from "multer";
import { isListingOwner } from "../middlewares/listing.middlewares.js";
import { validateListing } from "../middlewares/validate.middleware.js";

const upload = multer({ storage: multer.memoryStorage() });

const router = Router();

router.get("/", wrapAsync(listingControllers.index));

router.post(
  "/",
  protect,
  validateListing,
  upload.single("image"),
  wrapAsync(listingControllers.createListing),
);

router.get("/:id", wrapAsync(listingControllers.showListing));

router.put(
  "/:id",
  protect,
  isListingOwner,
  validateListing,
  upload.single("image"),
  wrapAsync(listingControllers.editListing),
);

router.delete(
  "/:id",
  protect,
  isListingOwner,
  wrapAsync(listingControllers.deleteListing),
);

export default router;
