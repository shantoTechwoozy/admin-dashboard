"use client";

import React from "react";

import Select from "react-select";
import InputLabel from "../common/inputs/InputLabel";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: "250px",
    height: "60px",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #0C254D",
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    paddingX: "12px",
    backgroundColor: state.isSelected ? "#F6931D" : "white",
  }),
  indicatorSeparator: () => ({
    display: "none", // Hide the separator
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    display: "none",
    padding: 0,
  }),
};

const FlightInput = ({
  required,
  options,
  onInputChange,
  label,
  ...restInputs
}: any) => {
  return (
    <div>
      {label && <InputLabel label={label} required={required} />}
      <Select
        options={options}
        formatOptionLabel={formatOptionLabel}
        placeholder="Flying from Airport/City"
        isSearchable
        onInputChange={onInputChange}
        styles={customStyles}
        {...restInputs}
        required={required}
      />
    </div>
  );
};

export default FlightInput;

export const formatOptionLabel = ({ label, value, iso }: any) => (
  <div className="flex items-center gap-3 text-[#0C254D]">
    <div className="min-w-[40px] max-w-[40px]">
      <h1 className="font-bold uppercase">{value}</h1>
    </div>
    <div className="w-[1px] self-stretch bg-[#a5a6a8]"></div>
    <div className="truncate">
      <h3 className="text-sm font-semibold capitalize">{iso}</h3>
      <span className="text-sm">{label}</span>
    </div>
  </div>
);
