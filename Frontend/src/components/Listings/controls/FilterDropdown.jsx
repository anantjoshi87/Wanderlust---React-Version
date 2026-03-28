"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { FunnelPlus } from "lucide-react";

const priceRanges = {
  "Under $3000": { min: "", max: "3000" },
  "$3000-$5000": { min: "3000", max: "5000" },
  "$5000-$8000": { min: "5000", max: "8000" },
  "Above $8000": { min: "8000", max: "" },
};
const priceRangeLabels = Object.keys(priceRanges);

const categories = [
  "beach",
  "mountain",
  "city",
  "desert",
  "forest",
  "camping",
  "lake",
  "historic",
];

export function FilterDropdown({
  selectedPrice,
  selectedCategory,
  onPriceChange,
  onCategoryChange,
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon-lg" className="p-6.5">
          <FunnelPlus className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Price Range</DropdownMenuLabel>

          <DropdownMenuRadioGroup value={selectedPrice}>
            {priceRangeLabels.map((price) => (
              <DropdownMenuRadioItem
                key={price}
                value={price}
                onSelect={(e) => {
                  e.preventDefault();
                  const isSame = selectedPrice === price;
                  if (isSame) {
                    onPriceChange("", "", "");
                    return;
                  }
                  const range = priceRanges[price];
                  onPriceChange(range.min, range.max, price);
                }}
              >
                {price}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>Category</DropdownMenuLabel>

          <DropdownMenuRadioGroup value={selectedCategory}>
            {categories.map((category) => (
              <DropdownMenuRadioItem
                key={category}
                value={category}
                onSelect={(e) => {
                  e.preventDefault();
                  onCategoryChange(
                    selectedCategory === category ? "" : category,
                  );
                }}
              >
                {category}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
