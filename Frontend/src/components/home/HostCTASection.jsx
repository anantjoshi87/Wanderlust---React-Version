import React from "react";
import { Link } from "react-router-dom";

const hostCTASection = () => {
  return (
    <section className="bg-red-50 py-20">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center space-y-6 max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Become a host today
          </h2>
          <p className=" text-gray-600">
            Share your place and earn income while connecting with travelers
            from around the world
          </p>
          <Link to={"/listings/new"}>
            <button className="px-8 py-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition shadow-md hover:shadow-lg text-lg font-medium">
              Become a Host
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default hostCTASection;
