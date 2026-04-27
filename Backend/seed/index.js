import Listing from "../src/models/listing.model.js";
import { dummyListings } from "./seedListing.js";
import connectDB from "../src/config/db.js";
import User from "../src/models/user.model.js";
import Review from "../src/models/review.model.js";
import { dummyReviews } from "./seedReviews.js";

await connectDB();

const seedListings = async () => {
  try {
    await Listing.deleteMany();
    const user = await User.findOne();
    if (!user) {
      console.log("No users found. Seed a user first.");
      process.exit();
    }

    const allListings = dummyListings.map((listing) => ({
      ...listing,
      owner: user._id,
    }));

    await Listing.insertMany(allListings);
    console.log("Dummy listings inserted!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const seedReviews = async () => {
  try {
    await Review.deleteMany();
    const user = await User.findOne();
    const listing = await Listing.findOne();
    if (!user) {
      console.log("No users found. Seed a user first.");
      process.exit();
    }

    const allReviews = dummyReviews.map((review) => ({
      ...review,
      author: user._id,
      listing: listing._id,
    }));

    await Review.insertMany(allReviews);
    console.log("Dummy Reviews inserted!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// await seedListings();

await seedReviews();
