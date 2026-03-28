import { getAllListings } from "@/api/listings.api";
import ListingsGridSection from "@/components/Listings/sections/ListingsGridSection";
import ListingsHeader from "@/components/Listings/sections/ListingsHeader";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ListingsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const searchQuery = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const min = searchParams.get("min") || ""; //min price
    const max = searchParams.get("max") || ""; //max price
    const price = searchParams.get("price") || "";

    const fetchListings = async () => {
      try {
        setLoading(true);

        const res = await getAllListings({
          search: searchQuery,
          category,
          min,
          max,
        });
        setListings(res.data.listings ?? []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    setSelectedCategory(category);
    setSelectedPrice(price);
    fetchListings();
  }, [searchParams]);

  const handleCategoryChange = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("category", value);
      setSelectedCategory(value);
    } else {
      params.delete("category");
      setSelectedCategory("");
    }

    setSearchParams(params);
  };

  const handlePriceChange = (min, max, label = "") => {
    const params = new URLSearchParams(searchParams);

    if (min) params.set("min", min);
    else params.delete("min");

    if (max) params.set("max", max);
    else params.delete("max");

    if (label) params.set("price", label);
    else params.delete("price");

    setSelectedPrice(label || "");

    setSearchParams(params);
  };

  const handleSearchTerm = (value) => {
    const query = value?.trim() || "";

    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  };

  const currentSearch = searchParams.get("search") || "";

  return (
    <div>
      <ListingsHeader
        onSearch={handleSearchTerm}
        currentSearch={currentSearch}
        selectedPrice={selectedPrice}
        selectedCategory={selectedCategory}
        onPriceChange={handlePriceChange}
        onCategoryChange={handleCategoryChange}
      />
      <ListingsGridSection listings={listings} />
    </div>
  );
};

export default ListingsPage;
