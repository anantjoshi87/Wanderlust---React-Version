import ListingForm from "@/components/Listings/ListingForm/ListingForm";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { listingSchema } from "@/schemas/listing.schema";
import ListingCardPreview from "@/components/Listings/ListingForm/ListingCardPreview";
import { createListing, getListingById } from "@/api/listings.api";
import { ListingControllerProvider } from "@/context/ListingControllerProvider";

const ListingFormPage = () => {
  const { id } = useParams();
  const isEdit = !!id;

  return (
    <>
      <div className="py-8 shadow-sm">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          {/* Back Button */}
          <Link
            to={"/listings"}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-black"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Back</span>
          </Link>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              {isEdit ? "Edit Your Listing" : "Create Your Listing"}
            </h1>

            <p className="leading-relaxed text-gray-500">
              Share your space with travelers around the world and start earning
              from your property.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 bg-gray-50">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <ListingControllerProvider id={id} isEdit={isEdit}>
            <div className="relative md:grid md:grid-cols-3 md:gap-3 lg:gap-5 xl:gap-10">
              {/* form */}
              <div className="col-span-2">
                <ListingForm />
              </div>
              {/* preview */}
              <div className="col-span-1 sticky top-8 h-fit">
                <ListingCardPreview />
              </div>
            </div>
          </ListingControllerProvider>
        </div>
      </div>
    </>
  );
};

export default ListingFormPage;
