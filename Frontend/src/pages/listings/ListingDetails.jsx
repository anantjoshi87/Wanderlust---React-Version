import { getListingById } from "@/api/listings.api";
import ListingDetailsGrid from "@/components/Listings/ListingDetailsGrid";
import ListingGallery from "@/components/Listings/ListingGallery";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ListingDetails = () => {
  const [listing, setListing] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setIsLoading(true);
        const response = await getListingById(id);
        setListing(response.data.listing);
      } catch (err) {
        console.error("Failed to fetch listing", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchListing();
  }, [id]);

  return (
    <>
      <div className="py-8">
        <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
          <Link
            to={"/listings"}
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Listings</span>
          </Link>
        </div>
      </div>

      <ListingGallery />
      {isLoading || !listing ? (
        <div>"Loading</div>
      ) : (
        <ListingDetailsGrid listing={listing} />
      )}
    </>
  );
};

export default ListingDetails;
