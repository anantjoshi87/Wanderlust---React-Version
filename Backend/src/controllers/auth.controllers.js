import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import {
  generateOtp,
  getOtpHtml,
  hashPassword,
  hashValue,
  comparePassword,
} from "../utils/utils.js";
import { sendEmail } from "../services/email.service.js";
import RegisterOTP from "../models/registerOtp.model.js";
import Session from "../models/session.model.js";
import ResetOTP from "../models/resetOtp.model.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const isAlreadyRegistered = await User.findOne({
    email,
  });

  if (isAlreadyRegistered) {
    return res.status(409).json({
      message: "User with this email already exists!",
    });
  }

  const passwordHash = await hashPassword(password);

  const otp = generateOtp();
  const html = getOtpHtml(otp);

  const otpHash = hashValue(otp);

  await RegisterOTP.create({
    username,
    email,
    passwordHash,
    otpHash,
  });

  await sendEmail(email, "OTP Verification", `Your OTP code is ${otp}`, html);

  return res.status(201).json({
    message: "OTP sent successfully",
  });
};

export const verifyEmail = async (req, res) => {
  const { otp, email } = req.body;

  const otpHash = hashValue(otp);

  const otpDoc = await RegisterOTP.findOne({
    email,
    otpHash,
  });

  if (!otpDoc) {
    return res.status(400).json({
      message: "OTP expired or invalid",
    });
  }

  if (otpDoc.expiresAt < new Date()) {
    await otpDoc.deleteOne(); // remove expired
    return res.status(400).json({ message: "OTP expired" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(409).json({
      message: "User already verified",
    });
  }

  const user = await User.create({
    username: otpDoc.username,
    email: otpDoc.email,
    passwordHash: otpDoc.passwordHash,
  });

  await RegisterOTP.deleteMany({
    email: user.email,
  });

  return res.status(200).json({
    message: "User verified and created successfully",
    user: {
      username: user.username,
      email: user.email,
    },
  });
};

export const resendOtp = async (req, res) => {
  const { email } = req.body;

  const otpDoc = await RegisterOTP.findOne({ email });

  if (!otpDoc) {
    return res.status(400).json({
      message: "No pending verification found",
    });
  }

  const now = Date.now();
  const cooldown = 30 * 1000;
  if (now - otpDoc.lastSentAt < cooldown) {
    return res.status(429).json({
      message: "Please wait before requesting another otp",
    });
  }

  if (otpDoc.resendCount >= 5) {
    return res.status(429).json({
      message: "Maximum resend attempts reached",
    });
  }

  const newOtp = generateOtp();
  const html = getOtpHtml(newOtp);

  otpDoc.otpHash = hashValue(newOtp);
  otpDoc.expiresAt = now + 10 * 60 * 1000;
  otpDoc.lastSentAt = now;
  otpDoc.resendCount += 1;

  await otpDoc.save();

  await sendEmail(
    email,
    "OTP Verification",
    `Your OTP code is ${newOtp}`,
    html,
  );

  return res.status(201).json({
    message: "OTP sent successfully",
    attemptsLeft: 5 - otpDoc.resendCount,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "Wrong email or password",
    });
  }

  const isPasswordValid = await comparePassword(password, user.passwordHash);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Wrong email or password",
    });
  }

  const session = await Session.create({
    user: user._id,
    ip: req.ip,
    userAgent: req.headers["user-agent"],
  });

  const refreshToken = jwt.sign(
    {
      user: user._id,
      sessionId: session._id,
    },
    config.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  const refreshTokenHash = hashValue(refreshToken);

  session.refreshTokenHash = refreshTokenHash;
  await session.save();

  const accessToken = jwt.sign(
    {
      user: user._id,
    },
    config.JWT_SECRET,
    {
      expiresIn: "15m",
    },
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, //7days
  });

  return res.status(200).json({
    message: "Logged in successfully",
    user: {
      username: user.username,
      email: user.email,
    },
    accessToken,
  });
};

export const getMe = async (req, res) => {
  return res.status(200).json({
    message: "User fetched Successfully",
    user: {
      username: req.user.username,
      email: req.user.email,
    },
  });
};

export const rotateToken = async (req, res) => {
  const session = req.session;
  const decoded = req.decoded;

  if (session.expiresAt < new Date()) {
    return res.status(401).json({
      message: "Session expired",
    });
  }

  const accessToken = jwt.sign(
    {
      user: decoded.user,
    },
    config.JWT_SECRET,
    {
      expiresIn: "15m",
    },
  );

  const newRefreshToken = jwt.sign(
    {
      user: decoded.user,
      sessionId: session._id,
    },
    config.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  const newRefreshTokenHash = hashValue(newRefreshToken);
  session.refreshTokenHash = newRefreshTokenHash;
  await session.save();

  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, //7days
  });

  res.status(200).json({
    message: "Token rotated successfully",
    accessToken,
  });
};

export const logout = async (req, res) => {
  const session = req.session;

  session.revoked = true;
  await session.save();

  res.clearCookie("refreshToken");

  return res.status(200).json({
    message: "Logged out successfully",
  });
};

export const logoutAll = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const decoded = jwt.verify(refreshToken, config.JWT_SECRET);

  await Session.updateMany(
    {
      user: decoded.user,
      revoked: false,
    },
    {
      revoked: true,
    },
  );

  res.clearCookie("refreshToken");

  res.status(200).json({
    message: "Logged out from all devices successfully",
  });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(200).json({
      message: "If account exists, OTP sent",
    });
  }

  const otp = generateOtp();
  const html = getOtpHtml(otp);

  const otpHash = hashValue(otp);

  await ResetOTP.create({
    email,
    otpHash,
  });

  await sendEmail(email, "Password Reset OTP", `Your OTP code is ${otp}`, html);

  return res.status(200).json({
    message: "OTP sent successfully",
  });
};

export const verifyResetOtp = async (req, res) => {
  const { email, otp } = req.body;

  const otpHash = hashValue(otp);
  const resetOtpDoc = await ResetOTP.findOne({
    email,
    otpHash,
  });

  if (!resetOtpDoc) {
    return res.status(400).json({
      message: "OTP expired or invalid",
    });
  }

  if (resetOtpDoc.expiresAt < new Date()) {
    await resetOtpDoc.deleteOne(); // remove expired
    return res.status(400).json({ message: "OTP expired" });
  }

  if (resetOtpDoc.verified) {
    return res.status(400).json({
      message: "OTP already verified",
    });
  }

  resetOtpDoc.verified = true;
  await resetOtpDoc.save();

  return res.status(200).json({
    message: "OTP verified successfully",
  });
};

export const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  // Step 1: Find verified OTP
  const isOtpVerified = await ResetOTP.findOne({
    email,
    verified: true,
  });

  if (!isOtpVerified) {
    return res.status(400).json({
      message: "OTP verification required",
    });
  }

  // Step 2: Find the user
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  // Prevent setting same password
  const isSamePassword = await comparePassword(newPassword, user.passwordHash);
  if (isSamePassword) {
    return res.status(400).json({
      message: "New password must be different from old password",
    });
  }

  // Step 3: Hash new password
  const newPasswordHash = await hashPassword(newPassword);

  user.passwordHash = newPasswordHash;
  await user.save();

  // Step 4: Delete OTP now (single-use)
  await ResetOTP.deleteOne({ email });

  // Step 5: Delete all user sessions to invalidate old refresh tokens
  await Session.deleteMany({ user: user._id });

  return res.status(200).json({
    message: "Password reset successful",
  });
};
