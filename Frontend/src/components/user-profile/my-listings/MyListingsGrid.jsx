import React from "react";
import MyListingCard from "./MyListingCard";

const MyListingsGrid = ({ filteredListings }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredListings.map((listing) => (
        <MyListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default MyListingsGrid;
