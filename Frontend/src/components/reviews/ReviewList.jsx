"use client";

import { Star } from "lucide-react";
import CommonButton from "../common/CommonButton";
import ReviewMenu from "./ReviewMenu";

const ReviewList = ({reviews,user}) => { // id -> listing._id
  return (
    <div className="mt-10">
      <div className="space-y-9">
        {reviews.map((review, index) => (
          <div key={index} className="">
            {/* Top section */}
            <div className="flex justify-between items-center xl:w-[95%]">
              <div className="flex items-center gap-3 mb-4">
                {/* Image */}
                <div className="flex justify-center items-center bg-black text-white text-xl w-12 h-12 rounded-full overflow-hidden">
                  {review?.author?.username ? (
                    review.author.username.charAt(0).toUpperCase()
                  ) : (
                    <img src={review.image} alt="" className="object-cover" />
                  )}
                </div>

                {/* Name + date */}
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900">
                    {review?.author?.username}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
              {review.author._id === user?._id && <ReviewMenu />}
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
            <p className="text-gray-600 text-[15px] font-medium leading-relaxed xl:pr-10">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <CommonButton text={"Show all 247 reviews"} />
      </div>
    </div>
  );
};

export default ReviewList;
