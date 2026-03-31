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

const {
  register,
  login,
  verifyEmail,
  resendOtp,
  getMe,
  rotateToken,
  logout,
  logoutAll,
  forgotPassword,
  verifyResetOtp,
  resetPassword,
} = authControllers;

router.post(
  "/register",
  validateRegister,
  rateLimitOtp(RegisterOTP),
  wrapAsync(register),
);

router.post("/login", validateLogin, wrapAsync(login));

router.post("/verify-email", wrapAsync(verifyEmail));

router.get("/get-me", protect, wrapAsync(getMe));

router.get("/rotate-token", refreshAuth, wrapAsync(rotateToken));

router.post("/logout", sessionAuth, wrapAsync(logout));

router.post("/logout-all", sessionAuth, wrapAsync(logoutAll));

router.post("/resend-otp", wrapAsync(resendOtp));

router.post(
  "/forgot-password",
  rateLimitOtp(ResetOTP),
  wrapAsync(forgotPassword),
);

router.post("/verify-reset-otp", validateOTP, wrapAsync(verifyResetOtp));

router.post("/reset-password", wrapAsync(resetPassword));

export default router;
