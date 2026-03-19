import crypto from "crypto";
import bcrypt from "bcrypt";

//otp helpers
export const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const getOtpHtml = (otp) => {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
      <div style="max-width: 500px; margin: auto; background: white; padding: 30px; border-radius: 10px; border: 1px solid #ddd;">
        
        <h2 style="text-align: center; color: #222;">
          Verify Your Account
        </h2>

        <p style="font-size: 16px; color: #555;">
          Hello,
        </p>

        <p style="font-size: 16px; color: #555;">
          Use the OTP below to complete your verification process:
        </p>

        <div style="
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 6px;
          margin: 25px 0;
          color: #111;
        ">
          ${otp}
        </div>

        <p style="font-size: 14px; color: #777;">
          This OTP is valid for <strong>10 minutes</strong>.
        </p>

        <p style="font-size: 14px; color: #777;">
          If you did not request this code, please ignore this email.
        </p>

        <hr style="margin: 25px 0; border: none; border-top: 1px solid #eee;" />

        <p style="font-size: 12px; color: #999; text-align: center;">
          For security reasons, do not share this OTP with anyone.
        </p>

      </div>
    </div>
  `;
};

//hashing helpers
export const hashValue = (otp) =>
  crypto.createHash("sha256").update(otp).digest("hex");

export const hashPassword = (password) => bcrypt.hash(password, 10);

export const comparePassword = (password, hash) =>
  bcrypt.compare(password, hash);
