"use client";
import React, { useState } from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaGlobe, FaPray } from 'react-icons/fa';

type Props = {};

export default function SETabs({ }: Props) {
    const [activeTab, setActiveTab] = useState('One Way');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <header className="rounded-sm p-1 mt-5 mb-5">
            <div className="mx-auto flex h-auto max-w-screen-xl items-center gap-8">
                <nav aria-label="Global" className="flex flex-1 items-start justify-start md:justify-between">
                    <ul className="flex items-start gap-6 text-sm p-4 rounded-md bg-slate-200">
                        {['One Way', 'Round Trip', 'Multi City', 'Umrah'].map((tab) => (
                            <li key={tab} className="relative">
                                <button
                                    onClick={() => handleTabChange(tab)}
                                    className={`flex items-start gap-2 px-4 py-2 rounded-t-md border-b-2 transition hover:text-slate-400 font-medium text-md ${activeTab === tab ? 'border-blue-600 text-gray-500' : 'border-transparent text-black'}`}
                                >
                                    {tab === 'One Way' && <FaPlaneDeparture className="text-blue-600" size={20} />}
                                    {tab === 'Round Trip' && <FaPlaneArrival className="text-green-600" size={20} />}
                                    {tab === 'Multi City' && <FaGlobe className="text-orange-600" size={20} />}
                                    {tab === 'Umrah' && <FaPray className="text-purple-600" size={20} />}
                                    <span className="hidden md:inline">{tab}</span> {/* Hide text on mobile */}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
