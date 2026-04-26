import React from "react";
import ListingInfo from "./ListingInfo";
import BookingCard from "./cards/BookingCard";
import { Shield } from "lucide-react";

const ListingDetailsGrid = ({listing}) => {  
  return (
    <div className="py-16">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid xl:grid-cols-3 gap-25">
          <div className="col-span-2">
            <ListingInfo listing={listing}/>
          </div>
          <div className="col-span-1 relative">
            <div className="sticky top-8">
              <BookingCard />
              <div className="flex justify-center items-center gap-1 text-gray-500 hover:text-gray-900 text-sm text-center pt-5 cursor-pointer">
                <Shield />
                <span className="underline">Report this Listing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsGrid;
