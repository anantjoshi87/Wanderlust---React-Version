import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Edit, Heart, Home, Shield } from "lucide-react";
import React from "react";

const ActivityItem = ({ title, date, description, type }) => {
  const getIcon = () => {
    switch (type) {
      case "listing":
        return <Home className="w-4 h-4 text-blue-500" />;
      case "profile":
        return <Edit className="w-4 h-4 text-orange-500" />;
      case "saved":
        return <Heart className="w-4 h-4 text-primary" />;
      default:
        return <Shield className="w-4 h-4 text-green-500" />;
    }
  };

  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      <div className="absolute left-0 top-1 w-6 h-6 bg-white border border-border rounded-full flex items-center justify-center z-10">
        {getIcon()}
      </div>
      <div className="absolute left-3 top-7 bottom-0 w-px bg-border last:hidden"></div>

      <div className="flex flex-col gap-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h5 className="font-semibold text-sm">{title}</h5>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const RecentSection = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest actions and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-2">
            <ActivityItem
              type="listing"
              title="Added new listing"
              description="Modern Loft in Downtown SF was published."
              date="2 days ago"
            />
            <ActivityItem
              type="saved"
              title="Saved an item"
              description="You saved 'Cozy Cabin in Lake Tahoe'."
              date="4 days ago"
            />
            <ActivityItem
              type="profile"
              title="Updated profile"
              description="You updated your bio and social links."
              date="1 week ago"
            />
            <ActivityItem
              type="security"
              title="Security alert"
              description="New login from Chrome on Mac OS."
              date="2 weeks ago"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentSection;
