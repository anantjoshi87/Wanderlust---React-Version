export const rateLimitOtp = (otpModel) => async (req, res, next) => {
  const { email } = req.body; // get email from request body
  
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const existingOtp = await otpModel.findOne({ email });

  if (existingOtp) {
    const diff = Date.now() - existingOtp.createdAt.getTime();

    if (diff < 30000) {
      return res.status(429).json({
        message: "Wait 30 seconds before requesting again",
      });
    }

    await otpModel.deleteOne({ email });
  }
  next();
};
