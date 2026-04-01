import React from "react";
import { Link } from "react-router-dom";
import { categories } from "@/constants";
import { optimizeImage } from "@/utils/getImageUrl";

const CategoriesSection = () => {
  return (
    <section className="py-16 scroll-mt-12" id="categories">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <h2 className="text-3xl font-extrabold leading-tight mb-4">
          Explore By Category
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(310px,1fr))] gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;

            return (
              <Link key={category.id} to={`listings?category=${category.key}`}>
                <div className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-lg select-none">
                  <div className="aspect-20/9">
                    <img
                      src={optimizeImage(category.image)}
                      alt={category.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <IconComponent className="w-8 h-8 mb-2" />
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
