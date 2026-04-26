import { Star } from "lucide-react";
import React, { useState } from "react";

const ReviewRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);
  return (
    <div>
      <p className="mb-2 font-semibold">Your Rating</p>

      <div className="flex items-center gap-4">
        <div className="flex gap-2" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((num) => {
            const isActive = num <= (hover || rating);
            const isHoveredStar = num === hover;

            return (
              <Star
                key={num}
                size={30}
                onClick={() => setRating(num)}
                onMouseEnter={() => setHover(num)}
                className={`
                cursor-pointer transition-all duration-150
                ${isActive ? "text-red-500 fill-red-500" : "text-gray-300"}
                ${isHoveredStar ? "scale-125" : ""}
              `}
              />
            );
          })}
        </div>

        {rating > 0 && (
          <p className="text-gray-700 font-semibold">
            {rating} {rating > 1 ? "stars" : "star"}
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewRating;
