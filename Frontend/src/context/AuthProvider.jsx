import { useEffect, useState } from "react";
import { AuthContext } from "./authContextBase";
import {
  registerUser,
  verifyEmail,
  getUser,
  loginUser,
  logoutUser,
  logoutUserAllAcc,
  rotateToken,
  forgotPassword,
  verifyResetOtp,
  resetPassword,
} from "../api/auth.api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await getUser();
      setUser(res.data.user);
    } catch (err) {
      console.error("Auth check failed:", err.response?.data || err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const register = (data) => registerUser(data);

  const emailVerify = (data) => verifyEmail(data);

  const login = async (data) => {
    const res = await loginUser(data);
    setUser(res.data.user);
    return res;
  };

  const logout = async () => {
    const res = await logoutUser();
    setUser(null);
    return res;
  };

  const logoutAll = async () => {
    await logoutUserAllAcc();
    setUser(null);
  };

  const refreshAuth = async () => {
  const res = await rotateToken();
  return res;
};

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        register,
        emailVerify,
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
