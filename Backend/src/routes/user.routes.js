import { Router } from "express";
import * as userControllers from "../controllers/user.controllers.js";
import { wrapAsync } from "../utils/wrapAsync.js";
import { protect } from "../middlewares/auth.middlewares.js";

const router = Router();

router.get("/me", protect, wrapAsync(userControllers.getMyProfile));
router.get("/me/listings", protect, wrapAsync(userControllers.getMyListings));
router.get("/me/dashboard", protect, wrapAsync(userControllers.getMyDashboard));
router.put("/me", protect, wrapAsync(userControllers.updateMyProfile));
router.delete("/me", protect, wrapAsync(userControllers.deleteMyAccount));

export default router;
