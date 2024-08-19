
'use client';
import React, { useState } from "react";
import "@/css/style.css";
import Image from "next/image";
import SETabs from "./tabs";
import { SelectEconomy } from "./select-economy";
import { SelectAge } from "./select-age";

const SearchEngine: React.FC = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers1, setTravellers1] = useState("");
  const [cabinClass1, setCabinClass1] = useState("");
  const [isRotating, setIsRotating] = useState<boolean>(false);

  const handleSwapClick = () => {
    setIsRotating(true);
    // Reset rotation after animation completes
    setTimeout(() => setIsRotating(false), 1000); // 1 second
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Navigation */}
        <div className="flex justify-center space-x-2 mb-2">
          <SETabs />
        </div>
        {/* Top Right Travellers and Cabin Class Options */}
        <div className="flex flex-col sm:flex-row justify-end mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex flex-col rounded-lg bg-slate-300 space-y-2 w-full sm:w-48">
          <SelectAge/>
          </div>
          <div className="flex flex-col rounded-lg bg-slate-300  space-y-2 w-full sm:w-48">
          <SelectEconomy/>
          </div>
        </div>


        {/* Flight Search Form */}
        <div className="bg-white p-6 rounded-3xl shadow-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="flex flex-col lg:flex-row lg:col-span-3 gap-4">
            {/* From */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-black mb-2">From</label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="border border-gray-300 rounded-md p-3 w-full shadow-md hover:shadow-lg transition-shadow"
              />
            </div>

            {/* Swap */}
            <div className="flex justify-center items-center">
              <button
                className="w-[65px] bg-white text-gray-700 p-5 lg:p-5 border border-gray-400 rounded-full flex items-center justify-center transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
                onClick={handleSwapClick}
                style={{ marginTop: '20px', marginBottom: 'auto' }}
              >
                <Image
                  src="/se/swap.png"
                  width={50}
                  height={50}
                  alt="Swap Icon"
                  className={`w-6 h-6 ${isRotating ? 'rotate-360' : ''} transition-transform duration-1000`}
                />
              </button>
            </div>


            {/* To */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-black mb-2">To</label>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="border border-gray-300 rounded-md p-3 w-full shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
          </div>

          {/* Date Inputs */}
          <div className="flex flex-col sm:flex-row gap-4 lg:col-span-2">
            {/* Depart Date */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-black mb-2">Depart</label>
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="border border-gray-300 rounded-md p-3 w-full shadow-md hover:shadow-lg transition-shadow"
              />
            </div>

            {/* Return Date */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-black mb-2">Return</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="border border-gray-300 rounded-md p-3 w-full shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="col-span-1 lg:col-span-5 flex justify-end mt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 active:bg-blue-800 transition-shadow">
              Search
            </button>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="flex justify-start space-x-6 mt-4 text-sm text-black">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox shadow-md hover:shadow-lg transition-shadow" />
            <span>Add nearby airports</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox shadow-md hover:shadow-lg transition-shadow" />
            <span>Direct flights only</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;



