import ListingGallery from "@/components/Listings/ListingGallery";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ListingDetails = () => {
  return (
    <>
      <div className="py-8">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <Link to={"/listings"} className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Listings</span>
          </Link>
        </div>
      </div>
      
      <ListingGallery />
    </>
  );
};

export default ListingDetails;
