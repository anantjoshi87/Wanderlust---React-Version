import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import Session from "../models/session.model.js";
import { hashValue } from "../utils/utils.js";

export const protect = async (req, res, next) => {
  const accessToken = req.headers.authorization?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({
      message: "access token not found",
    });
  }

  const decoded = jwt.verify(accessToken, config.JWT_SECRET);
  const user = await User.findById(decoded.user);

  console.log(user);

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  req.user = user; // attach user to request
  next();
};

//for rotate token
export const refreshAuth = async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "refresh token not found",
    });
  }

  const decoded = jwt.verify(refreshToken, config.JWT_SECRET);

  const refreshTokenHash = hashValue(refreshToken);

  const session = await Session.findOne({
    _id: decoded.sessionId,
    refreshTokenHash,
    revoked: false,
  });

  if (!session) {
    return res.status(401).json({
      message: "Invalid refresh token",
    });
  }

  req.session = session;
  req.decoded = decoded;
  next();
};

//for logout, logoutAll
export const sessionAuth = async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(400).json({
      message: "Refresh token not found",
    });
  }

  const refreshTokenHash = hashValue(refreshToken);

  const session = await Session.findOne({
    refreshTokenHash,
    revoked: false,
  });

  if (!session) {
    return res.status(400).json({
      message: "Invalid refresh token",
    });
  }

  req.session = session;
  req.refreshToken = refreshToken;
  next();
};
