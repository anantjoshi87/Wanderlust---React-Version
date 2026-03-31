import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import { AuthMenu } from "./AuthMenu";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import SearchBar from "./SearchBar";

import { useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();
  const hideSearch = pathname === "/listings";

  const navigate = useNavigate();

  const handleSearch = (value) => {
    const query = value?.trim() || "";
    if (query) {
      navigate(`/listings?search=${encodeURIComponent(query)}`);
    } else {
      navigate("/listings");
    }
  };
  return (
    <nav className="h-20 bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-1 sm:flex-0">
          <Link to="/">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 select-none">
              Wanderlust
            </h1>
          </Link>
        </div>

        {/* Search Bar */}
        {!hideSearch && <SearchBar onSearch={handleSearch} />}

        {/* Right Navigation */}
        <div className="flex flex-1 sm:flex-0 items-center justify-end gap-5 text-md font-medium">
          <div className="hidden lg:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-semibold"
                  : "text-gray-700 hover:text-gray-900 transition-colors duration-200"
              }
            >
              Categories
            </NavLink>
          </div>

          <div className="hidden lg:flex">
            <NavLink
              to="/listings/new"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-900 font-semibold"
                  : "text-gray-700 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap"
              }
            >
              Become a Host
            </NavLink>
          </div>

          {loading ? (
            <div className="w-20 h-10 rounded-full bg-gray-100 animate-pulse" />
          ) : user ? (
            <AuthMenu />
          ) : (
            <AuthButtons />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
