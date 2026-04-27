import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import ReviewStats from "./ReviewStats";
import { useAuth } from "@/hooks/useAuth";
import { getAllReviews } from "@/api/reviews.api";
import { useParams } from "react-router-dom";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams(); // id -> listing._id
  const { user } = useAuth();

  const handleAddReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const response = await getAllReviews(id);
        console.log(response.data.sortedReviews);

        setReviews(response.data.sortedReviews);
      } catch (err) {
        console.error("failed to fetch reviews", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [id]);

  return (
    <div
      className="border-b border-gray-200 pb-6 mt-6 scroll-mt-6"
      id="reviews"
    >
      <ReviewStats />
      {user && <ReviewForm id={id} user={user} onReviewAdded={handleAddReview}/>}
      <ReviewList reviews={reviews} user={user} />
    </div>
  );
};

export default ReviewSection;
