import { Loader2 } from "lucide-react";
import React from "react";

const Pagination = ({ loading, onLoadMore }) => {
  return (
    <section className="py-12">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="flex justify-center items-center">
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <button
              className="py-3 px-4 sm:py-3 sm:px-6 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 transition whitespace-nowrap cursor-pointer"
              onClick={onLoadMore}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pagination;
