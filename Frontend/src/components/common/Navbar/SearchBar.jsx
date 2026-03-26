import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const SearchBar = () => {
  return (
    <div className="hidden md:flex flex-1 justify-center select-none">
      <div className="flex items-center border border-gray-200 rounded-full h-13 px-3 py-1.5 shadow-sm hover:shadow-md transition ">
        <label htmlFor="searchbox" className="pr-2">
          <Search className="w-6 h-6 text-gray-400" />
        </label>

        <input
          type="text"
          placeholder="Search destinations..."
          id="searchbox"
          className="w-60 xl:w-80 outline-none placeholder:text-gray-400"
        />

        <Button className="rounded-full px-4 h-9 text-sm font-medium">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
