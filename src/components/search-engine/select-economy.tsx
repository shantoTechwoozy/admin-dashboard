"use client";
import * as React from "react";
import { useState } from "react";

export function SelectEconomy() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedClass, setSelectedClass] = useState<string>("Economy");

  const options = ["Economy", "Premium Economy", "Business", "First Class"];

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-black font-normal justify-center w-full border border-gray-300 rounded-md p-2 bg-slate-200 lg:bg-slate-200 hover:bg-slate-300 md:bg-transparent md:border-0 lg:border-0"
        >
        {selectedClass}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-md mt-2">
          <div className="flex flex-col p-5 text-black font-normal">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedClass(option);
                  setIsOpen(false);
                }}
                className="w-full text-left p-2 hover:bg-gray-100 "
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
