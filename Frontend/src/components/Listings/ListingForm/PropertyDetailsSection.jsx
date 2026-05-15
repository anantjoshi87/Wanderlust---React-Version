import React from "react";
import { Minus, Plus } from "lucide-react";
import { useFormContext } from "react-hook-form";

const detailItems = [
  { field: "guests", label: "Guests" },
  { field: "bedrooms", label: "Bedrooms" },
  { field: "beds", label: "Beds" },
  { field: "bathrooms", label: "Bathrooms" },
];

const PropertyDetailsSection = () => {
  const { watch, setValue } = useFormContext();

  const increment = (field) => {
    const current = watch(`propertyDetails.${field}`);
    setValue(`propertyDetails.${field}`, current + 1);
  };

  const decrement = (field) => {
    const current = watch(`propertyDetails.${field}`);
    if (current > 0) setValue(`propertyDetails.${field}`, current - 1);
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Property Details
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Provide basic details about your space
      </p>

      <div className="space-y-5">
        {detailItems.map((item) => (
          <div
            key={item.field}
            className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
          >
            <span className="text-base font-medium text-gray-700">
              {item.label}
            </span>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => decrement(item.field)}
                disabled={watch(`propertyDetails.${item.field}`) == 0}
                className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              >
                <Minus className="w-4 h-4 text-gray-600" />
              </button>

              <span className="text-base font-medium text-gray-900 w-8 text-center">
                {watch(`propertyDetails.${item.field}`)}
              </span>

              <button
                type="button"
                onClick={() => increment(item.field)}
                className="w-9 h-9 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-gray-400 transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetailsSection;
