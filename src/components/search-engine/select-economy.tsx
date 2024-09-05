"use client";
import { useEffect, useRef, useState } from "react";

export function SelectEconomy() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedClass, setSelectedClass] = useState<string>("Economy");

  const options = ["Economy", "Premium Economy", "Business", "First Class"];
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
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-black font-normal justify-center w-full border border-gray-300 rounded-md p-2  md:bg-transparent md:border-0 lg:border-0"
      >
        {selectedClass}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-auto lg:w-auto bg-white border border-gray-200 rounded-md shadow-md mt-2">
          <div className="flex flex-col p-2 text-black font-normal">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedClass(option);
                  setIsOpen(false);
                }}
                className="w-full text-left p-2 hover:bg-gray-100"
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
