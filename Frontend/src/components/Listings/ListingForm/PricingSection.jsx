import React from "react";
import { useFormContext } from "react-hook-form";

const PricingSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const price = watch("price");

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Pricing</h2>
      <p className="text-sm text-gray-500 mb-6">
        Set a competitive nightly price
      </p>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-medium">
          $
        </div>
        <input
          type="number"
          {...register("price", {
            valueAsNumber: true,
          })}
          placeholder="0"
          className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF385C] focus:border-transparent transition-all text-lg"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
          / night
        </div>
      </div>
      {price <= 0 && (
        <p className="flex justify-end mt-1 text-xs text-amber-600">Enter a nightly price</p>
      )}
    </div>
  );
};

export default PricingSection;
