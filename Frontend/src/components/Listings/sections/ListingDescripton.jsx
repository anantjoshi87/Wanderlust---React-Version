import React from "react";

const ListingDescription = ({listing}) => {
  return (
    <div className="border-b border-gray-200 pb-6 mt-6">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          About this place
        </h2>

        <p className="text-gray-700 text-base">
          {listing.description}
        </p>
      </div>
    </div>
  );
};

export default ListingDescription;