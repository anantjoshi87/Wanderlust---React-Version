import React, { useState, useEffect } from "react";
import ListingCard from "../Listings/cards/ListingCard";
import { getFeaturedListings } from "@/api/listings.api";
import Marquee from "react-fast-marquee";

const SafeMarquee = Marquee?.default ?? Marquee;

const FeaturedListings = () => {
  const [featuredListings, setFeaturedListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await getFeaturedListings();
        const listings = response?.data?.listings ?? [];

        setFeaturedListings(Array.isArray(listings) ? listings : []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        {/* header */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold leading-tight">
            Featured stays this week
          </h2>
          <p className="text-gray-600 mt-1">Top stays chosen this week</p>
        </div>
        {/* carousel */}
        <div className="overflow-hidden no-scrollbar relative">
            <div className="flex gap-6 transition-transform duration-500 pl-1">
              <SafeMarquee pauseOnHover speed={40} gradient={false}>
                {featuredListings.map((listing) => (
                  <ListingCard key={listing._id} listing={listing} varient={"carousel"} />
                ))}
              </SafeMarquee>
            </div>
          </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
