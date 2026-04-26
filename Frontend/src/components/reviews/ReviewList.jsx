"use client";

import React from "react";
import { Star } from "lucide-react";
import CommonButton from "../common/CommonButton";

const reviews = [
  {
    image:
      "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    username: "Sarah Johnson",
    date: "26 March 2026",
    rating: "5",
    review:
      "Absolutely stunning property! The ocean views were breathtaking and the amenities exceeded all expectations. Perfect for a relaxing getaway.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Michel Don",
    date: "26 March 2026",
    rating: "4",
    review:
      "Incredible stay! The host was super responsive and the place was even better than the photos. Highly recommend for families.",
  },
];

const ReviewList = () => {
  return (
    <div className="mt-10">
      <div  className="space-y-9">
        {reviews.map((review, index) => (
          <div key={index} className="">
            {/* Top section */}
            <div className="flex items-center gap-3 mb-4">
              {/* Image */}
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={review.image} alt="" className="object-cover" />
              </div>

              {/* Name + date */}
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">
                  {review.username}
                </span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: Number(review.rating) }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="currentColor"
                  className="text-black"
                />
              ))}
            </div>

            {/* Review text */}
            <p className="text-gray-600 text-[15px] font-medium leading-relaxed">
              {review.review}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <CommonButton text={"Show all 247 reviews"}/>
      </div>
    </div>
  );
};

export default ReviewList;
