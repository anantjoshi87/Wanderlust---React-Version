import { useEffect, useRef, useState } from "react";
import { AuthContext } from "./authContextBase";
import {
  registerUser,
  verifyEmail,
  resendOtp,
  getUser,
  loginUser,
  logoutUser,
  logoutUserAllAcc,
  rotateToken,
  forgotPassword,
  verifyResetOtp,
  resetPassword,
} from "../api/auth.api";
import { clearToken, setToken } from "@/utils/tokenManager";
import toast from "react-hot-toast";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const didInit = useRef(false);

  const checkAuth = async () => {
    try {
      const tokenRes = await rotateToken();
      setToken(tokenRes?.data.accessToken);
      const res = await getUser();
      setUser(res.data.user);
    } catch (err) {
      console.error("Auth check failed:", err.response?.data || err.message);
      clearToken();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const register = (data) => registerUser(data);

  const emailVerify = async (data) => {
    try {
      await verifyEmail(data);
      toast.success(`User registered successfully`);
    } catch (err) {
      toast.error("Registration Failed");
      throw err;
    }
  };

  const resendVerificationOtp = async (data) => {
    try {
      const res = await resendOtp(data);
      toast.success("Resend otp successfully");
      return res;
    } catch (err) {
      toast.error("Failed to resend otp");
      throw err;
    }
  };

  const login = async (data) => {
    try {
      const res = await loginUser(data);
      setUser(res.data.user);
      setToken(res.data.accessToken);
      toast.success(`Welcome Back, ${res.data.user.username}!`);
      // return res;
    } catch (err) {
      toast.error("Login Failed");
      throw err;
    }
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
    toast.success("Logged out successfully");
    clearToken();
  };

  const logoutAll = async () => {
    await logoutUserAllAcc();
    setUser(null);
  };

  const refreshAuth = async () => {
    try {
      const res = await rotateToken();
      setToken(res.data.accessToken);
    } catch {
      clearToken();
    }
  };

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        register,
        emailVerify,
        resendVerificationOtp,
        user,
        loading,
        login,
        logout,
        logoutAll,
        checkAuth,
        refreshAuth,
        forgotPassword,
        verifyResetOtp,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
