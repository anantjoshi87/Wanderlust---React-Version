import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import VerifyOtp from "../pages/auth/VerifyOtp";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

import ListingsPage from "../pages/listings/ListingsPage";
import ListingDetails from "../pages/listings/ListingDetails";
import CreateListing from "../pages/listings/CreateListing";
import EditListing from "../pages/listings/EditListing";

import Profile from "../pages/user-profile/Profile";
import Dashboard from "../pages/user-profile/Dashboard";

import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

import ProtectedRoute from "../components/common/ProtectedRoute";
import Bookings from "@/pages/user-profile/Bookings";
import SavedListings from "@/pages/user-profile/SavedListings";
import Notifications from "@/pages/user-profile/Notifications";
import Security from "@/pages/user-profile/Security";
import { Settings } from "lucide-react";
import UserProfileLayout from "@/pages/user-profile/UserProfileLayout";
import UserPlaceholderPage from "@/pages/user-profile/UserPlaceholderPage";
import MyListings from "@/pages/user-profile/MyListings";

const RouterProvider = () => {
  return (
    <Routes>
      {/* Mainlayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/listings">
          {/* listing routes */}
          <Route index element={<ListingsPage />} />
          <Route path=":id" element={<ListingDetails />} />

          {/* protected listings */}
          <Route element={<ProtectedRoute />}>
            <Route path="new" element={<CreateListing />} />
            <Route path=":id/edit" element={<EditListing />} />
          </Route>
        </Route>
      </Route>

      {/* Authlayout */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      {/* protected user */}
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <UserProfileLayout />
          </ProtectedRoute>
        }
      >
        {/* redirect /user -> /user/profile */}
        <Route index element={<Navigate to="profile" replace />} />

        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<UserPlaceholderPage />} />
        <Route path="my-listings" element={<MyListings />} />
        <Route path="my-bookings" element={<UserPlaceholderPage />} />
        <Route path="saved" element={<UserPlaceholderPage />} />
        <Route path="notifications" element={<UserPlaceholderPage />} />
        <Route path="security" element={<UserPlaceholderPage />} />
        <Route path="settings" element={<UserPlaceholderPage />} />
      </Route>
    </Routes>
  );
};

export default RouterProvider;
