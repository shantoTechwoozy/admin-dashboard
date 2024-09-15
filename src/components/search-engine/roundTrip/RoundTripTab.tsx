"use client"
import React, { useState } from "react";
import { IconSearchEngine } from "@/icons";
import Button from "@/components/common/buttons/Button";
import InputLabel from "@/components/common/inputs/InputLabel";
import Select from "react-dropdown-select";
import Datepicker from "react-tailwindcss-datepicker";

const RoundTripTab = () => {
  const [data, setData] = useState<any>({ from: "", to: "", departDate: new Date(), returenDate: new Date() });
  console.log(data)

  const handleSubmittion = () => {
    console.log();
  }
  const FromOptions = [
    { value: 1, label: "Bangladesh (DAC)" },
    { value: 2, label: "Cox's Bazar (COX)" },
    { value: 3, label: "Co's Bazar (COX)" }
  ]
  const ToOptions = [
    { value: 1, label: "Banglade (DAC)" },
    { value: 2, label: "Cox Bazar (COX)" }
  ]
  const handleSelectChange = (field: string, values: any[]) => {
    setData({ ...data, [field]: values.length > 0 ? values[0].label : "" })
  }
  return (
    <div className="flex w-full gap-8 p-5">
      <div className="flex flex-1 items-center gap-16">
        <div className="flex flex-col">
          <InputLabel label="From" required />
          <Select

            options={FromOptions}
            onChange={(values) => handleSelectChange("from", values)}
            searchable
            placeholder="Type city name"
            className="!border-none foucs:outline-none !shadow-none"
            values={[]}
            required
            clearOnSelect={true}
            dropdownHeight="200px"
          />
        </div>

        <button className="rounded-full bg-slate-300 p-1 ">
          <IconSearchEngine.Swap className="text-xl" />
        </button>

        <div className="flex flex-col">
          <InputLabel label="To" required />
          <Select
            options={ToOptions}
            onChange={(values) => handleSelectChange("to", values)}
            searchable
            placeholder="Type city name"
            className="!border-none foucs:outline-none !shadow-none"
            values={[]}
            required
          />
        </div>
      </div>
      <div className="h-[50px] min-w-[2px] max-w-[2px] bg-slate-500" />
      <div className="flex flex-1 gap-2">
        <div className="flex flex-col w-full">
          <InputLabel label="Depart" required />
          <Datepicker
            asSingle={true}
            primaryColor={"blue"}
            value={data.departDate}
            onChange={newValue => setData({
              ...data, departDate: newValue
            })}
            showShortcuts={true}
            useRange={false}
            toggleClassName="hidden"
            containerClassName="w-full text-xs"
            inputClassName="w-full focus:outline-none px-2 py-2"
          />
        </div>
        <div className="flex flex-col w-full">
          <InputLabel label="Return" required />
          <Datepicker
            asSingle={true}
            primaryColor={"blue"}
            value={data.returnDate}
            onChange={newValue => setData({
              ...data, returnDate: newValue
            })}
            showShortcuts={true}
            useRange={false}
            toggleClassName="hidden"
            containerClassName="w-full text-xs"
            inputClassName="w-full focus:outline-none px-2 py-2"
          />
        </div>
        <div className="flex h-12 w-25 items-center justify-center">
          <Button text="Search" onClick={handleSubmittion} className="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default RoundTripTab;
