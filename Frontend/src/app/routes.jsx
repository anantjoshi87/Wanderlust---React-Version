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

import ProtectedRoute from "../components/common/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-Email" element={<VerifyOtp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* listing routes */}
      <Route path="/listings" element={<ListingsPage />} />
      <Route path="/listings/:id" element={<ListingDetails />} />

      {/* protected listings */}
      <Route path="/listings" element={<ProtectedRoute />}>
        <Route path="new" element={<CreateListing />} />
        <Route path=":id/edit" element={<EditListing />} />
      </Route>

      {/* protected user */}
      <Route path="/user" element={<ProtectedRoute />}>
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="my-listings" element={<MyListings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
