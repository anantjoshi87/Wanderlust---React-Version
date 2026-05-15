import { CompletionBar } from "@/components/common/CompletionBar";
import { Circle, CircleCheckBig, ImageIcon } from "lucide-react";
import React from "react";

const ListingCardPreview = ({ formData }) => {
  const completionChecks = [
    {
      label: "Basic info added",
      completed: !!(
        formData.title &&
        formData.description &&
        formData.category &&
        formData.address &&
        formData.country
      ),
    },
    {
      label: "Photos uploaded",
      // completed: formData.images.length >= 5,
    },
    {
      label: "Price set",
      completed: formData.price > 0,
    },
    {
      label: "Amenities selected",
      completed: formData.amenities.length > 0,
    },
    {
      label: "Property details",
      completed:
        formData.propertyDetails.guests > 0 &&
        formData.propertyDetails.bedrooms > 0 &&
        formData.propertyDetails.beds >0 &&
        formData.propertyDetails.bathrooms > 0,
    },
  ];
  
  return (
    <div className="sticky top-6 w-full max-w-sm">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        {/* Image */}
        <div className="relative h-60 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="mb-4 rounded-full bg-white p-4 shadow-md">
              <ImageIcon className="text-gray-500" size={30} />
            </div>

            <p className="text-sm font-medium text-gray-600">
              No photos uploaded
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6">
          {/* Heading */}
          <div className="space-y-2">
            <h3 className="line-clamp-1 text-xl font-semibold text-gray-900">
              {formData?.title || "Untitled Listing"}
            </h3>

            <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">
              {formData?.description ||
                "Your listing description will appear here once you start adding details."}
            </p>
          </div>

          {/* Price */}
          {formData?.price > 0 && (
            <div className="flex items-end gap-1 border-b border-gray-100 pb-5">
              <span className="text-3xl font-bold tracking-tight text-gray-900">
                ${formData?.price}
              </span>

              <span className="mb-1 text-sm text-gray-500">/ night</span>
            </div>
          )}

          {/* Completion */}
          <div className="space-y-3">
            <CompletionBar />
          </div>

          {/* Checklist */}
          <div className="space-y-3 rounded-2xl bg-gray-50 p-4">
            {completionChecks.map((check, index) => (
              <div key={index} className="flex items-center gap-3">
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
            <button className="w-full rounded-2xl bg-[#FF385C] py-3 font-medium text-white transition-all duration-200 hover:bg-[#E31C5F] hover:shadow-lg">
              Publish Listing
            </button>

            <button className="w-full rounded-2xl border border-gray-300 bg-white py-3 font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50">
              Save Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCardPreview;
