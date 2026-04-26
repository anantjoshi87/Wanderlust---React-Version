import React from "react";

const CommonButton = ({text}) => {
  return (
    <button className="py-3 px-4 sm:py-3 sm:px-6 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 transition whitespace-nowrap cursor-pointer">
      {text}
    </button>
  );
};

export default CommonButton;
