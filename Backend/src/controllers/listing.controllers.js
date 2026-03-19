import Listing from "../models/listing.model.js";
import { deleteFile, uploadFile } from "../services/storage.service.js";

export const index = async (req, res) => {
  const listing = await Listing.find().populate("owner", "username email");
  // .populate("reviews");
  res.status(200).json({
    success: true,
    count: listing.length,
    listing,
  });
};

export const showListing = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id).populate(
    "owner",
    "username email",
  );

  if (!listing) {
    return res.status(404).json({
      message: "Listing not found",
    });
  }

  return res.status(200).json({
    success: true,
    listing,
  });
};

export const createListing = async (req, res) => {
  const { title, description, price, address, country } = req.body;

  if (!req.file) {
    return res.status(400).json({
      message: "Image is required",
    });
  }

  //upload image
  const result = await uploadFile(req.file.buffer);

  const listing = await Listing.create({
    title,
    description,
    image: {
      url: result.url,
      fileId: result.fileId,
    },
    price,
    address,
    country,
    owner: req.user._id,
  });

  return res.status(201).json({
    message: "Listing created successfully",
    success: true,
    listing,
  });
};

export const editListing = async (req, res) => {
  const listing = req.listing;

  Object.assign(listing, req.body);

  if (req.file) {
    await deleteFile(listing.image.fileId);

    const result = await uploadFile(req.file.buffer);

    listing.image.url = result.url;
    listing.image.fileId = result.fileId;
  }

  await listing.save();

  return res.status(200).json({
    message: "Listing updated successfully",
    success: true,
    listing,
  });
};

export const deleteListing = async (req, res) => {
  const listing = req.listing;

  await listing.deleteOne();

  if (listing.image.fileId) {
    await deleteFile(listing.image.fileId);
  }

  return res.status(200).json({
    message: "Listing deleted successfully",
    status: true,
  });
};
