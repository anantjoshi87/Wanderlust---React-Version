import { CalendarCheck, DollarSign, Home, TrendingUp } from "lucide-react";
import React from "react";

const analyticsData = [
  {
    label: "Total Listings",
    value: "4",
    icon: Home,
    trend: "+1 this month",
  },
  {
    label: "Total Earnings",
    value: "$12,450",
    icon: DollarSign,
    trend: "+15% vs last month",
  },
  {
    label: "Occupancy Rate",
    value: "78%",
    icon: CalendarCheck,
    trend: "+5% vs last month",
  },
  {
    label: "Active Bookings",
    value: "12",
    icon: TrendingUp,
    trend: "+3 this week",
  },
];

const StatCard = ({ icon: Icon, label, value, trend }) => (
  <div className="bg-white p-6 rounded-[20px] border border-border/40 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow flex items-start gap-4">
    <div className="p-3 rounded-2xl bg-primary/10 text-primary">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <h4 className="text-2xl font-bold mt-1 text-foreground">{value}</h4>
      {trend && (
        <p className="text-xs font-medium text-green-600 flex items-center gap-1 mt-1">
          {trend}
        </p>
      )}
    </div>
  </div>
);

const AnalyticsMiniCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {analyticsData.map((data, idx) => (
        <StatCard key={idx} {...data} />
      ))}
    </div>
  );
};

export default AnalyticsMiniCard;
