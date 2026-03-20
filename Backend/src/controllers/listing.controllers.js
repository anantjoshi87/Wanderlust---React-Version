import Listing from "../models/listing.model.js";
import { deleteFile, uploadFile } from "../services/storage.service.js";
// import QueryBuilder from "../utils/queryBuilder.js";

export const getAllListings = async (req, res) => {
  const search = req.query.search;
  let queryObj = {};

  if (search) {
    // queryObj.$or = [
    //   { title: { $regex: search, $options: "i" } },
    //   { address: { $regex: search, $options: "i" } },
    // ];
    queryObj.$text = { $search: search };
  }

  const min = req.query.min ? parseInt(req.query.min) : 0;
  const max = req.query.max ? parseInt(req.query.max) : Number.MAX_SAFE_INTEGER;

  if (req.query.min || req.query.max) {
    queryObj.price = {
      $gte: min,
      $lte: max,
    };
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  const total = await Listing.countDocuments(queryObj); // page count

  const listings = await Listing.find(queryObj)
    .populate("owner", "username email")
    .skip(skip)
    .limit(limit);

  // const features = new QueryBuilder(Listing.find(), req.query)
  //   .search()
  //   .filter()
  //   .paginate();

  // const listings = await features.query;

  res.status(200).json({
    success: true,
    page,
    page_count: Math.ceil(total / limit),
    listing_count: listings.length,
    hasmore: skip + listings.length < total,
    listings,
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
