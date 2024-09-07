import React, { useState } from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { RiTicket2Fill, RiCheckFill, RiCloseCircleFill } from "react-icons/ri";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

type Props = {}

function BookingMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="p-2 bg-blue-600 mb-2 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-blue-700 transition-colors">
                    {isMenuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
                    <span>Option</span>
                </button>
            </div>

            {/* Dropdown Menu for Mobile */}
            <div className={`mt-4 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col gap-2">
                    <li>
                        <button className="p-2 bg-blue-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-blue-700 transition-colors w-full">
                            <AiFillAppstore />
                            All
                        </button>
                    </li>
                    <li>
                        <button className="p-2 bg-green-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-green-700 transition-colors w-full">
                            <RiTicket2Fill />
                            Ticketed
                        </button>
                    </li>
                    <li>
                        <button className="p-2 bg-yellow-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-yellow-700 transition-colors w-full">
                            <RiCheckFill />
                            Booked
                        </button>
                    </li>
                    <li>
                        <button className="p-2 bg-slate-400 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-red-700 transition-colors w-full">
                            <RiCloseCircleFill />
                            Booking Cancelled
                        </button>
                    </li>
                    <li>
                        <button className="p-2 bg-orange-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-gray-700 transition-colors w-full">
                            <RiCloseCircleFill />
                            <span className="ml-1">Ticket Cancelled</span>
                        </button>
                    </li>
                    <li>
                        <button className="p-2 bg-purple-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-purple-700 transition-colors w-full">
                            <RiTicket2Fill />
                            Ticket Processing
                        </button>
                    </li>
                </ul>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-wrap items-start justify-start gap-2 mb-8 lg:bg-slate-200 lg:p-2 lg:rounded-md">
                <button className="p-2 bg-blue-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-blue-700 transition-colors">
                    <AiFillAppstore />
                    All
                </button>
                <button className="p-2 bg-green-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-green-700 transition-colors">
                    <RiTicket2Fill />
                    Ticketed
                </button>
                <button className="p-2 bg-yellow-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-yellow-700 transition-colors">
                    <RiCheckFill />
                    Booked
                </button>
                <button className="p-2 bg-slate-400 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-red-700 transition-colors">
                    <RiCloseCircleFill />
                    Booking Cancelled
                </button>
                <button className="p-2 bg-orange-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-gray-700 transition-colors">
                    <RiCloseCircleFill />
                    <span className="ml-1">Ticket Cancelled</span>
                </button>
                <button className="p-2 bg-purple-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-purple-700 transition-colors">
                    <RiTicket2Fill />
                    Ticket Processing
                </button>
            </div>
        </div>
    );
}

export default BookingMenu;
