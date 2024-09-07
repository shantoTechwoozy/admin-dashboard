import React from 'react';
import { nanoid } from 'nanoid';
import { FaPlane, FaHotel, FaSuitcase, FaMobileAlt, FaDollarSign } from 'react-icons/fa';
import { RiVisaFill } from "react-icons/ri";
import { FaUserGroup } from 'react-icons/fa6';
import "@/css/style.css";

type MenuItem = {
    label: string;
    value: string;
    icon: React.ReactNode;
};

const menuItems: MenuItem[] = [
    { label: 'Flights', value: 'flights', icon: <FaPlane className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" /> },
    { label: 'Hotels', value: 'hotels', icon: <FaHotel className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" /> },
    { label: 'Holiday', value: 'holiday', icon: <FaSuitcase className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" /> },
    { label: 'Visa', value: 'visa', icon: <RiVisaFill className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" /> },
    // { label: 'Mobile Recharge', value: 'mobile-recharge', icon: <FaMobileAlt className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" /> },
    // { label: 'Pay Bill', value: 'pay-bill', icon: <FaDollarSign className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" /> },
    { label: 'Group Request', value: 'group-request', icon: <FaUserGroup className="h-5 w-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" /> },
];

export default function SubMenu() {
    return (
        <div>
            {/* Mobile View */}
            <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>
                <select id="Tab" className="w-full rounded-md border-gray-300 py-2 px-3 text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                    {menuItems.map((item) => (
                        <option key={nanoid()} value={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>

            {/* Desktop View */}
            <div className="hidden sm:block mt-12 mb-5">
                <div className="border-b border-gray-200">
                    <nav className="flex justify-center gap-6" aria-label="Tabs">
                        {menuItems.map((item) => (
                            <a
                                key={nanoid()}
                                href={`#${item.value}`}
                                className="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
