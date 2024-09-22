"use client";

import React from "react";

import Select from "react-select";

const formatOptionLabel = ({ label, value, iso }: any) => (
  <div className="bg-re flex items-center gap-3">
    <div className="w-[40px]">
      <h1 className="font-bold">{value}</h1>
    </div>
    <div className="w-[1px] self-stretch bg-[#a5a6a8]"></div>
    <div className="truncate">
      <h3 className="text-sm font-semibold">{iso}</h3>
      <span className="text-sm">{label}</span>
    </div>
  </div>
);

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
    color: "#0C254D",
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

const FlightInput = ({ ...restInputs }: any) => {
  return (
    <Select
      options={[
        {
          value: "UTK",
          label: "Utirik Airport",
          iso: "MH",
        },
        {
          value: "WKK",
          label: "Aleknagik / New Airport",
          iso: "US",
        },
        {
          value: "FOB",
          label: "Fort Bragg Airport",
          iso: "US",
        },
      ]}
      formatOptionLabel={formatOptionLabel}
      placeholder="Flying from Airport/City"
      isSearchable
      styles={customStyles}
      {...restInputs}
    />
  );
};

export default FlightInput;
