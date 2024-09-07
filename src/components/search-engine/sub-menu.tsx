import React from 'react';
import { FaPlane, FaHotel, FaSuitcase, FaMobileAlt, FaDollarSign } from 'react-icons/fa';
import { RiVisaFill } from "react-icons/ri";
import "@/css/style.css";
import { FaUserGroup } from 'react-icons/fa6';

type Props = {};

export default function SubMenu() {
    return (
        <div>
            {/* Mobile View */}
            <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>
                <select id="Tab" className="w-full rounded-md border-gray-300 py-2 px-3 text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    <option value="flights">Flights</option>
                    <option value="hotels">Hotels</option>
                    <option value="holiday">Holiday</option>
                    <option value="visa">Visa</option>
                    <option value="mobile-recharge">Mobile Recharge</option>
                    <option value="pay-bill">Pay Bill</option>
                    <option value="pay-bill">Group Request</option>

                </select>
            </div>

            {/* Desktop View */}
            <div className="hidden sm:block mt-12 mb-5">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex gap-6" aria-label="Tabs">
                        <a
                            href="#flights"
                            className="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
                        >
                            <FaPlane className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" />
                            Flights
                        </a>

                        <a
                            href="#hotels"
                            className="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
                        >
                            <FaHotel className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" />
                            Hotels
                        </a>

                        <a
                            href="#holiday"
                            className="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
                        >
                            <FaSuitcase className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" />
                            Holiday
                        </a>

                        <a
                            href="#visa"
                            className="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
                        >
                            <RiVisaFill className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" />
                            Visa
                        </a>

                        <a
                            href="#mobile-recharge"
                            className="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
                        >
                            <FaMobileAlt className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" />
                            Mobile Recharge
                        </a>

                        <a
                            href="#pay-bill"
                            className="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
                        >
                            <FaDollarSign className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" />
                            Pay Bill
                        </a>
                        <a
                            href="#pay-bill"
                            className="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
                        >
                            <FaUserGroup className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" />
                            Group Request
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
