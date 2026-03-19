import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    passwordHash: {
      type: String,
      required: [true, "Password is required"],
    },
    otpHash: {
      type: String,
      required: [true, "OTP is required"],
    },
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 10 * 60 * 1000),
      index: { expires: 0 },
    },
  },
  {
    timestamps: true,
  },
);

const RegisterOTP = mongoose.model("OTP", otpSchema);
export default RegisterOTP;
