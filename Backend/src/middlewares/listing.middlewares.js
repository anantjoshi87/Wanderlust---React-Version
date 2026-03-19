import Listing from "../models/listing.model.js";

export const isListingOwner = async (req, res, next) => {
  const { id } = req.params;

  const listing = await Listing.findById(id);

  if (!listing) {
    return res.status(404).json({
      message: "Listing not found",
    });
  }

  if (listing.owner.toString() !== req.user._id.toString()) {
    return res.status(403).json({
      message: "Unauthorized user",
    });
  }

  req.listing = listing;
  next();
};
