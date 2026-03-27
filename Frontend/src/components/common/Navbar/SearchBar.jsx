import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchBar = ({ variant, onSearch = () => {} }) => {
  const [inputValue, setinputValue] = useState("");
  return (
    <div
      className={`flex-1 justify-center select-none ${variant === "allListingsTab" ? "flex min-w-0" : "hidden md:flex "}`}
    >
      <div
        className={`flex items-center border border-gray-200 rounded-full h-13 px-3 py-1.5 shadow-sm hover:shadow-md transition ${variant === "allListingsTab" ? "w-full" : ""}`}
      >
        <label htmlFor="searchbox" className="pr-2">
          <Search className="w-6 h-6 text-gray-400" />
        </label>

        <input
          type="text"
          placeholder="Search destinations..."
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(inputValue);
            }
          }}
          id="searchbox"
          className={`outline-none placeholder:text-gray-400
            ${variant == "allListingsTab" ? "w-full min-w-0" : "w-60 xl:w-80"}`}
        />

        <Button
          className="rounded-full px-4 h-9 text-sm font-medium"
          onClick={() => onSearch(inputValue)}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
