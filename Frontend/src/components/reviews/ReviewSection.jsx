import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import ReviewStats from "./ReviewStats";
import { useAuth } from "@/hooks/useAuth";

const ReviewSection = () => {
  const { user } = useAuth();
  return (
    <div
      className="border-b border-gray-200 pb-6 mt-6 scroll-mt-6"
      id="reviews"
    >
      <ReviewStats />
      {user && <ReviewForm />}
      <ReviewList />
    </div>
  );
};

export default ReviewSection;
