import mongoose from "mongoose";
import Listing from "./listing.model.js";
import Review from "./review.model.js";
import Session from "./session.model.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required"],
    },
    roles: {
      type: [
        {
          type: String,
          enum: ["user", "host", "admin"],
        },
      ],
      default: ["user"],
    },
    // verified: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  {
    timestamps: true,
  },
);

userSchema.post("findOneAndDelete", async (user) => {
  if (user) {
    await Listing.deleteMany({ owner: user._id });
    // await Review.deleteMany({ author: user._id });
    await Session.deleteMany({ user: user._id });
  }
});

const User = mongoose.model("User", userSchema);
export default User;
