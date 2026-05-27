import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Eye, Heart, Home, TrendingUp } from "lucide-react";
import React from "react";

const StatCard = ({ icon: Icon, label, value, trend }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardContent className="p-6 flex items-start gap-4">
      <div className="p-3 rounded-xl bg-primary/10 text-primary">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <h4 className="text-2xl font-bold mt-1">{value}</h4>
        {trend && (
          <p className="text-xs font-medium text-green-600 flex items-center gap-1 mt-1">
            <TrendingUp className="w-3 h-3" /> {trend}
          </p>
        )}
      </div>
    </CardContent>
  </Card>
);

const ActivityStatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <StatCard
        icon={Home}
        label="Total Listings"
        value="4"
        trend="+1 this month"
      />
      <StatCard icon={CheckCircle2} label="Active Listings" value="3" />
      <StatCard icon={Heart} label="Saved Items" value="12" />
      <StatCard
        icon={Eye}
        label="Total Views"
        value="8.4k"
        trend="+12% vs last week"
      />
    </div>
  );
};

export default ActivityStatsCards;
