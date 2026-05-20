import React from "react";

const ListingGallery = ({ listing }) => {
  const { images } = listing;
  return (
    <div className="">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-4 grid-rows-2 gap-3 h-[500px]">
          <div className="col-span-2 row-span-2 group cursor-pointer overflow-hidden rounded-2xl">
            <img
              src={images[0].url}
              alt={images[0].filename}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {images.slice(1).map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={image.url}
                alt={image.filename}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingGallery;
