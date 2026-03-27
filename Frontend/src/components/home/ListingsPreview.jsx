import React, { useEffect, useState } from "react";
import ListingCard from "../Listings/cards/ListingCard";
import { getRandomListings } from "@/api/listings.api";
import { Link } from "react-router-dom";

const ListingsPreview = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [previewListings, setPreviewListings] = useState([]);

  useEffect(() => {
    const updateCount = () => {
      let count;
      if (window.innerWidth >= 1280) {
        count = 8;
      } else if (window.innerWidth >= 1024) {
        count = 6;
      } else if (window.innerWidth >= 768) {
        count = 4;
      } else {
        count = 4;
      }

      setVisibleCount((prev) => (prev != count ? count : prev));
    };

    updateCount();

    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await getRandomListings();
        setPreviewListings(response.data.listings);
      } catch (err) {
        console.error(err);
      }
    };
    fetchListings();
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold leading-tight">
            Explore all stays
          </h2>
          <p className="text-gray-600 mt-1">
            Discover more places for your next trip
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {previewListings.slice(0, visibleCount).map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>
        <div className="flex justify-center items-center pt-8">
          <Link to={"/listings"}>
            <button className="py-3 px-4 sm:py-3 sm:px-6 rounded-xl text-gray-700 font-semibold border-2 border-gray-300 hover:border-gray-400 transition whitespace-nowrap cursor-pointer">
              View all Listings
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ListingsPreview;
