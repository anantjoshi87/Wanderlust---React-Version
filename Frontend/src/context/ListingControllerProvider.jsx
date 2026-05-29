import {
  createListing,
  getListingById,
  updateListing,
} from "@/api/listings.api";
import { listingSchema } from "@/schemas/listing.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { ListingControllerContext } from "./ContextBase";

export const ListingControllerProvider = ({ id, isEdit, children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    if (!isEdit) return;

    const getinitialData = async () => {
      const response = await getListingById(id);
      console.log(response.data.listing);
      
      if (!response) return;

      methods.reset(response.data.listing);
    };

    getinitialData();
  }, [id, isEdit, methods]);

  const watchData = useWatch({ control: methods.control });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();

      //Basic fields
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("address", data.address);
      formData.append("country", data.country);
      formData.append("price", data.price);

      //Arrays /objects
      formData.append("amenities", JSON.stringify(data.amenities));

      formData.append("propertyDetails", JSON.stringify(data.propertyDetails));

      //Images
      data.images.forEach((image) => {
        formData.append("images", image.file);
      });

      if (isEdit) {
        const response = await createListing(formData);
        console.log(response);
      } else {
        const response = await updateListing(formData);
        console.log(response);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const value = useMemo(
    () => ({ isSubmitting, watchData, isEdit, id, methods }),
    [isSubmitting, watchData, isEdit, id, methods],
  );

  return (
    <ListingControllerContext.Provider value={value}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form> {/* ListingFormPage.jsx */}
      </FormProvider>
    </ListingControllerContext.Provider>
  );
};
