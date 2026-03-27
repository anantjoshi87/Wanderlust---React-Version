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

const priceRanges = [
  "Under ₹3000",
  "₹3000–₹5000",
  "₹5000–₹8000",
  "Above ₹8000",
];

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

export function FilterDropdown() {
  const [selectedPrice, setSelectedPrice] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");

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
            {priceRanges.map((price) => (
              <DropdownMenuRadioItem
                key={price}
                value={price}
                onSelect={(e) => {
                  e.preventDefault();
                  setSelectedPrice(selectedPrice === price ? "" : price);
                  
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
                  setSelectedCategory(
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
