import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronLeft, LogOut } from "lucide-react";
import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { userNavItems } from "@/constants";
import { useAuth } from "@/hooks/useAuth";

const SidebarContent = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.from) {
      sessionStorage.setItem("user-return-route", location.state.from);
    }
  }, [location.state]);

  const from =
    location.state?.from || sessionStorage.getItem("user-return-route") || "/";

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Header */}
      <div className="border-b border-border/40 px-3 py-5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => navigate(from)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-muted cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </button>

          <div className="flex items-center gap-3 min-w-0">
            <div className="relative shrink-0">
              {user?.profile_photo ? (
                <img
                  src={user.profile_photo}
                  alt={user.username}
                  className="h-12 w-12 rounded-full object-cover border-2 border-background"
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-lg border-2 border-background">
                  {user?.username?.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="absolute -bottom-1 -right-1 rounded-full bg-background p-0.5">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </div>
            </div>

            <div className="min-w-0 flex flex-col">
              <span className="truncate text-sm font-semibold">
                {user.username}
              </span>

              <span className="text-xs text-muted-foreground">
                Verified Host
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
        {userNavItems.map((item) => {
          return (
            <NavLink
              key={item.name}
              to={item.href}
              end
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-[#FF385C]/10 text-[#FF385C]"
                    : "text-[#717182] hover:bg-[#ececf0]/50 hover:text-foreground",
                )
              }
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-border/40 p-4">
        <button
          type="button"
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10 cursor-pointer"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarContent;
