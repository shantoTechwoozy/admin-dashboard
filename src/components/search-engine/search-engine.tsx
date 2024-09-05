"use client";
import "@/css/style.css";
import React from "react";
import { SelectAge } from "./select-age";
import { SelectEconomy } from "./select-economy";
import SearchEngineTab from "./tabs";
import SubMenu from "./sub-menu";
import { IconSearchEngine } from "@/icons";
import FlightPlaceInput from "./FlightPlaceInput";

const SearchEngine: React.FC = () => {

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Navigation */}
        <SubMenu />

        {/* Top Right Travellers and Cabin Class Options */}
        <div className="mb-4 flex flex-col justify-end space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          {/* Optionally add your other components here */}
        </div>

        {/* Flight Search Form */}
        <div className="bg-white flex flex-col gap-1 rounded-3xl px-0.5 py-4">
          <div className="flex flex-col lg:flex-row h-auto w-full items-center gap-1">
            <SearchEngineTab />
            <div className="flex items-start gap-2 ml-5 text-sm rounded-md">
              <SelectAge />
            </div>
            <div className="flex items-start gap-2 ml-5 text-sm rounded-md">
              <SelectEconomy />
            </div>
            {/* Switch button and text */}
            <div className="ml-auto flex items-center gap-2 mr-5">
              <label className="relative inline-flex cursor-pointer items-center">
                <input id="switch-2" type="checkbox" className="peer sr-only" />

                <switch className="peer h-4 w-11 rounded-full border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-orange-500 after:transition-all after:content-[''] peer-checked:bg-white peer-checked:after:translate-x-full peer-focus:ring-green-300"></switch>
              </label>
              <span className="text-sm text-gray-700 font-medium">Direct Flights Only</span>
            </div>
          </div>

          <div className="flex gap-5 w-full p-5">
            <div className="flex flex-1 items-center gap-5">
              <FlightPlaceInput label='from' placeholder="Type city name" value="" onChange={() => { }} required />

              <button className="rounded-full bg-slate-300 p-1 ">
                <IconSearchEngine.Swap className="text-xl" />
              </button>


              <FlightPlaceInput label='to' placeholder="Type city name" value="" onChange={() => { }} required />
            </div>
            <div className="w-[2px] h-[50px] bg-black" />
            <div className="flex flex-1 gap-2">
              <FlightPlaceInput label='Depart' placeholder="Select Date" value="" onChange={() => { }} required />
              <FlightPlaceInput label='Return' placeholder="Select Date" value="" onChange={() => { }} />
              <div className="w-25 flex h-12 items-center justify-center">
                <button className="w-full rounded-full bg-primary py-2 text-black">Search</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default SearchEngine;
