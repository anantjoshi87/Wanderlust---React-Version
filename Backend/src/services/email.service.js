import { Resend } from "resend";
import { getOtpHtml } from "../utils/utils.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (email, otp) => {
  const html = getOtpHtml(otp);
  const { data, error } = await resend.emails.send({
    from: "WanderLust <onboarding@resend.dev>",
    to: email,
    subject: "OTP Verification",
    html,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
