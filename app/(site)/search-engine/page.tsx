"use client"
import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

type Props = {};

const SearchEngine: React.FC<Props> = () => {
  const [selectedFlightType, setSelectedFlightType] = useState<string>('');
  const [isRotating, setIsRotating] = useState<boolean>(false);

  const handleSwapClick = () => {
    setIsRotating(true);
    // Reset rotation after animation completes
    setTimeout(() => setIsRotating(false), 1000); // 1 second
  };
  return (
    <div className='flex flex-col gap-4 p-1'>
      {/* Flight Type Tabs */}
      <div className="h-fit flex flex-col lg:flex-row lg:gap-32 justify-between">
        <div className="flex flex-wrap gap-4 lg:flex-nowrap lg:gap-8 h-fit rounded-lg bg-gray-200 mb-5">
          <Tabs defaultValue="oneway" className="w-full">
            <TabsList className="grid w-full grid-cols-4 space-x-2">
              <TabsTrigger
                value="oneway"
                className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 p-3"
              >
                <FaPlaneDeparture size={20} />
                <span className="ml-2 hidden lg:inline">One Way</span>
              </TabsTrigger>
              <TabsTrigger
                value="roundtrip"
                className="bg-green-600 text-white hover:bg-white hover:text-green-600 p-3"
              >
                <FaPlaneArrival size={20} />
                <span className="ml-2 hidden lg:inline">Round Trip</span>
              </TabsTrigger>
              <TabsTrigger
                value="multicity"
                className="bg-red-600 text-white hover:bg-white hover:text-red-600 p-3"
              >
                <FaGlobe size={20} />
                <span className="ml-2 hidden lg:inline">Multi City</span>
              </TabsTrigger>
              <TabsTrigger
                value="umrah"
                className="bg-yellow-500 text-white hover:bg-white hover:text-yellow-500 p-3"
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
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Economy" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <select className="p-2 border border-gray-300 rounded-md flex-1" aria-label="Travellers">
            <option>1 Traveller</option>
            <option>2 Travellers</option>
            <option>3 Travellers</option>
          </select>
        </div>
      </div>


      {/* Inputs and Swap Button */}
      <div className="w-full">
        {/* Inputs and Swap Button */}
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-3">
          <div className=" flex flex-col lg:flex-row lg:items-center lg:gap-8 w-full">
            {/* Inputs */}

            <div className="h-full flex flex-col lg:flex-row gap-4 lg:gap-0 w-full">
              <div className="flex items-center h-full rounded-lg bg-gray-200 flex-1">
                <Input type="text" className="w-full  h-full p-5 lg:border-r-0 rounded-lg" placeholder="Depart From" />
              </div>

              {/* Swap Button */}

              <button
                className=" bg-white text-gray-700 p-5 border border-gray-500 rounded-full flex items-center justify-center"
                onClick={handleSwapClick}
              >
                <Image
                  src="/se/swap.png"
                  width={50}
                  height={50}
                  alt="Swap Icon"
                  className={`w-6 h-6 ${isRotating ? 'rotate-360' : ''}transition-transform duration-1000`}
                />
              </button>

              <div className="flex items-center h-full rounded-lg bg-gray-200 flex-1">
                <Input type="text" className="w-full  h-full p-5 lg:border-l-0 rounded-lg" placeholder="Going To" />
              </div>
            </div>

          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-3 w-full">
            <CustomDatePicker placeholder="14 | August - Wed - 2024" />
            <CustomDatePicker placeholder="15 | August - Wed - 2024" />
            <div className="flex ml-2 items-center h-full rounded-lg bg-gray-200 flex-none">
              <button className="bg-blue-500 text-white p-5 rounded-lg w-full">
                <Image
                  src="/se/search.png"
                  width={50}
                  height={50}
                  alt="Swap Icon"
                  className={`w-6 h-6 z-10 transition-transform duration-1000`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchEngine;
