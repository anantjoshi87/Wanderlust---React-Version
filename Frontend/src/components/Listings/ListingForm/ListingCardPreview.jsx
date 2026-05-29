import React, { useMemo } from "react";
import { Circle, CircleCheckBig, ImageIcon } from "lucide-react";

import { CompletionBar } from "@/components/common/CompletionBar";
import { LISTING_RULES } from "@/constants";
import { Spinner } from "@/components/ui/spinner";
import { useListingController } from "@/hooks/useListings";

const { IMAGES_MIN } = LISTING_RULES;

const ListingCardPreview = () => {
  const { watchData: formData, isSubbmitting } = useListingController();
  const {
    title,
    description,
    category,
    address,
    country,
    images = [],
    price,
    amenities = [],
    propertyDetails = {},
  } = formData;

  const { guests = 0, bedrooms = 0, beds = 0, bathrooms = 0 } = propertyDetails;

  const completionChecks = useMemo(
    () => [
      {
        label: "Basic info added",
        completed:
          !!title && !!description && !!category && !!address && !!country,
      },

      {
        label: "Photos uploaded",
        completed: images.length >= IMAGES_MIN,
      },

      {
        label: "Price set",
        completed: price > 0,
      },

      {
        label: "Amenities selected",
        completed: amenities.length > 0,
      },

      {
        label: "Property details",
        completed: guests > 0 && bedrooms > 0 && beds > 0 && bathrooms > 0,
      },
    ],
    [
      title,
      description,
      category,
      address,
      country,
      images.length,
      price,
      amenities.length,
      guests,
      bedrooms,
      beds,
      bathrooms,
    ],
  );

  const completionPercentage = useMemo(() => {
    const completedCount = completionChecks.filter(
      (item) => item.completed,
    ).length;

    return Math.round((completedCount / completionChecks.length) * 100);
  }, [completionChecks]);

  const previewImage = images?.[0]?.url;

  return (
    <div className="sticky top-6 w-full max-w-sm">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        {/* Image */}
        <div className="relative h-60 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {previewImage ? (
            <img
              src={previewImage}
              alt={title || "Listing preview"}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="mb-4 rounded-full bg-white p-4 shadow-md">
                <ImageIcon className="text-gray-500" size={30} />
              </div>

              <p className="text-sm font-medium text-gray-600">
                No photos uploaded
              </p>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="space-y-6 p-6">
          {/* Heading */}
          <div className="space-y-2">
            <h3 className="line-clamp-1 text-xl font-semibold text-gray-900">
              {title || "Untitled Listing"}
            </h3>

            <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">
              {description ||
                "Your listing description will appear here once you start adding details."}
            </p>
          </div>

          {/* Price */}
          {price > 0 && (
            <div className="flex items-end gap-1 border-b border-gray-100 pb-5">
              <span className="text-3xl font-bold tracking-tight text-gray-900">
                ${price}
              </span>

              <span className="mb-1 text-sm text-gray-500">/ night</span>
            </div>
          )}

          {/* Completion */}
          <div className="space-y-3">
            <CompletionBar progress={completionPercentage} />
          </div>

          {/* Checklist */}
          <div className="space-y-3 rounded-2xl bg-gray-50 p-4">
            {completionChecks.map((check) => (
              <div key={check.label} className="flex items-center gap-3">
                <span
                  className={`shrink-0 ${
                    check.completed ? "text-[#FF385C]" : "text-gray-400"
                  }`}
                >
                  {check.completed ? (
                    <CircleCheckBig size={18} />
                  ) : (
                    <Circle size={18} />
                  )}
                </span>

                <p
                  className={`text-sm ${
                    check.completed
                      ? "font-medium text-gray-800"
                      : "text-gray-500"
                  }`}
                >
                  {check.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <h5 className="mb-3 text-sm font-semibold text-blue-900">
              Publishing Tips
            </h5>

            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Use high-quality, well-lit photos</li>
              <li>• Write a detailed description</li>
              <li>• Price competitively for your area</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="space-y-3 pt-1">
            <button
              disabled={completionPercentage < 100}
              type="submit"
              className={`w-full rounded-2xl py-3 font-medium transition-all duration-200 ${
                completionPercentage < 100
                  ? "cursor-not-allowed bg-gray-300 text-gray-500"
                  : "flex justify-center bg-[#FF385C] text-white hover:bg-[#E31C5F] hover:shadow-lg cursor-pointer"
              }`}
            >
              {isSubbmitting ? <Spinner size={18} /> : "Publish Listing"}
            </button>

            <button
              type="button"
              className="w-full rounded-2xl border border-gray-300 bg-white py-3 font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 cursor-pointer"
            >
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ListingCardPreview);
