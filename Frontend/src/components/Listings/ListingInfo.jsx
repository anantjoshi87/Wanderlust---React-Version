import React from "react";
import ListingDetailsHeader from "./sections/ListingDetailsHeader";
import HostCard from "./cards/HostCard";
import ListingDescripton from "./sections/ListingDescripton";
import AmenitiesGrid from "./sections/AmenitiesGrid";
import ReviewSection from "../reviews/ReviewSection";

const ListingInfo = ({ listing }) => {
  return (
    <>
      <ListingDetailsHeader listing={listing} />
      <HostCard listing={listing} />
      <ListingDescripton listing={listing} />
      <AmenitiesGrid listing={listing} />
      <ReviewSection />
    </>
  );
};

export default ListingInfo;
