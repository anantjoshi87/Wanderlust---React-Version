import React from "react";
import { useLocation } from "react-router";
import UserProfileLayout from "./UserProfileLayout";

const UserPlaceholderPage = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/").pop() || "";
  const title = pathName.charAt(0).toUpperCase() + pathName.slice(1);

  return (
      <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            {title}
          </h1>

          <p className="text-muted-foreground mt-1">
            This section is currently under development.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-border/40 bg-card text-card-foreground shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
          {/* Card Header */}
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-lg font-semibold leading-none tracking-tight">
              {title} Overview
            </h3>
          </div>

          {/* Card Content */}
          <div className="p-6 pt-0">
            <p className="text-muted-foreground">
              More features and widgets for the {title.toLowerCase()} section
              are coming soon.
            </p>
          </div>
        </div>
      </div>
  );
};

export default UserPlaceholderPage;
