import { Heart, MapPin, Share2, Star } from "lucide-react";
import React from "react";
import { HashLink } from "react-router-hash-link";

const ListingDetailsHeader = ({listing}) => {
  return (
    <div className="border-b border-gray-200 pb-8">
      <div className="flex flex-col">
        <div className="mb-4">
          <h1 className="text-[40px] font-extrabold mb-3">
            {listing.title}
          </h1>
          <div className="flex gap-1 text-gray-600">
            <MapPin />
            <span>{listing.address}</span>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="flex gap-4">
            <div className="flex gap-1">
              <Star fill="currentColor" stroke="none" />
              <span>4.8</span>
            </div>
            <HashLink smooth to="#reviews">
              <span className="text-gray-500 underline">247 reviews</span>
            </HashLink>
          </div>

          <div className="flex gap-4">
            <div className="flex gap-2 text-gray-600 hover:text-gray-800 underline cursor-pointer">
              <Share2 />
              <span>Share</span>
            </div>
            <div className="flex gap-2 text-gray-600 hover:text-gray-800 underline">
              <Heart />
              <span>Save</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsHeader;
