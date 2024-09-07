"use client";
import { nanoid } from 'nanoid';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaGlobe, FaPlaneArrival, FaPlaneDeparture, FaPray } from 'react-icons/fa';

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
    const searchParams = useSearchParams(); // Use searchParams to get URL query parameters
    const tab = searchParams.get('tab'); // Get the 'tab' parameter from the URL
    const [activeTab, setActiveTab] = useState('one-way');

    // Set the active tab based on the URL query parameter
    useEffect(() => {
        if (tab) {
            const foundTab = TabName.find((t) => t.value === tab);
            if (foundTab) {
                setActiveTab(foundTab.value);
            }
        } else {
            // If no 'tab' in the URL, set default to 'one-way' and update the URL
            setActiveTab('one-way');
            router.replace(`/search-engine?tab=one-way`);
        }
    }, [tab, router]);

    const handleTabChange = (newTab: string) => {
        setActiveTab(newTab);
        // Update the URL without reloading the page
        router.push(`/search-engine?tab=${newTab}`);
    };

    return (
        <header className="rounded-sm p-2">
            <div className="mx-auto flex h-auto max-w-screen-xl items-center gap-8">
                <nav aria-label="Global" className="flex flex-1 items-start justify-start md:justify-between">
                    <ul className="flex flex-row items-start gap-6 text-sm ml-5 rounded-md">
                        {TabName.map((tab) => (
                            <li key={nanoid()} className="relative">
                                <button
                                    onClick={() => handleTabChange(tab.value)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-t-md border-b-2 transition hover:text-slate-400 font-medium text-md ${activeTab === tab.value ? 'border-blue-600 text-black' : 'border-transparent text-gray-500'}`}
                                >
                                    {/* Render Icons */}
                                    {tab.value === 'one-way' && <FaPlaneDeparture className="text-blue-600 lg:hidden" size={24} />}
                                    {tab.value === 'round-trip' && <FaPlaneArrival className="text-green-600 lg:hidden" size={24} />}
                                    {tab.value === 'multi-city' && <FaGlobe className="text-orange-600 lg:hidden" size={24} />}
                                    {tab.value === 'umrah' && <FaPray className="text-purple-600 lg:hidden" size={24} />}

                                    {/* Display tab name */}
                                    <span className="hidden md:inline">{tab.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
