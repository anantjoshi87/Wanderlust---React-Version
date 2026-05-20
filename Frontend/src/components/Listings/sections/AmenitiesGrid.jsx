import CommonButton from "@/components/common/CommonButton";
import {
  Car,
  ChefHat,
  Dumbbell,
  Shield,
  Snowflake,
  Tv,
  Utensils,
  WashingMachine,
  Waves,
  Wifi,
  Wind,
} from "lucide-react";
import React from "react";

const amenities = [
  { id: "wifi", icon: <Wifi />, features: "Fast WiFi" },
  { id: "kitchen", icon: <Utensils />, features: "Full Kitchen" },
  { id: "parking", icon: <Car />, features: "Free Parking" },
  { id: "ac", icon: <Wind />, features: "Air Conditioning" },
  { id: "pool", icon: <Waves />, features: "Private Pool" },
  { id: "tv", icon: <Tv />, features: "Smart TV" },
  { id: "washer", icon: <WashingMachine />, features: "Washing Machine" },
  { id: "gym", icon: <Dumbbell />, features: "Gym" },
];

const AmenitiesGrid = ({ listing }) => {
  return (
    <div className="border-b border-gray-200 pb-6 mt-6">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold text-gray-900">
          What this place offers
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {amenities.map((item, index) => (
            <div key={index} className="flex items-center gap-6 text-gray-900">
              <span className="text-2xl text-gray-800">{item.icon}</span>
              <span className="text-base">{item.features}</span>
            </div>
          ))}
        </div>

        <div>
          <CommonButton text={"Show all 28 amenities"} />
        </div>
      </div>
    </div>
  );
};

export default AmenitiesGrid;
