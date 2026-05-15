import React from "react";

import {
  Wifi,
  Utensils,
  Car,
  Waves,
  Wind,
  Tv,
  WashingMachine,
  Dumbbell,
} from "lucide-react";
import { useFormContext } from "react-hook-form";

const amenitiesList = [
  { id: "wifi", name: "WiFi", icon: Wifi },
  { id: "kitchen", name: "Kitchen", icon: Utensils },
  { id: "parking", name: "Parking", icon: Car },
  { id: "pool", name: "Pool", icon: Waves },
  { id: "ac", name: "Air Conditioning", icon: Wind },
  { id: "tv", name: "TV", icon: Tv },
  { id: "washer", name: "Washing Machine", icon: WashingMachine },
  { id: "gym", name: "Gym", icon: Dumbbell },
];

const AmenitiesSection = () => {
  const { watch, setValue } = useFormContext();
  const amenities = watch("amenities");

  const toggleAmenity = (id) => { 
    const currentAmenities = amenities || [];

    if (currentAmenities.includes(id)) { // if it is selected, we have to deselect it
      setValue(
        "amenities",
        currentAmenities.filter((item) => item !== id),
      );
    } else {
      setValue("amenities", [...currentAmenities, id]);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Amenities</h2>
      <p className="text-sm text-gray-500 mb-6">
        Select all amenities available at your property
      </p>

      <div className="grid grid-cols-2 gap-4">
        {amenitiesList.map((amenity) => {
          const Icon = amenity.icon;
          const isSelected = amenities.includes(amenity.id);

          return (
            <button
              key={amenity.id}
              type="button"
              onClick={() => toggleAmenity(amenity.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                isSelected
                  ? "border-[#FF385C] bg-[#FF385C]/5 shadow-md"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${isSelected ? "text-[#FF385C]" : "text-gray-600"}`}
              />
              <span className="font-medium text-gray-700">{amenity.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AmenitiesSection;
