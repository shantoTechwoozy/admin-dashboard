"use client";

import React, { useState } from "react";
import InputLabel from "../common/inputs/InputLabel";
import FlightInput from "./FlightInput";
import { IconSearchEngine } from "@/icons";

const FlightInputsSearch = () => {
  const [origin, setOrigin] = useState({
    value: "UTK",
    label: "Utirik Airport",
    iso: "MH",
  });
  const [destination, setDestination] = useState({
    value: "FOB",
    label: "Fort Bragg Airport",
    iso: "US",
  });

  return (
    <div className="relative flex flex-1 items-center gap-5">
      <div className="flex flex-col">
        <InputLabel label="From" required />
        <FlightInput
          id="from"
          value={origin}
          onChange={(option: any) => setOrigin(option)}
        />
      </div>

      <button
        className="absolute left-[50%] top-[45%] z-1 -translate-x-[50%] rounded-full bg-slate-300 p-1.5"
        onClick={() => {
          setDestination(origin);
          setOrigin(destination);
        }}
      >
        <IconSearchEngine.Swap className="text-xl" />
      </button>
      <div className="flex flex-col">
        <InputLabel label="To" required />
        <FlightInput
          id="to"
          value={destination}
          onChange={(option: any) => setDestination(option)}
        />
      </div>
    </div>
  );
};

export default FlightInputsSearch;
