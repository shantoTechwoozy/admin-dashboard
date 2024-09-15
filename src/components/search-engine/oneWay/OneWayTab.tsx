"use client"
import React, { useState } from "react";
import FlightPlaceInput from "../FlightPlaceInput";
import { IconSearchEngine } from "@/icons";
import Button from "../../common/buttons/Button"

const OneWayTab = () => {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState("")

  const handleSubmittion = () => {
    console.log(from, to, date);
  }

  return (
    <div className="flex w-full gap-24 p-5">
      <div className="flex flex-1 items-center gap-8">
        <FlightPlaceInput
          onChange={(e) => setFrom(e.target.value)}
          label="from"
          placeholder="Type city name"
          value={from}
          required
        />
        <button className="rounded-full bg-slate-300 p-1 ">
          <IconSearchEngine.Swap className="text-xl" />
        </button>

        <FlightPlaceInput
          label="to"
          placeholder="Type city name"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
      </div>
      <div className="h-[50px] min-w-[2px] max-w-[2px] bg-slate-500" />
      <div className="flex flex-1 gap-2">
        <FlightPlaceInput
          onChange={(e) => setDate(e.target.value)}
          label="Depart"
          placeholder="Select Date"
          value={date}
          required
        />
        <div className="flex h-12 w-25 items-center justify-center">
          <Button text="Search" onClick={handleSubmittion} className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default OneWayTab;
