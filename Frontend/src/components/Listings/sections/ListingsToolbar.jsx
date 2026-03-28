import SearchBar from "@/components/common/Navbar/SearchBar";
import React from "react";
import { FilterDropdown } from "../controls/FilterDropdown";

const ListingsToolbar = ({
  onSearch,
  currentSearch,
  selectedPrice,
  selectedCategory,
  onPriceChange,
  onCategoryChange,
}) => {
  return (
    <div className="flex items-center gap-4 w-full max-w-[800px]">
      <SearchBar
        variant="allListingsTab"
        onSearch={onSearch}
        currentSearch={currentSearch}
      />
      <FilterDropdown
        selectedPrice={selectedPrice}
        selectedCategory={selectedCategory}
        onPriceChange={onPriceChange}
        onCategoryChange={onCategoryChange}
      />
    </div>
  );
};

export default ListingsToolbar;
