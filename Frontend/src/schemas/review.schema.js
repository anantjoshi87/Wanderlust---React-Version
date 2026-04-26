import z from "zod";

export const reviewSchema = z.object({
  review: z.string().trim().min(5, "Review should have min of 5 length"),
});
