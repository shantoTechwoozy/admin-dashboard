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
    <div className='flex flex-col gap-12'>
      {/* Flight Type Tabs */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-wrap gap-4 lg:flex-nowrap lg:gap-8 h-fit rounded-lg">
          <Tabs defaultValue="oneway" className="w-full">
            <TabsList className="flex w-full justify-between gap-6">
              <TabsTrigger
                value="oneway"
                className="bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-4"
              >
                <FaPlaneDeparture size={20} />
                <span>One Way</span>
              </TabsTrigger>
              <TabsTrigger
                value="roundtrip"
                className="bg-green-600 text-white py-4 px-6 rounded-xl hover:bg-white hover:text-green-600 transition-colors duration-300 flex items-center gap-4"
              >
                <FaPlaneArrival size={20} />
                <span>Round Trip</span>
              </TabsTrigger>
              <TabsTrigger
                value="multicity"
                className="bg-red-600 text-white py-4 px-6 rounded-xl hover:bg-white hover:text-red-600 transition-colors duration-300 flex items-center gap-4"
              >
                <FaGlobe size={20} />
                <span>Multi City</span>
              </TabsTrigger>
              <TabsTrigger
                value="umrah"
                className="bg-yellow-500 text-white py-4 px-6 rounded-xl hover:bg-white hover:text-yellow-500 transition-colors duration-300 flex items-center gap-6"
              >
                <FaPray size={20} />
                <span>Umrah</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="oneway">
              {/* Content for One Way */}
            </TabsContent>
            <TabsContent value="roundtrip">
              {/* Content for Round Trip */}
            </TabsContent>
            <TabsContent value="multicity">
              {/* Content for Multi City */}
            </TabsContent>
            <TabsContent value="umrah">
              {/* Content for Umrah */}
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 h-fit rounded-lg bg-gray-200">
          <select className="p-4 border border-gray-300 rounded-md flex-1" aria-label="Class">
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-md flex-1" aria-label="Travellers">
            <option>1 Traveller</option>
            <option>2 Travellers</option>
            <option>3 Travellers</option>
          </select>
        </div>
      </div>

      {/* Inputs and Swap Button */}
      <div className="flex flex-wrap gap-4 lg:gap-8">
        <div className="flex items-center justify-center h-fit rounded-lg bg-gray-200 p-4 flex-1">
          <input
            type="text"
            placeholder="DAC | Dhaka"
            className="p-2 border border-gray-300 rounded-md w-full"
          />        </div>
        <div className="flex items-center justify-center h-fit rounded-full bg-gray-200 p-4 flex-none">
          <button
            className="bg-gray-300 text-gray-700 p-2 rounded-full flex items-center justify-center"
            onClick={handleSwapClick}
          >
            <Image
              src="/se/swap.png"
              width={100}
              height={50}
              alt="Swap Icon"
              className={`w-6 h-6 rounded-full ${isRotating ? 'rotate-360' : ''} transition-transform duration-1000`}
            />
          </button>        </div>
        <div className="flex items-center justify-center h-fit rounded-lg bg-gray-200 p-4 flex-1">
          <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Input 3" />
        </div>
        <div className="flex items-center justify-center h-fit rounded-lg bg-gray-200 p-4 flex-1">
          <input type="text" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Input 4" />
        </div>
        <div className="flex items-center justify-center h-fit rounded-lg bg-gray-200 p-4 flex-none">
          <button className="bg-blue-500 text-white p-2 rounded-lg w-full">Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchEngine;
