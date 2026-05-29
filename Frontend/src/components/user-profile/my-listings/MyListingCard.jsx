import { Button } from "@/components/ui/button";
import { Bath, BedDouble, Edit, ExternalLink, MapPin, Star, Trash2, Wifi } from "lucide-react";
import React from "react";

const MyListingCard = ({listing}) => {
  const isPublished = listing.status === "Published";

  return (
    <div className="group bg-white rounded-[24px] border border-border/40 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm border flex items-center gap-1.5 ${
              isPublished
                ? "bg-white/95 text-green-700 border-green-100/50"
                : "bg-white/95 text-gray-700 border-gray-200/50"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${isPublished ? "bg-green-500" : "bg-gray-400"}`}
            ></span>
            {listing.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="font-semibold text-lg leading-tight text-foreground line-clamp-1">
            {listing.title}
          </h3>
          <div className="flex items-center gap-1 font-medium text-sm shrink-0">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            {listing.rating}{" "}
            <span className="text-muted-foreground">({listing.reviews})</span>
          </div>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 shrink-0" />
          <span className="truncate">{listing.location}</span>
        </p>

        {/* Amenities Row */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1.5">
            <BedDouble className="w-4 h-4" /> {listing.amenities.beds}
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" /> {listing.amenities.baths}
          </div>
          {listing.amenities.wifi && (
            <div className="flex items-center gap-1.5">
              <Wifi className="w-4 h-4" /> WiFi
            </div>
          )}
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-border/50 mb-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Bookings
            </span>
            <span className="font-semibold text-foreground">
              {listing.stats.bookings}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Views
            </span>
            <span className="font-semibold text-foreground">
              {listing.stats.views.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Earnings
            </span>
            <span className="font-semibold text-green-700">
              ${listing.stats.earnings.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-auto flex items-center justify-between gap-3">
          <div className="font-bold text-lg text-foreground">
            ${listing.price}{" "}
            <span className="text-sm font-normal text-muted-foreground">
              / night
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-xl border-border/60 hover:bg-muted"
              title="Delete"
            >
              <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive transition-colors" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-xl border-border/60 hover:bg-muted"
              title="Preview"
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button size="sm" className="rounded-xl h-9 px-4 shadow-sm">
              <Edit className="w-4 h-4 mr-2" /> Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListingCard;
