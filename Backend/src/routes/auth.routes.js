import { Router } from "express";
import * as authControllers from "../controllers/auth.controllers.js";

import { wrapAsync } from "../utils/wrapAsync.js";
import {
  protect,
  refreshAuth,
  sessionAuth,
} from "../middlewares/auth.middlewares.js";
import { rateLimitOtp } from "../middlewares/otp.middlewares.js";
import RegisterOTP from "../models/registerOtp.model.js";
import ResetOTP from "../models/resetOtp.model.js";
import {
  validateLogin,
  validateOTP,
  validateRegister,
} from "../middlewares/validate.middleware.js";

const router = Router();

router.post(
  "/register",
  validateRegister,
  rateLimitOtp(RegisterOTP),
  wrapAsync(authControllers.register),
);

router.post("/login", validateLogin, wrapAsync(authControllers.login));

router.post("/verify-email", wrapAsync(authControllers.verifyEmail));

router.get("/get-me", protect, wrapAsync(authControllers.getMe));

router.get(
  "/rotate-token",
  wrapAsync(refreshAuth),
  wrapAsync(authControllers.rotateToken),
);

router.post(
  "/logout",
  wrapAsync(sessionAuth),
  wrapAsync(authControllers.logout),
);

router.post(
  "/logout-all",
  wrapAsync(sessionAuth),
  wrapAsync(authControllers.logoutAll),
);

router.post(
  "/forgot-password",
  rateLimitOtp(ResetOTP),
  wrapAsync(authControllers.forgotPassword),
);

router.post(
  "/verify-reset-otp",
  validateOTP,
  wrapAsync(authControllers.verifyResetOtp),
);

router.post("/reset-password", wrapAsync(authControllers.resetPassword));

export default router;
