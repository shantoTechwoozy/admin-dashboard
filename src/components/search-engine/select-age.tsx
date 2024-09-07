"use client";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { FaAnglesRight } from "react-icons/fa6";

type Setter = React.Dispatch<React.SetStateAction<number>>;

export function SelectAge() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [adultCount, setAdultCount] = useState<number>(0);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [kidsCount, setKidsCount] = useState<number>(0);
  const [infantsCount, setInfantsCount] = useState<number>(0);

  const totalCount = adultCount + childrenCount + kidsCount + infantsCount;

  const increment = (setter: Setter) => () =>
    setter((count: number) => count + 1);
  const decrement = (setter: Setter) => () =>
    setter((count: number) => Math.max(0, count - 1));

  const resetCounts = () => {
    setAdultCount(1);
    setChildrenCount(0);
    setKidsCount(0);
    setInfantsCount(0);
  };

  const handleDoneClick = () => {
    setIsOpen(false);
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-full border border-gray-300 rounded-md p-2  hover:bg-slate-300 md:bg-transparent md:border-0 lg:border-0"
      >
        <span className="flex items-center text-black font-normal">
          Travellers
          <FaAnglesRight size={12} className="ml-1" />
        </span>
        <span className="ml-2 text-black font-normal">{totalCount}</span>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-auto lg:w-auto mr-52 bg-white border border-gray-200 rounded-md shadow-md mt-2">
          <div className="flex flex-col p-5">
            {/* Adults */}
            <div className="flex justify-between items-center gap-2">
              <div>
                <div className="font-semibold mb-1">Adults</div>
                <div className="text-sm text-gray-500 w-[120px]">12 years & above</div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 bg-gray-200 rounded-md text-white bg-black bg-gray-300"
                  onClick={decrement(setAdultCount)}
                >
                  -
                </button>
                <span className="text-lg">{adultCount}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded-md text-white bg-black bg-gray-300"
                  onClick={increment(setAdultCount)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center gap-10">
              <div>
                <div className="font-semibold mb-1">Children</div>
                <div className="text-sm text-gray-500 w-[120px]">From 5 to under 12</div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 bg-gray-200 rounded-md text-white bg-black bg-gray-300"
                  onClick={decrement(setChildrenCount)}
                >
                  -
                </button>
                <span className="text-lg">{childrenCount}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded-md text-white bg-black bg-gray-300"
                  onClick={increment(setChildrenCount)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Kids */}
            <div className="flex justify-between items-center gap-10">
              <div>
                <div className="font-semibold mb-1">Kids</div>
                <div className="text-sm text-gray-500 w-[120px]">From 2 to under 5</div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 bg-gray-200 rounded-md text-white bg-black bg-gray-300"
                  onClick={decrement(setKidsCount)}
                >
                  -
                </button>
                <span className="text-lg">{kidsCount}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded-md text-white bg-black bg-gray-300"
                  onClick={increment(setKidsCount)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Infants */}
            <div className="flex justify-between items-center gap-10">
              <div>
                <div className="font-semibold mb-1">Infants</div>
                <div className="text-sm text-gray-500 w-[120px]">Under 2 years</div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 bg-gray-200 rounded-md text-white bg-black bg-gray-300"
                  onClick={decrement(setInfantsCount)}
                >
                  -
                </button>
                <span className="text-lg">{infantsCount}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded-md text-white bg-black bg-gray-300"
                  onClick={increment(setInfantsCount)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between p-4 border-t border-gray-200 bg-gray-50">
            <button
              className="px-4 py-2 border border-gray-300 rounded-md text-white bg-black hover:bg-gray-100"
              onClick={resetCounts}
            >
              Reset
            </button>
            <button
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              onClick={handleDoneClick}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
