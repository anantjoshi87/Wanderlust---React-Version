import z from "zod";

export const listingSchema = z.object({
  title: z.string().trim().min(5, "Title must be at least 5 characters"),
  description: z
    .string()
    .trim()
    .min(30, "Description must be at least 30 characters"),
  category: z.string().min(1, "Please select a category"),
  address: z.string().trim().min(5, "Address is required"),
  country: z.string().trim().min(2, "Country is required"),
  photos: z.array(z.string()).min(5, "Please upload at least 5 images"),
  price: z
    .number({
      required_error: "Price is required",
    })
    .positive("Price must be greater than 0"),
  amenities: z.array(z.string()).min(1, "Please select at least one amenity"),
  propertyDetails: z.object({
    guests: z.number().min(1, "Guests must be at least 1"),
    bedrooms: z.number().min(1, "Beds must be at least 1"),
    beds: z.number().min(1, "Beds must be at least 1"),
    bathrooms: z.number().min(1, "Bathrooms must be at least 1"),
  }),
});
