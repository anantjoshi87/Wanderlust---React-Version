import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ReviewRating from "./ReviewRating";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewSchema } from "@/schemas/review.schema";
import { Spinner } from "../ui/spinner";
import { createReview } from "@/api/reviews.api";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [serverError, setServerError] = useState("");

  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(reviewSchema),
  });

  const { id } = useParams(); // id -> listing_id

  const onSubmit = async (data) => {
    if (rating === 0) {
      setServerError("Please select a rating");
      return;
    }
    setIsSubmiting(true);
    try {
      await createReview(id, {
        comment: data.review,
        rating: rating,
      });
      setRating(0);
      reset();
      setServerError("");
      toast.success("Review added successfully");
    } catch (err) {
      setServerError(err.response?.data?.message || "Something went wrong");
      toast.error("Something went wrong");
    } finally {
      setIsSubmiting(false);
    }
  };

  return (
    <div className="my-12">
      <div className="w-full max-w-2xl bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Write a Review
        </h3>

        <div>
          <ReviewRating rating={rating} setRating={setRating} />

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
              <label
                htmlFor="review"
                className="block text-sm font-medium text-gray-700"
              >
                Your Review
              </label>

              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center w-10 h-10 rounded-full overflow-hidden bg-black text-white">
                  {user?.username ? (
                    user.username.charAt(0).toUpperCase()
                  ) : (
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="profile"
                      className=" object-cover"
                    />
                  )}
                </div>
                <span className="text-gray-700 font-semibold">
                  {user.username}
                </span>
              </div>

              <div>
                <textarea
                  id="review"
                  placeholder="Share your experience with this stay..."
                  {...register("review")}
                  className="w-full min-h-[120px] pt-3 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF385C] resize-none"
                ></textarea>

                {errors.review && (
                  <p className="text-red-500 text-sm">
                    {errors.review.message}
                  </p>
                )}

                {serverError && (
                  <p className="text-red-500 text-sm">{serverError}</p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  disabled={isSubmiting}
                  className="px-8 py-4 rounded-xl bg-[#FF385C] text-white font-bold hover:bg-[#E31C57] transition disabled:opacity-60 cursor-pointer flex items-center justify-center min-w-[140px]"
                >
                  {isSubmiting ? (
                    <Spinner className="size-5" />
                  ) : (
                    "Submit Review"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
