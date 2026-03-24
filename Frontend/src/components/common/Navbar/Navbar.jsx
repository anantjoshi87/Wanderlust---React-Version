import React from "react";
import { Link, NavLink } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import { AuthMenu } from "./AuthMenu";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const user = null;
  return (
    <nav className="h-20 bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-[1360px] mx-auto px-8 lg:px-10 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-1 sm:flex-0">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Wanderlust
          </Link>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Right Navigation */}
        <div className="flex flex-1 sm:flex-0 items-center justify-end gap-5 text-md font-medium">
          <div className="hidden lg:flex">
            <NavLink
              to="/listings"
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

          {!user ? <AuthMenu /> : <AuthButtons />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
