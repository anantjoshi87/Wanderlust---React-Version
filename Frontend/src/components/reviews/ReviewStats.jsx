"use client";

import { Star } from "lucide-react";
import React from "react";
import ProgressBar from "../common/ProgressBar";

const stats = [
  { attribute: "Cleanliness", rating: "5.0" },
  { attribute: "Communication", rating: "4.6" },
  { attribute: "Check-in", rating: "4.9" },
  { attribute: "Accuracy", rating: "5.0" },
  { attribute: "Location", rating: "4.7" },
  { attribute: "Value", rating: "4.4" },
];

const ReviewStats = () => {
  return (
    <div className="mb-6">
      {/* Top rating */}
      <div className="flex items-center gap-2 py-1">
        <span className="h-6 w-6">
          <Star fill="currentColor" stroke="none" />
        </span>
        <span className="text-2xl font-extrabold">
          4.98 <span className="text-base">•</span> 247 reviews
        </span>
      </div>

      {/* Stats grid */}
      <div className="pt-6">
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-20">
          {stats.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* Attribute */}
              <span className="w-28 text-gray-900">{item.attribute}</span>

              <div className="flex items-center gap-6">
                {/* Progress bar */}
                <div className="w-32">
                  <ProgressBar rating={item.rating} />
                </div>

                {/* Rating */}
                <span className="text-gray-900 font-bold">{item.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewStats;
