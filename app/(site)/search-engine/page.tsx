"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { FaPlaneDeparture, FaPlaneArrival, FaGlobe, FaPray } from 'react-icons/fa';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CustomDatePicker from '@/lib/datepicker';
import Image from 'next/image';
import SEheader from '@/components/se-common/header';

type Props = {};

const SearchEngine: React.FC<Props> = () => {
  const [selectedFlightType, setSelectedFlightType] = useState<string>('');
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [fareType, setFareType] = useState<'regular' | 'student'>('regular');

  const handleSwapClick = () => {
    setIsRotating(true);
    // Reset rotation after animation completes
    setTimeout(() => setIsRotating(false), 1000); // 1 second
  };

  const handleFareChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFareType(event.target.value as 'regular' | 'student');
  };

  return (
    <div className='flex flex-col gap-4 p-1'>
      <SEheader />
      {/* Flight Type Tabs */}
      <div className="h-fit flex flex-col lg:flex-row lg:gap-32 justify-between">
        <div className="flex flex-wrap gap-4 lg:flex-nowrap lg:gap-8 h-fit rounded-lg bg-white mb-5">
          <Tabs defaultValue="oneway" className="w-full">
            <TabsList className="grid w-full grid-cols-4 space-x-2">
              <TabsTrigger
                value="oneway"
                className="bg-blue-600 text-white p-2 lg:p-3 transition-transform transform hover:scale-105 text-sm lg:text-lg"
              >
                <FaPlaneDeparture size={20} />
                <span className="ml-2 hidden lg:inline">One Way</span>
              </TabsTrigger>
              <TabsTrigger
                value="roundtrip"
                className="bg-green-600 text-white p-2 lg:p-3 transition-transform transform hover:scale-105 text-sm lg:text-lg"
              >
                <FaPlaneArrival size={20} />
                <span className="ml-2 hidden lg:inline">Round Trip</span>
              </TabsTrigger>
              <TabsTrigger
                value="multicity"
                className="bg-red-600 text-white p-2 lg:p-3 transition-transform transform hover:scale-105 text-sm lg:text-lg"
              >
                <FaGlobe size={20} />
                <span className="ml-2 hidden lg:inline">Multi City</span>
              </TabsTrigger>
              <TabsTrigger
                value="umrah"
                className="bg-yellow-500 text-white p-2 lg:p-3 transition-transform transform hover:scale-105 text-sm lg:text-lg"
              >
                <FaPray size={20} />
                <span className="ml-2 hidden lg:inline">Umrah</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="oneway" className="">
              {/* Content for One Way */}
            </TabsContent>
            <TabsContent value="roundtrip" className="">
              {/* Content for Round Trip */}
            </TabsContent>
            <TabsContent value="multicity" className="">
              {/* Content for Multi City */}
            </TabsContent>
            <TabsContent value="umrah" className="">
              {/* Content for Umrah */}
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 h-fit rounded-lg">
          <Select>
            <SelectTrigger className="w-[120px] text-sm lg:text-base">
              <SelectValue placeholder="Economy" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem> */}
              </SelectGroup>
            </SelectContent>
          </Select>
          <select className="p-2 border border-gray-300 rounded-md flex-1 text-sm lg:text-base" aria-label="Travellers">
            <option>1 Traveller</option>
            <option>2 Travellers</option>
            <option>3 Travellers</option>
          </select>
        </div>
      </div>

      {/* Inputs and Swap Button */}
      <div className="w-full mt-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-3">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 w-full">
            <div className="h-full flex flex-col lg:flex-row gap-4 lg:gap-1 w-full relative">
              <label
                htmlFor="Depart From"
                className="relative block rounded-md border border-gray-200"
              >
                <Input
                  type="text"
                  id="Depart From"
                  className="w-full h-full p-5 rounded-lg text-sm lg:text-base border bg-white placeholder-transparent focus:border-black focus:outline-none focus:ring-0 lg:border-r-0 peer"
                  placeholder=""
                />

                <span
                  className="pointer-events-none absolute left-3 top-0 transform -translate-y-1/2 bg-blue-200 rounded-full px-1 text-xs font-bold text-gray-700"
                >
                  Depart From
                </span>
              </label>

              <button
                className="w-[70px] bg-white text-gray-700 p-2 lg:p-5 border border-gray-400 rounded-full flex items-center justify-center transition-transform transform hover:scale-105"
                onClick={handleSwapClick}
                style={{ marginTop: 'auto', marginBottom: 'auto' }}
              >
                <Image
                  src="/se/swap.png"
                  width={50}
                  height={50}
                  alt="Swap Icon"
                  className={`w-6 h-6 ${isRotating ? 'rotate-360' : ''} transition-transform duration-1000`}
                />
              </button>

              <label
                htmlFor="Going To"
                className="relative block rounded-md border border-gray-200 mt-2 lg:mt-0"
              >
                <Input
                  type="text"
                  id="Going To"
                  className="w-full h-full p-5 rounded-lg text-sm lg:text-base border bg-white placeholder-transparent focus:border-black focus:outline-none focus:ring-0 lg:border-l-0 peer"
                  placeholder=""
                />

                <span
                  className="pointer-events-none absolute left-3 top-0 transform -translate-y-1/2 bg-blue-200 rounded-full px-1 text-xs font-bold text-gray-700"
                >
                  Going To
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-3 w-full">
            <CustomDatePicker placeholder="07 | Aug - Wed, 2024" />
            <CustomDatePicker placeholder="08 | Aug - Wed, 2024" />
            <div className="flex items-center justify-center rounded-full bg-blue-500">
              <button className="flex items-center justify-center text-white p-3 lg:p-6 rounded-lg w-full max-w-xs lg:max-w-md transition-transform transform hover:scale-105 text-sm lg:text-base">
                <span className="mr-1">Search</span>
                <Image
                  src="/se/search.png"
                  width={20}
                  height={20}
                  alt="Search Icon"
                  className="transition-transform transform hover:scale-105"
                />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Fare Type Radio Buttons */}
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 mt-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="regular"
            name="fareType"
            value="regular"
            checked={fareType === 'regular'}
            onChange={handleFareChange}
            className="mr-2"
          />
          <label htmlFor="regular" className="text-gray-700 drop-shadow-xl text-sm lg:text-base">Regular Fare</label>
        </div>
        <div className="flex items-center ">
          <input
            type="radio"
            id="student"
            name="fareType"
            value="student"
            checked={fareType === 'student'}
            onChange={handleFareChange}
            className="mr-2"
          />
          <label htmlFor="student" className="text-gray-700 drop-shadow-xl text-sm lg:text-base">Student Fare</label>
        </div>
      </div>
    </div>
  );
}

export default SearchEngine;
