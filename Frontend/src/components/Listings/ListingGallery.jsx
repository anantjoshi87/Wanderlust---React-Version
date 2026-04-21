import React from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1601086540476-7d9fa9dd6023?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGxpdmluZyUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ3NTc5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Luxury living room",
  },
  {
    url: "https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwbHV4dXJ5JTIwaG90ZWx8ZW58MXx8fHwxNzc0NzU3OTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Modern bedroom",
  },
  {
    url: "https://images.unsplash.com/photo-1720975658810-3d82b928474d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwb29sJTIwdGVycmFjZSUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NzQ3NTc5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Pool terrace with ocean view",
  },
  {
    url: "https://images.unsplash.com/photo-1755624222023-621f7718950b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5JTIwaG9tZXxlbnwxfHx8fDE3NzQ3NTc5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Modern kitchen",
  },
  {
    url: "https://images.unsplash.com/photo-1771239048293-72abf673adb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGx1eHVyeSUyMHNwYSUyMGRlc2lnbnxlbnwxfHx8fDE3NzQ3NTc5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Luxury bathroom",
  },
];

const ListingGallery = () => {
  return (
    <div className="">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-4 grid-rows-2 gap-3 h-[500px]">
          <div className="col-span-2 row-span-2 group cursor-pointer overflow-hidden rounded-2xl">
            <img
              src={images[0].url}
              alt={images[0].alt}
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
                alt={images.alt}
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
