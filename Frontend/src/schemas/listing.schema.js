import z from "zod";
import { LISTING_RULES } from "@/constants";

const {
  TITLE_MIN,
  DESCRIPTION_MIN,
  ADDRESS_MIN,
  COUNTRY_MIN,
  IMAGES_MIN,
  AMENITIES_MIN,
} = LISTING_RULES;

export const listingSchema = z.object({
  title: z
    .string()
    .trim()
    .min(TITLE_MIN, "Title must be at least 5 characters"),
  description: z
    .string()
    .trim()
    .min(DESCRIPTION_MIN, "Description must be at least 30 characters"),
  category: z.string().min(1, "Please select a category"),
  address: z.string().trim().min(ADDRESS_MIN, "Address is required"),
  country: z.string().trim().min(COUNTRY_MIN, "Country is required"),
  images: z
    .array(
      z.object({
        file: z.any(),
        preview: z.string(),
      }),
    )
    .min(IMAGES_MIN, "Please upload at least 5 images"),
  price: z
    .number({
      required_error: "Price is required",
    })
    .positive("Price must be greater than 0"),
  amenities: z
    .array(z.string())
    .min(AMENITIES_MIN, "Please select at least one amenity"),
  propertyDetails: z.object({
    guests: z.number().min(1, "Guests must be at least 1"),
    bedrooms: z.number().min(1, "Beds must be at least 1"),
    beds: z.number().min(1, "Beds must be at least 1"),
    bathrooms: z.number().min(1, "Bathrooms must be at least 1"),
  }),
});
