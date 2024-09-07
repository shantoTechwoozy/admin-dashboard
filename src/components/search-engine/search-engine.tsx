"use client";
import "@/css/style.css";
import { nanoid } from "nanoid";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import MulticityTab from "./MulticityTab";
import OneWayTab from "./OneWayTab";
import RoundTripTab from "./RoundTripTab";
import { SelectAge } from "./select-age";
import { SelectEconomy } from "./select-economy";
import SubMenu from "./sub-menu";
import SearchEngineTab from "./tabs";
import { IconSearchEngine } from "@/icons";
import Button from "../common/buttons/Button";

const SearchEngine: React.FC = () => {
  const searchParams = useSearchParams(); // Use searchParams to get URL query parameters
  const tab = searchParams.get('tab');

  // State to manage dynamically added multicity tabs (starting with 0 extra tabs)
  const [extraMulticityTabs, setExtraMulticityTabs] = useState<string[]>([]);

  // Function to add a new flight section in the multi-city tab
  const handleAddFlight = () => {
    setExtraMulticityTabs((prev) => [...prev, nanoid()]); // Add a new tab with a unique ID
  };

  // Function to remove a specific extra flight section
  const handleRemoveFlight = (id: string) => {
    setExtraMulticityTabs((prev) => prev.filter((tabId) => tabId !== id));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-5xl banner">
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
                <switch className="peer h-4 w-11 rounded-full border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-full after:border after:border-gray-200 after:bg-orange-500 after:transition-all after:content-[''] peer-checked:bg-white peer-checked:after:translate-x-full peer-focus:ring-green-300"></switch>
              </label>
              <span className="text-sm text-gray-700 font-medium">Direct Flights Only</span>
            </div>
          </div>

          {tab === "one-way" && <OneWayTab />}
          {tab === "round-trip" && <RoundTripTab />}

          {tab === "multi-city" && (
            <>
              {/* Always show the first two MulticityTab components */}
              <MulticityTab key={nanoid()} />
              <MulticityTab key={nanoid()} />

              {/* Render additional dynamic Multicity Tabs based on the extraMulticityTabs state */}
              {extraMulticityTabs.map((id) => (
                <div key={id} className="relative">
                  <MulticityTab />
                  <button
                    className="absolute mt-2 top-16 right-5 text-xs text-red-500 px-2 py-1 bg-red text-white rounded-full"
                    onClick={() => handleRemoveFlight(id)}
                  >
                    ✖
                  </button>
                </div>
              ))}

              {/* Button to add more flights */}
              <Button
                text="Add another Flight"
                onClick={handleAddFlight} // Add new flight on button click
                prevIcon={<IconSearchEngine.AddNew className="mr-2 mt-1" />}
                className="ml-5"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchEngine;
