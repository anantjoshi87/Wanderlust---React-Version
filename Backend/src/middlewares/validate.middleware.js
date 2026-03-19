import { listingSchema } from "../schemas/listing.schema.js";
import {
  loginSchema,
  registerSchema,
  verifyOtpSchema,
} from "../schemas/user.schema.js";

export const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  next();
};

export const validateRegister = (req, res, next) => {
  const { error } = registerSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  next();
};

export const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  next();
};

export const validateOTP = (req, res, next) => {
  const { error } = verifyOtpSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  next();
};
