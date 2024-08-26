"use client";
import "@/css/style.css";
import React, { useState } from "react";
import SearchButton from "../common/buttons/SearchButton";
import Inputer from "./Inputer";
import { SelectAge } from "./select-age";
import { SelectEconomy } from "./select-economy";
import SwapImg from "./SwapImg";
import SETabs from "./tabs";

const SearchEngine: React.FC = () => {
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
  let departDate = {
    shortName: "13",
    name: "July",
    fullName: "saturday, 2024",
  };
  let returnDate = {
    shortName: "15",
    name: "July",
    fullName: "monday, 2024",
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
        <div className="bg-white-700 flex flex-col gap-5 rounded-3xl px-0.5 pb-5 pt-3 sm:flex-row">
          <div className="flex w-full flex-col gap-4 lg:flex-row">
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
          </div>
          {/* Date Inputs */}
          <div className="flex w-full flex-col items-end gap-3 sm:flex-row">
            <Inputer label="Depart" input={departDate} />
            <Inputer label="Return" input={returnDate} />
            <SearchButton onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
