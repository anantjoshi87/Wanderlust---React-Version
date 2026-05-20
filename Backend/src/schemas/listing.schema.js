import Joi from "joi";

export const listingSchema = Joi.object({
  title: Joi.string().trim().min(5).required(),
  description: Joi.string().trim().min(50).required(),
  category: Joi.string()
    .valid(
      "beach",
      "mountain",
      "city",
      "desert",
      "forest",
      "camping",
      "lake",
      "historic",
    )
    .required(),
  address: Joi.string().trim().required(),
  country: Joi.string().trim().required(),
  amenities: Joi.array().items(Joi.string()).min(1).required(),
  price: Joi.number().min(1).required(),
  propertyDetails: Joi.object({
    guests: Joi.number().min(1).required(),
    bedrooms: Joi.number().min(1).required(),
    beds: Joi.number().min(1).required(),
    bathrooms: Joi.number().min(1).required(),
  }).required()
});
