"use client"
import React, { useState } from 'react';
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { LuHotel } from "react-icons/lu";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { LiaCcVisa } from "react-icons/lia";
import { CiMobile4 } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";

type Props = {};

export default function SEheader({ }: Props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white rounded-lg p-2 mb-5">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8">
                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm p-2">
                            <li className="flex items-center gap-2">
                                <PiAirplaneTakeoffLight className="text-blue-600" size={20} />
                                <a className="text-gray-500 transition hover:text-gray-500/75 font-medium text-lg" href="#">Flight</a>
                            </li>

                            <li className="flex items-center gap-2">
                                <LuHotel className="text-green-600" size={20} />
                                <a className="text-gray-500 transition hover:text-gray-500/75 font-medium text-lg" href="#">Hotel</a>
                            </li>

                            <li className="flex items-center gap-2">
                                <MdOutlineHolidayVillage className="text-orange-600" size={20} />
                                <a className="text-gray-500 transition hover:text-gray-500/75 font-medium text-lg" href="#">Holiday</a>
                            </li>

                            <li className="flex items-center gap-2">
                                <LiaCcVisa className="text-purple-600" size={20} />
                                <a className="text-gray-500 transition hover:text-gray-500/75 font-medium text-lg" href="#">Visa</a>
                            </li>

                            <li className="flex items-center gap-2">
                                <CiMobile4 className="text-teal-600" size={20} />
                                <a className="text-gray-500 transition hover:text-gray-500/75 font-medium text-lg" href="#">Mobile Recharge</a>
                            </li>

                            <li className="flex items-center gap-2">
                                <CiMobile4 className="text-red-600" size={20} />
                                <a className="text-gray-500 transition hover:text-gray-500/75 font-medium text-lg" href="#">Pay Bill</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4 p-2">
                        <div className="sm:flex sm:gap-4">
                            <li className="flex items-center gap-2 p-2.5 bg-green-500 border border-gray-300 rounded-lg shadow-sm transition-transform transform hover:scale-105">
                                <FaUserGroup className="text-white" size={20} />
                                <a className="text-white transition hover:text-white font-medium text-lg" href="#">Hotel</a>
                            </li>
                        </div>

                        <button
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            onClick={toggleMobileMenu}
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <nav aria-label="Mobile Menu" className="md:hidden">
                    <ul className="flex flex-col gap-4 text-sm p-4 bg-white border-t border-gray-200">
                        <li className="flex items-center gap-2">
                            <PiAirplaneTakeoffLight className="text-blue-600" size={20} />
                            <a className="text-gray-500 transition hover:text-gray-500/75 font-medium text-lg" href="#">Flight</a>
                        </li>

                        <li className="flex items-center gap-2">
                            <LuHotel className="text-green-600" size={20} />
                            <a className="text-gray-500 transition hover:text-gray-500/75 font-medium text-lg" href="#">Hotel</a>
                        </li>

                        <li className="flex items-center gap-2">
                            <MdOutlineHolidayVillage className="text-orange-600" size={20} />
                            <a className="text-gray-500 transition hover:text-gray-500/75 font-medium text-lg" href="#">Holiday</a>
                        </li>

                        <li className="flex items-center gap-2">
                            <LiaCcVisa className="text-purple-600" size={20} />
                            <a className="text-gray-500 transition hover:text-gray-500/75 font-medium text-lg" href="#">Visa</a>
                        </li>

                        <li className="flex items-center gap-2">
                            <CiMobile4 className="text-teal-600" size={20} />
                            <a className="text-gray-500 transition hover:text-gray-500/75 font-medium text-lg" href="#">Mobile Recharge</a>
                        </li>

                        <li className="flex items-center gap-2">
                            <CiMobile4 className="text-red-600" size={20} />
                            <a className="text-gray-500 transition hover:text-gray-500/75 font-medium text-lg" href="#">Pay Bill</a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
