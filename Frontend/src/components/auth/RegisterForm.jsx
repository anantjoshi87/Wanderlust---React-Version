import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchma } from "@/schemas/auth.schema";
import { useAuth } from "@/hooks/useAuth";
import { Spinner } from "../ui/spinner";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubbmiting, setIsSubbmiting] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchma),
  });

  const { register: registerUser } = useAuth();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubbmiting(true);
    try {
      
      const { confirmPassword, ...payload } = data;
      await registerUser(payload);
      navigate("/verify-email", {
        replace: true,
        state: { email: payload.email },
      });
      localStorage.setItem("pendingEmail", payload.email);
    } catch (err) {
      setServerError(
        err.response?.data?.message || "User with this email already exists!",
      );
    } finally {
      setIsSubbmiting(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      {/* Brand */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#FF385C]">
          WanderLust
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Start your next journey with us.
        </p>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Create Account</h2>
        <p className="text-sm text-gray-500 mt-1">
          Enter your details to create your account
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="on"
        className="space-y-5"
      >
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            {...register("username")}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition"
          />
          {errors.username && (
            <p className="text-sm text-red-500 mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

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
            {...register("email")}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Create password"
              {...register("password")}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm password"
              {...register("confirmPassword")}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input type="checkbox" className="accent-[#FF385C] mt-1" />I agree to
          the Terms of Service and Privacy Policy
        </label>

        {serverError && (
          <p className="text-red-500 text-sm text-center">{serverError}</p>
        )}

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-[#FF385C] hover:bg-[#e03150] text-white py-3 rounded-xl font-medium transition cursor-pointer"
        >
          {isSubbmiting ? <Spinner className="size-8" /> : "Create Account"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="text-sm text-gray-400">or</span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        {/* Google */}
        <button
          type="button"
          className="w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 pt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#FF385C] font-medium hover:underline"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
