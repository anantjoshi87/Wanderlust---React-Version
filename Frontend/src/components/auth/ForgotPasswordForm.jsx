import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      {/* Brand */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#FF385C]">
          WanderLust
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Recover access to your account
        </p>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Enter your email and we’ll send you a reset link
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5">
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#FF385C] hover:bg-[#e03150] text-white py-3 rounded-xl font-medium transition"
        >
          Send Reset Link
        </button>

        {/* Back */}
        <div className="text-center text-sm text-gray-600 pt-2">
          Remember your password?{" "}
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

export default ForgotPasswordForm;