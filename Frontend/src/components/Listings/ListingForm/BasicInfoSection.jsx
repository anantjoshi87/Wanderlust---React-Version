import React from "react";
import { useFormContext } from "react-hook-form";
import { LISTING_RULES } from "@/constants";

const { TITLE_MIN, DESCRIPTION_MIN, ADDRESS_MIN, COUNTRY_MIN } = LISTING_RULES;

const categoriesList = [
  { id: "beach", name: "Beach", icon: "🏖️" },
  { id: "mountain", name: "Mountain", icon: "⛰️" },
  { id: "city", name: "City", icon: "🏙️" },
  { id: "desert", name: "Desert", icon: "🏜️" },
  { id: "forest", name: "Forest", icon: "🌲" },
  { id: "camping", name: "Camping", icon: "⛺" },
  { id: "lake", name: "Lake", icon: "🏞️" },
  { id: "historic", name: "Historic", icon: "🏛️" },
];

const BasicInfoSection = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const selectedCategory = watch("category");
  const title = watch("title") || "";
  const description = watch("description") || "";
  const address = watch("address") || "";
  const country = watch("country") || "";

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Basic Information
      </h2>

      <div className="space-y-6">
        {/* Title */}
        <div>
          <div className="flex justify-between">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Listing Title
            </label>
            {title.length < TITLE_MIN && (
              <p className="mt-1 text-xs text-red-500">
                * {title}/{TITLE_MIN} characters
              </p>
            )}
          </div>
          <input
            type="text"
            id="title"
            {...register("title")}
            placeholder="e.g., Cozy Beachfront Villa with Ocean Views"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition-all"
          />
        </div>

        {/* Description */}
        <div>
          <input type="hidden" {...register("category")} />
          <div className="flex justify-between">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>
            {description.length < DESCRIPTION_MIN && (
              <p className="mt-1 text-xs text-red-500">
                * {description}/{DESCRIPTION_MIN} characters
              </p>
            )}
          </div>

          <textarea
            id="description"
            {...register("description")}
            placeholder="Describe your space, highlighting what makes it special..."
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Category Selection */}
        <div>
          <input type="hidden" {...register("category")} />
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Category
          </label>

          <div className="grid grid-cols-4 gap-3">
            {categoriesList.map((category) => {
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() =>
                    setValue("category", category.id, {
                      shouldValidate: true,
                      shouldDirty: true,
                    })
                  }
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "border-[#FF385C] bg-[#FF385C]/5 shadow-md"
                      : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                  }`}
                >
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="text-sm font-medium text-gray-700">
                    {category.name}
                  </div>
                </button>
              );
            })}
          </div>
          {selectedCategory==="" && (
            <p className="flex justify-end mt-2 text-xs text-red-500">
              * category is required
            </p>
          )}
        </div>

        {/* Address */}
        <div>
          <div className="flex justify-between">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Address
          </label>
          {address.length < ADDRESS_MIN && (
              <p className="mt-1 text-xs text-red-500">
                * {address}/{ADDRESS_MIN} characters
              </p>
            )}
          </div>

          <input
            type="text"
            id="address"
            {...register("address")}
            placeholder="123 Ocean Drive"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition-all"
          />
        </div>

        {/* Country */}
        <div>
          <div className="flex justify-between">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Country
          </label>
          {country.length < COUNTRY_MIN && (
              <p className="mt-1 text-xs text-red-500">
                * {country}/{COUNTRY_MIN} characters
              </p>
            )}
          </div>
          <input
            type="text"
            id="country"
            {...register("country")}
            placeholder="e.g., United States"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoSection;
