import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema } from "@/schemas/auth.schema";
import { useAuth } from "@/hooks/useAuth";

const VerifyOtpForm = () => {
  const [countDown, setCountDown] = useState(0);
  const [attemptsLeft, setAttemptsLeft] = useState(5);
  const [isSubbmiting, setIsSubbmiting] = useState(false);
  const [serverError, setServerError] = useState("");

  const location = useLocation();
  const email =
    location.state?.email ||
    localStorage.getItem("pendingEmail") ||
    "your email";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(otpSchema),
  });

  const navigate = useNavigate();
  const { emailVerify, resendVerificationOtp } = useAuth();

  const onSubmit = async (data) => {
    setIsSubbmiting(true);
    try {
      await emailVerify({ email, otp: data.otp });
      navigate("/login", { replace: true });
      localStorage.removeItem("pendingEmail");
    } catch (err) {
      setServerError(
        err.response?.data?.message || "User with this email already exists!",
      );
    } finally {
      setIsSubbmiting(false);
    }
  };

  const handleResend = async () => {
    try {
      const res = await resendVerificationOtp({ email });
      setCountDown(30);
      setAttemptsLeft(res.data?.attemptsLeft ?? attemptsLeft - 1);
    } catch (err) {
      setServerError(err.response?.data?.message || "Failed to resend OTP");
    }
  };

  useEffect(() => {
    if (countDown == 0) return;

    const timer = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countDown]);

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      {/* Brand */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#FF385C]">
          WanderLust
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Secure your account verification
        </p>
        <p>{email}</p>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Verify OTP</h2>
        <p className="text-sm text-gray-500 mt-1">
          Enter the 6-digit code sent to
        </p>
        <p className="text-sm font-medium text-gray-800 mt-1">{email}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* OTP */}
        <div>
          <label
            htmlFor="otp"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            OTP Code
          </label>

          <input
            type="text"
            id="otp"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            {...register("otp")}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-center tracking-[0.4em] outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition"
          />
          {errors.otp && (
            <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>
          )}
        </div>

        {serverError && (
          <p className="text-red-500 text-sm text-center">{serverError}</p>
        )}

        {/* Verify Button */}
        <button
          type="submit"
          className="w-full bg-[#FF385C] hover:bg-[#e03150] text-white py-3 rounded-xl font-medium transition"
        >
          {isSubbmiting ? <Spinner className="size-8" /> : "Verify OTP"}
        </button>

        {/* Resend */}
        <div className="text-center text-sm text-gray-600">
          Didn't receive code?{" "}
          <button
            type="button"
            disabled={countDown > 0 || attemptsLeft === 0}
            className={`font-medium transition 
              ${
                countDown > 0 || attemptsLeft === 0
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#FF385C] hover:underline cursor-pointer"
              }  `}
            onClick={handleResend}
          >
            {attemptsLeft === 0
              ? "No attempts left"
              : countDown > 0
                ? `Resend OTP in ${countDown}s`
                : "Resend OTP"}
          </button>
          {attemptsLeft < 5 && (
            <p className="text-center text sm text-gray-500">
              Attempts Remaining: {attemptsLeft}
            </p>
          )}
        </div>

        {/* Back */}
        <div className="text-center text-sm text-gray-600 pt-2">
          <Link
            to="/login"
            className="text-[#FF385C] font-medium hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default VerifyOtpForm;
