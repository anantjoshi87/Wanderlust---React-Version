import Listing from "../models/listing.model.js";
import { deleteFile, uploadFile } from "../services/storage.service.js";
// import QueryBuilder from "../utils/queryBuilder.js";

export const getFeaturedListings = async (req, res) => {
  const listings = await Listing.aggregate([{ $sample: { size: 8 } }]);

  res.status(200).json({
    success: true,
    listings_count: listings.length,
    listings,
  });
};

export const getRandomListings = async (req, res) => {
  const limit = parseInt(req.query.limit) || 8;
  const listings = await Listing.aggregate([{ $sample: { size: limit } }]);

  res.status(200).json({
    success: true,
    listings_count: listings.length,
    listings,
  });
};

export const getAllListings = async (req, res) => {
  let { search, category, min, max, page = 1, limit = 12 } = req.query;
  let queryObj = {};

  //search
  if (search) {
    queryObj.$or = [
      { title: { $regex: search, $options: "i" } },
      { address: { $regex: search, $options: "i" } },
    ];
    // queryObj.$text = { $search: search };
  }

  //filter
  min = req.query.min ? parseInt(req.query.min) : 0;
  max = req.query.max ? parseInt(req.query.max) : Number.MAX_SAFE_INTEGER;

  if (req.query.min || req.query.max) {
    queryObj.price = {
      $gte: min,
      $lte: max,
    };
  }

  //category
  if (category) {
    queryObj.category = new RegExp(`^${category}$`, "i");
  }

  //pagination
  page = parseInt(req.query.page) || 1;
  limit = parseInt(req.query.limit) || 12;

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
    category,
    page_count: Math.ceil(total / limit),
    listing_count: listings.length,
    hasmorePages: skip + listings.length < total,
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

  if (!req.files || req.files.length < 5) {
    return res.status(400).json({
      message: "Image is required",
    });
  }

  //upload images
  const uploadedImages = await Promise.all(
    req.files.map(async (file) => {
      const result = await uploadFile(req.file.buffer);

      return {
        url: result.url,
        fileId: result.fileId,
      };
    }),
  );

  const listing = await Listing.create({
    title,
    description,
    images: uploadedImages,
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
