import { Button } from "@/components/ui/button";
import AnalyticsMiniCard from "@/components/user-profile/my-listings/AnalyticsMiniCard";
import EmptyState from "@/components/user-profile/my-listings/EmptyState";
import FilterAndSearchbar from "@/components/user-profile/my-listings/FilterAndSearchbar";
import MyListingsGrid from "@/components/user-profile/my-listings/MyListingsGrid";
import { Home, Plus, Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const mockListings = [
  {
    id: 1,
    title: "Modern Loft with Skyline View",
    location: "Downtown San Francisco, CA",
    price: 250,
    rating: 4.9,
    reviews: 124,
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    amenities: { beds: 2, baths: 1, wifi: true },
    stats: { bookings: 45, views: 1205, earnings: 11250 },
  },
  {
    id: 2,
    title: "Luxury Villa with Infinity Pool",
    location: "Malibu, CA",
    price: 850,
    rating: 5.0,
    reviews: 89,
    status: "Published",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    amenities: { beds: 5, baths: 4, wifi: true },
    stats: { bookings: 12, views: 3420, earnings: 10200 },
  },
  {
    id: 3,
    title: "Cozy A-Frame Cabin in the Woods",
    location: "Lake Tahoe, NV",
    price: 180,
    rating: 4.8,
    reviews: 210,
    status: "Draft",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop",
    amenities: { beds: 1, baths: 1, wifi: false },
    stats: { bookings: 0, views: 0, earnings: 0 },
  },
];

const MyListings = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Published", "Draft", "Archived"];

  const filteredListings = mockListings.filter((listing) =>
    activeTab === "All" ? true : listing.status === activeTab,
  );

  return (
    <div className="max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
            My Listings
          </h1>
          <p className="text-muted-foreground text-base">
            Manage and track all your published properties
          </p>
        </div>
        {mockListings.length > 0 && (
          <Link to={"/listings/new"}>
            <Button size="lg" className="rounded-xl shadow-md h-12 px-6">
              <Plus className="w-5 h-5 mr-2" />
              Create New Listing
            </Button>
          </Link>
        )}
      </div>

      {/* Analytics Mini Cards */}
      {mockListings.length > 0 && <AnalyticsMiniCard />}

      {/* Filter & Search Bar */}
      <FilterAndSearchbar
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        listings={mockListings}
      />

      {/* Listings Grid */}
      {filteredListings.length > 0 ? (
        <MyListingsGrid filteredListings={filteredListings} />
      ) : (
        /* Empty State */
        <EmptyState activeTab={activeTab} />
      )}
    </div>
  );
};

export default MyListings;
