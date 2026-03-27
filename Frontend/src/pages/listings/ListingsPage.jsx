import { getAllListings } from "@/api/listings.api";
import ListingsGridSection from "@/components/Listings/sections/ListingsGridSection";
import ListingsHeader from "@/components/Listings/sections/ListingsHeader";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ListingsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedlistings, setSearchedlistings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchQuery = searchParams.get("search") || "";
    const fetchListings = async (searchQuery) => {
      const res = await getAllListings({ search: searchQuery });
      setSearchedlistings(res.data.listings ?? []);
    };
    fetchListings(searchQuery);
  }, [searchParams]);

  const handleSearch = (value) => {
    const query = value?.trim() || "";
    if (query) {
      setSearchParams({ search: query });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      <ListingsHeader onSearch={handleSearch} />
      <ListingsGridSection searchedlistings={searchedlistings} />
    </div>
  );
};

export default ListingsPage;
