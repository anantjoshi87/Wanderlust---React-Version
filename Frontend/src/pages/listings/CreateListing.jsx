import ListingForm from "@/components/Listings/ListingForm/ListingForm";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { listingSchema } from "@/schemas/listing.schema";
import ListingCardPreview from "@/components/Listings/ListingForm/ListingCardPreview";
import { createListing } from "@/api/listings.api";

const CreateListing = () => {
  const [isSubbmitting, setIsSubbmitting] = useState(false);

  const methods = useForm({
    resolver: zodResolver(listingSchema),

    defaultValues: {
      title: "",
      description: "",
      category: "",
      address: "",
      country: "",
      price: undefined,
      images: [],
      amenities: [],
      propertyDetails: {
        guests: 1,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
      },
    },
  });

  const watchData = useWatch({ control: methods.control });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      //Basic fields
      formData.append(data.title);
      formData.append(data.description);
      formData.append(data.category);
      formData.append(data.address);
      formData.append(data.country);
      formData.append(data.price);

      //Arrays /objects
      formData.append("amenities", JSON.stringify(data.amenities));

      formData.append("propertyDetails", JSON.stringify(data.propertyDetails));

      //Images
      data.images.forEach((image) => {
        formData.append("images", image.file);
      });

      const response = await createListing(formData);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

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
              Create Your Listing
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
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="relative md:grid md:grid-cols-3 md:gap-3 lg:gap-5 xl:gap-10">
                {/* form */}
                <div className="col-span-2">
                  <ListingForm />
                </div>
                {/* preview */}
                <div className="col-span-1 sticky top-8 h-fit">
                  <ListingCardPreview formData={watchData} />
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default CreateListing;
