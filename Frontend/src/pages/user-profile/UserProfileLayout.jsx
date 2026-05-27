import { Button } from "@/components/ui/button";
import SidebarContent from "@/components/user-profile/shared/SidebarContent";
import UserSidebar from "@/components/user-profile/shared/SidebarContent";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const UserProfileLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F7F9] flex flex-col md:flex-row font-sans">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-border/40 p-4 flex items-center justify-between sticky top-0 z-20">
        <span className="font-bold text-lg text-primary">Wanderlust</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:sticky top-0 left-0 h-screen w-72 bg-white border-r border-border/40 z-40 transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0",
        )}
      >
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 w-full max-w-[1440px] mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default UserProfileLayout;
