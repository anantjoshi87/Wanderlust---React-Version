import Listing from "../src/models/listing.model.js";
import { dummyListings } from "./seedListing.js";
import connectDB from "../src/config/db.js";
import User from "../src/models/user.model.js";

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

await seedListings();
