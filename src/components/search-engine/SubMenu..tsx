import "@/css/style.css";
import { nanoid } from 'nanoid';
import React from 'react';
import { FaHotel, FaPlane, FaSuitcase } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { RiVisaFill } from "react-icons/ri";

type MenuItem = {
    label: string;
    value: string;
    icon: React.ReactNode;
};

const menuItems: MenuItem[] = [
    { label: 'Flights', value: 'flights', icon: <FaPlane /> },
    { label: 'Hotels', value: 'hotels', icon: <FaHotel /> },
    { label: 'Holiday', value: 'holiday', icon: <FaSuitcase /> },
    { label: 'Visa', value: 'visa', icon: <RiVisaFill /> },
    { label: 'Group Request', value: 'group-request', icon: <FaUserGroup /> },
];

export default function SubMenu() {
    return (
        <div>
            {/* Mobile View */}
            <div className="sm:hidden">
                <select id="Tab" className="w-full py-2 px-3 shadow-sm focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm">
                    {menuItems.map((item) => (
                        <option
                            className="h-5 w-5 text-white hover:text-primary transition-colors duration-300"
                            key={nanoid()}
                            value={item.value}
                        >
                            {item.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="flex justify-center gap-6" aria-label="Tabs">
                    {menuItems.map((item) => (
                        <a
                            key={nanoid()}
                            href={`#${item.value}`}
                            className="inline-flex items-center gap-2 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-white hover:text-primary hover:border-primary transition-all duration-300"
                        >
                            <span className="text-white">
                                {item.icon}
                            </span>
                            <span className="text-white">
                                {item.label}
                            </span>
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}
