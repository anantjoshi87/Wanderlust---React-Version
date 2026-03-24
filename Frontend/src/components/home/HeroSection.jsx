import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-[1360px] mx-auto px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,45%)_minmax(0,55%)] gap-12 items-center">
          <div className="flex flex-col justify-center max-w-xl">
            <div className="flex flex-col">
              <h1 className="font-extrabold text-5xl mb-6 leading-tight capitalize">
                Find your next perfect stay
              </h1>
              <p className="text-lg  font-normal text-gray-800 mb-8">
                Discover unique places to stay around the world. From cozy
                cabins to beachfront villas, find your ideal escape.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                to={"/listings"}
                className="bg-red-500 py-3 px-3 sm:py-3 sm:px-6 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition hover:bg-red-600 whitespace-nowrap"
              >
                Explore Listings
              </Link>
              <Link
                to={"/listings/new"}
                className="py-3 px-3 sm:py-3 sm:px-6 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 transition whitespace-nowrap"
              >
                Become a Host
              </Link>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-sm min-w-0">
            <img
              src="https://images.unsplash.com/photo-1769298084996-8ed5d3a72870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHNjZW5pYyUyMHZpZXd8ZW58MXx8fHwxNzc0MjQ1MTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="hero image"
              className="w-full object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
