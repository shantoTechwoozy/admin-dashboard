"use client";
import "@/css/style.css";
import { IconSearchEngine } from "@/icons";
import { nanoid } from "nanoid";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Button from "../common/buttons/Button";
import MulticityTab from "./multiCity/MulticityTab";
import FlightSearchResult from "./oneWay/FlightSearchResult";
import OneWayTab from "./oneWay/OneWayTab";
import RoundTripTab from "./roundTrip/RoundTripTab";
import SubMenu from "./SubMenu.";
import SearchEngineTab from "./tabs";


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
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full bg-[url('/images/banner/banner.webp')] bg-cover bg-center bg-fixed px-12 py-12">
        <SubMenu />
        <div className="bg-white flex flex-col gap-1 rounded-3xl px-0.5 py-4">

          <SearchEngineTab />

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
                    className="absolute mt-2 top-16 right-5 text-xs text-red-500 px-2 py-1 text-white rounded-full"
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

      <FlightSearchResult />

    </div>
  );
};

export default SearchEngine;
