import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import { useAuth } from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/auth.schema";
import { Spinner } from "../ui/spinner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubbmiting, setIsSubbmiting] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubbmiting(true);
    try {
      await login(data);
      
      setTimeout(() => navigate("/", { replace: true }), 300);
    } catch (err) {
      setServerError(err.response?.data?.message || "Wrong Email or Password");
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
          Welcome back — continue your next journey.
        </p>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Login</h2>
        <p className="text-sm text-gray-500 mt-1">
          Enter your credentials to access your account
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="on"
        className="space-y-5"
      >
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
            autoComplete="email"
            {...register("email")}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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
              placeholder="Enter your password"
              autoComplete="current-password"
              {...register("password")}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 text-sm outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="accent-[#FF385C]" />
            Remember Me
          </label>

          <Link
            to="/forgot-password"
            className="text-[#FF385C] hover:underline font-medium"
          >
            Forgot Password?
          </Link>
        </div>

        {serverError && (
          <p className="text-red-500 text-sm text-center">{serverError}</p>
        )}
        {/* Login Button */}
        <button
          type="submit"
          disabled={isSubbmiting}
          className="w-full bg-[#FF385C] hover:bg-[#e03150] text-white py-3 rounded-xl font-medium transition cursor-pointer flex justify-center"
        >
          {isSubbmiting ? <Spinner className="size-8" /> : "Login"}
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
          className="w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition cursor-pointer"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 pt-2">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-[#FF385C] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
