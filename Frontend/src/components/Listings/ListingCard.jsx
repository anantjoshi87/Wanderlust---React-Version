import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ListingCard = ({ listing, varient = "grid" }) => {
  return (
    <Link to={`/listings/${listing._id}`}>
      <div
        className={`flex flex-col cursor-pointer select-none group
      ${varient === "carousel" ? "mr-6" : ""} 
        `}
      >
        <div
          className={`aspect-square rounded-2xl overflow-hidden mb-3
          ${
            varient === "carousel"
              ? "w-[260px] md:w-[280px] xl:w-[300px] shrink-0"
              : "w-full"
          }`}
        >
          <img
            src={listing.image?.url}
            alt={listing.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg text-gray-900 leading-snug">
              {listing.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="w-4 h-4 fill-red-500 text-red-500" />
              <span className="text-sm font-medium text-gray-900">
                {listing.rating}
              </span>
            </div>
          </div>
          <p className="text-gray-600">{listing.address}</p>
          <div className="flex items-center gap-1 my-1/2">
            <p className="font-semibold text-gray-900">${listing.price}</p>
            <span className="text-gray-900"> night</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
