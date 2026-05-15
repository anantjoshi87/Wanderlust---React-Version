import React from "react";
import BasicInfoSection from "./BasicInfoSection";
import ListingImageUpload from "./ListingImageUpload";
import PricingSection from "./PricingSection";
import AmenitiesSection from "./AmenitiesSection";
import PropertyDetailsSection from "./PropertyDetailsSection";

const ListingForm = () => {
  return (
    <div className="flex flex-col gap-8">
      <BasicInfoSection />
      <ListingImageUpload />
      <PricingSection />
      <AmenitiesSection />
      <PropertyDetailsSection />
    </div>
  );
};

export default ListingForm;
