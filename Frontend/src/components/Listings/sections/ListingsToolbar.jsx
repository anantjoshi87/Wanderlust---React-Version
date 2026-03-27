import SearchBar from "@/components/common/Navbar/SearchBar";
import React from "react";
import { FilterDropdown } from "../controls/FilterDropdown";

const ListingsToolbar = ({ onSearch }) => {
  return (
    <div className="flex items-center gap-4 w-full max-w-[800px]">
      <SearchBar
        variant="allListingsTab"
        onSearch={onSearch}
      />
      <FilterDropdown />
    </div>
  );
};

export default ListingsToolbar;
