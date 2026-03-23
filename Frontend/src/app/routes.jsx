import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

import Login from "../pages/auth/login";
import Register from "../pages/auth/Register";
import VerifyOtp from "../pages/auth/VerifyOtp";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

import ListingsPage from "../pages/listings/ListingsPage";
import ListingDetails from "../pages/listings/ListingDetails";
import CreateListing from "../pages/listings/CreateListing";
import EditListing from "../pages/listings/EditListing";

import Profile from "../pages/user/Profile";
import Dashboard from "../pages/user/Dashboard";
import MyListings from "../pages/user/MyListings";

import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

import ProtectedRoute from "../components/common/ProtectedRoute";

const AppRoutes = () => {
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

        {/* protected user */}
        <Route path="/user" element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-listings" element={<MyListings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
