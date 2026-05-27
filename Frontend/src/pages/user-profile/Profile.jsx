import AboutSection from "@/components/user-profile/profile/AboutSection";
import ActivityStatsCards from "@/components/user-profile/profile/ActivityStatsCards";
import DangerZone from "@/components/user-profile/profile/DangerZone";
import ProfileCompletion from "@/components/user-profile/profile/ProfileCompletion";
import ProfileHeaderCard from "@/components/user-profile/profile/ProfileHeaderCard";
import RecentSection from "@/components/user-profile/profile/RecentSection";
import SecuritySection from "@/components/user-profile/profile/SecuritySection";
import React from "react";

const Profile = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Profile Overview
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your account settings and preferences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Main Content) */}
        <div className="lg:col-span-2 space-y-8">
          {/* 1. Profile Header Card */}
          <ProfileHeaderCard />

          {/* 3. Activity Stats Cards */}
          <ActivityStatsCards />

          {/* 4. About Section */}
          <AboutSection />

          {/* 5. Recent Activity */}
          <RecentSection />
        </div>

        {/* Right Column (Sidebar-ish content) */}
        <div className="space-y-8">
          {/* 2. Profile Completion */}
          <ProfileCompletion />

          {/* 6. Security Section Mini */}
          <SecuritySection />

          {/* 7. Danger Zone */}
          <DangerZone/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
