import mongoose from "mongoose";
const resetOtpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    otpHash: {
      type: String,
      required: [true, "OTP is required"],
    },
    verified: {
      type: Boolean,
      default: false,
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

const ResetOTP = mongoose.model("ResetOTP", resetOtpSchema);
export default ResetOTP;
