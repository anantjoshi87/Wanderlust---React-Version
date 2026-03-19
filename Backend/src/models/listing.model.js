import mongoose from "mongoose";
import Review from "./review.model.js";

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    description: {
      type: String,
      required: true,
      minlength: 5,
    },
    image: {
      filename: {
        type: String,
        default: "listingimage",
      },
      url: {
        type: String,
        default:
          "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      fileId: {
        type: String,
      },
    },
    price: {
      type: Number,
      min: 1,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ listing: listing._id });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
export default Listing;
