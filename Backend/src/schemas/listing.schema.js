import Joi from "joi";

export const listingSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().min(5).required(),
  price: Joi.number().min(1).required(),
  address: Joi.string().required(),
  country: Joi.string().required(),
});
