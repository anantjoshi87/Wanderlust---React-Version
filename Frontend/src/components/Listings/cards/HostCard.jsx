import { useAuth } from "@/hooks/useAuth";
import React from "react";

const HostCard = ({listing}) => {
  return (
    <div className="border-b border-gray-200 pb-6 mt-6">
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <div className="flex justify-center items-center h-16 w-16 rounded-full overflow-hidden flex-shrink-0 bg-black text-white text-3xl">
          {listing?.owner?.username ? (
            listing.owner.username.charAt(0).toUpperCase()
          ) : (
            <img
              src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=880&auto=format&fit=crop"
              alt="profile"
              className="h-full w-full object-cover"
            />
          )}
        </div>

        {/* Host Info */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900">
            Hosted by {listing?.owner?.username}
          </h3>
          <p className="text-sm text-gray-500">5 years hosting</p>
        </div>
      </div>
    </div>
  );
};

export default HostCard;
