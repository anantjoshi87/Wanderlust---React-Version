import React from "react";
import ListingsToolbar from "./ListingsToolbar";

const ListingsHeader = ({
  onSearch,
  currentSearch,
  selectedPrice,
  selectedCategory,
  onPriceChange,
  onCategoryChange,
}) => {
  return (
    <header className="py-12">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold mb-2">Explore All Listings</h1>
          <p className="text-gray-800">
            Discover stays, destinations, and experiences
          </p>
        </div>
        <div className="flex justify-center">
          <ListingsToolbar
            onSearch={onSearch}
            currentSearch={currentSearch}
            selectedPrice={selectedPrice}
            selectedCategory={selectedCategory}
            onPriceChange={onPriceChange}
            onCategoryChange={onCategoryChange}
          />
        </div>
      </div>
    </header>
  );
};

export default ListingsHeader;
