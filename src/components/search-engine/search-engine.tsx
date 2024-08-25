"use client";
import React, { useState } from "react";
import "@/css/style.css";
import Image from "next/image";
import SETabs from "./tabs";
import { SelectEconomy } from "./select-economy";
import { SelectAge } from "./select-age";
import Inputer from "./Inputer";
import cn from "@/utils/cn";
import SwapImg from "./SwapImg";

const SearchEngine: React.FC = () => {
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers1, setTravellers1] = useState("");
  const [cabinClass1, setCabinClass1] = useState("");
  const [isRotating, setIsRotating] = useState<boolean>(false);

  let from = {
    shortName: "dac",
    name: "dhaka",
    fullName: "Bangladesh Hazrat Shajalal",
  };
  let to = {
    shortName: "bdt",
    name: "jessaore",
    fullName: "jessore Hazrat Shajalal",
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Navigation */}
        <div className="mb-2 flex justify-start space-x-2">
          <SETabs />
        </div>
        {/* Top Right Travellers and Cabin Class Options */}
        <div className="mb-4 flex flex-col justify-end space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <div className="flex w-full flex-col space-y-2 rounded-lg sm:w-48">
            <SelectAge />
          </div>
          <div className="flex w-full flex-col space-y-2 rounded-lg sm:w-48">
            <SelectEconomy />
          </div>
        </div>

        {/* Flight Search Form */}
        <div className="grid grid-cols-1 gap-4 rounded-3xl bg-white p-6 shadow-lg sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-col gap-4  lg:col-span-3 lg:flex-row">
            {/* From */}
            <div className="relative flex w-full flex-col justify-center gap-5 sm:flex-row sm:items-end sm:gap-0">
              <Inputer label="From" input={from} />
              <SwapImg
                isRotating={isRotating}
                onClick={() => {
                  setIsRotating(!isRotating);
                  //have to add swapping tech
                }}
              />
              <Inputer label="To" input={to} />
            </div>

            {/* Swap */}
          </div>

          {/* Date Inputs */}
          <div className="flex  w-full gap-4">
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium text-black">
                Depart
              </label>
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="w-full rounded-md  border border-slate-300 p-3 shadow-md transition-shadow hover:shadow-lg"
              />
            </div>

            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium text-black">
                Return
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full rounded-md   border border-slate-300 p-3 shadow-md transition-shadow hover:shadow-lg"
              />
            </div>
          </div>

          {/* Search Button */}
          {/* <div className="col-span-1 lg:col-span-5 flex justify-end mt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 active:bg-blue-800 transition-shadow">
              Search
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
