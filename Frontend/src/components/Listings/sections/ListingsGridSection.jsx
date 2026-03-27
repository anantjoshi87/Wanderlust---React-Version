import React, { useEffect, useState } from "react";
import { getAllListings } from "@/api/listings.api";
import ListingCard from "../cards/ListingCard";

const ListingsGridSection = ({ searchedlistings }) => {
  const [Listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await getAllListings();
        setListings(response.data.listings);
      } catch (err) {
        console.log(err);
      }
    };
    fetchListings();
  }, []);

  useEffect(() => {
    if (Array.isArray(searchedlistings)) {
      setListings(searchedlistings);
    }
  }, [searchedlistings]);

  return (
    <section className="py-8">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {(Listings ?? []).map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingsGridSection;
