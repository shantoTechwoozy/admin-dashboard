import React from "react";
import FlightPlaceInput from "../FlightPlaceInput";
import { IconSearchEngine } from "@/icons";
import Button from "../../common/buttons/Button";

const OneWayTab = () => {
  return (
    <div className="flex w-full gap-24 p-5">
      <div className="flex flex-1 items-center gap-8">
        <FlightPlaceInput
          onChange={() => {}}
          label="from"
          placeholder="Type city name"
          value=""
          required
        />
        <button className="rounded-full bg-slate-300 p-1 ">
          <IconSearchEngine.Swap className="text-xl" />
        </button>

        <FlightPlaceInput
          label="to"
          placeholder="Type city name"
          value=""
          onChange={() => {}}
          required
        />
      </div>
      <div className="h-[50px] min-w-[2px] max-w-[2px] bg-slate-500" />
      <div className="flex flex-1 gap-2">
        <FlightPlaceInput
          onChange={() => {}}
          label="Depart"
          placeholder="Select Date"
          value=""
          required
        />
        <div className="flex h-12 w-25 items-center justify-center">
          <Button text="Search" onClick={() => {}} className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default OneWayTab;
