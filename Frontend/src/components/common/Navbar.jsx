import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="h-20 bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100 sticky">
      <div className="max-w-[1440px] mx-auto px-20 h-full flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex flex-1">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Wanderlust
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center flex-1">
          <div className="flex items-center border border-gray-200 rounded-full px-3 py-1.5 shadow-sm hover:shadow-md transition ">
            <label htmlFor="searchbox" className="pr-2">
              <Search className="w-5 h-5 text-gray-400" />
            </label>

            <input
              type="text"
              placeholder="Search destinations..."
              id="searchbox"
              className="w-60 text-sm outline-none placeholder:text-gray-400"
            />

            <Button className="rounded-full px-4 h-9 text-sm font-medium">
              Search
            </Button>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center justify-end flex-1 gap-6 text-md font-medium">
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

          <NavLink
            to="/listings/new"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold"
                : "text-gray-700 hover:text-gray-900 transition-colors duration-200"
            }
          >
            Become a Host
          </NavLink>

          <button className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2 shadow-sm hover:shadow-md transition cursor-pointer">
            <Menu className="h-4 w-4 text-gray-700" />
            <User className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;