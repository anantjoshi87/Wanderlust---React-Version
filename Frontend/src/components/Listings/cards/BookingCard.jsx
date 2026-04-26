import React, { useState } from "react";

const BookingCard = () => {
  const [guests, setGuests] = useState(1);

  return (
    <div className="">
      <div className="border border-gray-300 p-6 rounded-2xl shadow-xl">
        <div className="flex items-baseline gap-2 mb-6">
          <p className="text-3xl font-extrabold">$450</p>
          <span className="text-gray-600">/night</span>
        </div>
        <div className="mb-4 rounded-xl border border-gray-300">
          <div className="grid grid-cols-2 border-b border-gray-300">
            <div className="p-3 border-r border-gray-300">
              <label
                htmlFor="check-in"
                className="text-xs font-bold text-gray-900"
              >
                CHECK-IN
              </label>
              <input
                type="date"
                id="check-in"
                className="text-sm text-gray-500"
              />
            </div>
            <div className="p-3">
              <label
                htmlFor="check-out"
                className="text-xs font-bold text-gray-900"
              >
                CHECK-OUT
              </label>
              <input
                type="date"
                id="check-out"
                className="text-sm text-gray-500"
              />
            </div>
          </div>
          <div className="p-3">
            <label
              htmlFor="guests"
              className="text-xs font-bold text-gray-900 mb-1"
            >
              GUESTS
            </label>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">{guests} {guests===1 ? "guest" : "guests"}</p>
              <div className="flex gap-4">
                <button
                  className="rounded-full h-8 w-8 border border-gray-300 hover:border-gray-900 transition flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    if (guests > 1) setGuests((prev) => prev - 1);
                  }}
                >
                  <span className="text-gray-700">-</span>
                </button>
                <button
                  className="rounded-full h-8 w-8 border border-gray-300 hover:border-gray-900 transition flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    if (guests < 10) setGuests((prev) => prev + 1);
                  }}
                >
                  <span className="text-gray-700">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="w-full bg-[#FF385C] py-4 rounded-xl text-white font-bold hover:bg-[#E31C57] transition shadow-lg shadow-[#FF385C]/20 hover:shadow-xl hover:shadow-[#FF385C]/30 mb-4 cursor-pointer">
            Reserve
          </button>
          <p className="text-center text-sm text-gray-600 mb-6">
            You won't be charged yet
          </p>
        </div>
        <div className="border-t border-gray-300 underline py-6">
          <div className="mb-4 flex justify-between">
            <span>$450 X 5 nights</span>
            <span>$2250</span>
          </div>
          <div className="flex justify-between">
            <span>Service Fees</span>
            <span>$90</span>
          </div>
        </div>
        <div className="flex justify-between border-t border-gray-300 pt-4">
          <p className="font-bold">Total</p>
          <p className="text-xl font-bold">$2350</p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
