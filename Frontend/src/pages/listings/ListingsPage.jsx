import { getAllListings } from "@/api/listings.api";
import Pagination from "@/components/Listings/sections/Pagination";
import ListingsGridSection from "@/components/Listings/sections/ListingsGridSection";
import ListingsHeader from "@/components/Listings/sections/ListingsHeader";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ListingsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const selectedPrice = searchParams.get("price") || "";
  const selectedCategory = searchParams.get("category") || "";

  useEffect(() => {
    const searchQuery = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";
    const min = searchParams.get("min") || ""; //min price
    const max = searchParams.get("max") || ""; //max price

    const fetchListings = async () => {
      try {
        setLoading(true);

        const res = await getAllListings({
          search: searchQuery,
          category,
          min,
          max,
          page,
          limit: 12,
        });

        const newListings = res.data.listings ?? [];
        if (page === 1) setListings(newListings ?? []);
        else {
          setListings((prev) => [...prev, ...newListings]);
        }
        setHasMore(res.data.hasmorePages);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, [searchParams, page]);

  const handleCategoryChange = (value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    setSearchParams(params);
    setPage(1);
  };

  const handlePriceChange = (min, max, label = "") => {
    const params = new URLSearchParams(searchParams);

    if (min) params.set("min", min);
    else params.delete("min");

    if (max) params.set("max", max);
    else params.delete("max");

    if (label) params.set("price", label);
    else params.delete("price");

    setSearchParams(params);
    setPage(1);
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
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
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
      {hasMore && <Pagination loading={loading} onLoadMore={handleLoadMore} />}
    </div>
  );
};

export default ListingsPage;
