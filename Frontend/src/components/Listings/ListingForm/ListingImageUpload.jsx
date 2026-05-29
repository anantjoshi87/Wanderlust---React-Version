import { Upload, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { LISTING_RULES } from "@/constants";
import { useListingController } from "@/hooks/useListings";

const { IMAGES_MIN } = LISTING_RULES;

const ListingImageUpload = () => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const { isEdit } = useListingController();

  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const images = watch("images");

  const handleFileSelect = (files) => {
    if (!files) return;

    const fileArray = Array.from(files);
    const formattedImages = fileArray.map((file) => ({
      file,
      url: URL.createObjectURL(file), //preview
    }));

    setValue("images", [...images, ...formattedImages]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setValue("images", newImages);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Photos</h2>
      <p className="text-sm text-gray-500 mb-6">
        Upload at least 5 photos of your space
      </p>

      {images.length === 0 ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-16 text-center cursor-pointer transition-all duration-200 ${
            isDragging
              ? "border-[#FF385C] bg-[#FF385C]/5"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Upload className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Drag photos here or click to upload
            </h3>
            <p className="text-sm text-gray-500">
              Choose at least 5 photos. JPG, PNG up to 10MB each
            </p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleFileSelect(e.target.files)}
            className="hidden"
          />
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Primary Image */}
            <div className="col-span-2 relative group">
              <img
                src={images[0].url}
                alt="Primary"
                className="w-full h-80 object-cover rounded-xl"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeImage(0);
                }}
                className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4 text-gray-700" />
              </button>
              <div className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium">
                Primary Photo
              </div>
            </div>

            {/* Supporting Images */}
            {images.slice(1).map((image, index) => (
              <div key={index + 1} className="relative group">
                <img
                  src={image.url}
                  alt={`Photo ${index + 2}`}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage(index + 1);
                  }}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  <X className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            ))}
          </div>

          {/* Add More Button */}
          {images.length < 10 && (
            <div>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-gray-400 transition-colors text-gray-600 font-medium"
              >
                + Add More Photos
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleFileSelect(e.target.files)}
                className="hidden"
              />
            </div>
          )}
        </div>
      )}
      <p className="mt-1 pl-1 text-sm text-gray-500">
        {images.length}/{IMAGES_MIN} photos uploaded
      </p>
    </div>
  );
};

export default ListingImageUpload;
