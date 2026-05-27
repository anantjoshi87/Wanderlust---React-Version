import { Search } from "lucide-react";
import React from "react";

const FilterAndSearchbar = ({ tabs, activeTab, setActiveTab, listings }) => {
  return (
    listings.length > 0 && (
      <div className="bg-white p-2 rounded-2xl border border-border/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sticky top-18 md:top-4 z-20">
        <div className="flex items-center gap-1 w-full md:w-auto overflow-x-auto no-scrollbar px-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-[320px] px-2 md:px-0 pr-2">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search listings..."
            className="h-11 w-full rounded-xl border border-border bg-muted/30 pl-11 px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
          />
        </div>
      </div>
    )
  );
};

export default FilterAndSearchbar;
