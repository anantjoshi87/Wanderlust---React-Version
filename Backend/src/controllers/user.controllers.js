import Listing from "../models/listing.model.js";
import Review from "../models/review.model.js";
import User from "../models/user.model.js";
import { comparePassword } from "../utils/utils.js";

export const getMyProfile = async (req, res) => {
  return res.status(200).json({
    message: "User fetched successfully",
    status: true,
    user: {
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email,
    },
  });
};

export const getMyListings = async (req, res) => {
  const listings = await Listing.find({ owner: req.user._id })
    .populate("owner", "username")
    .sort({ createdAt: -1 });

  if (!listings || listings.length === 0) {
    return res.status(200).json({
      message: "Listings not found",
    });
  }

  return res.status(200).json({
    message: "Listings fetched successfully",
    status: true,
    count: listings.length,
    listings,
  });
};

export const getMyDashboard = async (req, res) => {
  const totalListings = await Listing.countDocuments({ owner: req.user._id });
  const totalReviews = await Review.countDocuments({ author: req.user._id });

  return res.status(200).json({
    message: "Info fetched successfully",
    info: {
      totalListings,
      totalReviews,
    },
  });
};

export const updateMyProfile = async (req, res) => {};

export const deleteMyAccount = async (req, res) => {
  const { password } = req.body;
  if (!password) {
    return res.status(401).json({
      message: "Password is required",
    });
  }

  const isPasswordVaild = await comparePassword(
    password,
    req.user.passwordHash,
  );

  if (!isPasswordVaild) {
    return res.status(401).json({
      message: "invalid Password",
    });
  }

  const listings = await Listing.find({ owner: req.user._id });

  for (const listing of listings) {
    await Listing.findByIdAndDelete(listing._id);
  }

  await User.findByIdAndDelete(req.user._id);

  return res.status(200).json({
    message: "User deleted successfully",
    status: true,
  });
};
