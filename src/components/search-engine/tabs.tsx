"use client";
import { nanoid } from 'nanoid';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaGlobe, FaPlaneArrival, FaPlaneDeparture, FaPray } from 'react-icons/fa';

import { SelectEconomy } from './selects/SelectEconomy';
import SwitchButton from '../common/buttons/SwitchButton';
import { SelectTravellers } from './selects/SelectTravellers';

type PropsTypes = {
    value: string;
    name: string;
};

const TabName: PropsTypes[] = [
    { name: "One Way", value: "one-way" },
    { name: "Round Trip", value: "round-trip" },
    { name: "Multi City", value: "multi-city" },
    { name: "Umrah", value: "umrah" }
];

export default function SearchEngineTab() {

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams(); // Use searchParams to get URL query parameters
    const tab = searchParams.get('tab'); // Get the 'tab' parameter from the URL
    const [activeTab, setActiveTab] = useState('/one-way');

    // Set the active tab based on the URL query parameter or default to "one-way"
    useEffect(() => {
        if (tab) {
            const foundTab = TabName.find((t) => t.value === tab);
            if (foundTab) {
                setActiveTab(foundTab.value);
            }
        }
    }, [tab]);

    // Handle tab change and update the URL without reloading the page
    const handleTabChange = (newTab: string) => {
        setActiveTab(newTab);
        // Update the URL with the selected tab as a query parameter
        router.push(`${pathname}?tab=${newTab}`);
    };

    return (

        <div className="flex items-center gap-6 text-sm ">
            {TabName.map((tab) => (

                <button key={nanoid()}
                    onClick={() => handleTabChange(tab.value)}
                    className={`flex items-center text-nowrap gap-2 px-4 py-2 rounded-t-md border-b-2 transition hover:text-slate-400 font-medium text-md ${activeTab === tab.value ? 'border-blue-600 text-black' : 'border-transparent text-gray-500'
                        }`}
                >
                    {/* Render Icons */}
                    {tab.value === 'one-way' && <FaPlaneDeparture className="text-blue-600 lg:hidden" size={24} />}
                    {tab.value === 'round-trip' && <FaPlaneArrival className="text-green-600 lg:hidden" size={24} />}
                    {tab.value === 'multi-city' && <FaGlobe className="text-orange-600 lg:hidden" size={24} />}
                    {tab.value === 'umrah' && <FaPray className="text-purple-600 lg:hidden" size={24} />}

                    {/* Display tab name */}
                    <span>{tab.name}</span>
                </button>
            ))}
            <SelectTravellers />
            <SelectEconomy />
            <SwitchButton />
        </div>
    );
}
