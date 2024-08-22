'use client';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

// Fields interface for the data structure
interface Fields {
    sl: number;
    pnr: string;
    amount: string;
    reference: string;
    create_date: string;
    adjustment_date: string;
    status: string;
}

// Mock data array
const mockData: Fields[] = [
    {
        sl: 1,
        pnr: "070QQW",
        amount: "BDT 12,104",
        reference: "TCL638597344619766157",
        create_date: "22-08-2024",
        adjustment_date: "22-08-2024",
        status: "Adjusted",
    },
    // Add more mock data here
];

const RefundStatus = () => {
    const [pnrFilter, setPnrFilter] = useState<string>('All');
    const [statusFilter, setStatusFilter] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        // Trigger the search logic based on the filters
        console.log('Search triggered');
    };

    const filteredData = mockData
        .filter((item) => {
            return (
                (pnrFilter === 'All' || item.pnr === pnrFilter) &&
                (statusFilter === 'All' || item.status === statusFilter) &&
                (searchQuery === '' || item.reference.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        });

    // Unique values for PNR and Status filtering
    const uniquePnrs = Array.from(new Set(mockData.map(item => item.pnr)));
    const uniqueStatuses = Array.from(new Set(mockData.map(item => item.status)));

    return (
        <div className="flex w-full items-center justify-center rounded-md">
            <div className="w-full max-w-8xl">
                <div className="bg-gray-100 p-2 rounded-sm shadow-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                    <div className="p-2">
                
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
                                <thead>
                                    <tr>
                                        <th className="py-3 px-4 bg-teal-700 border border-gray-300 text-sm text-center text-white">SL</th>
                                        <th className="py-3 px-4 bg-teal-700 border border-gray-300 text-sm text-center text-white">PNR</th>
                                        <th className="py-3 px-4 bg-teal-700 border border-gray-300 text-sm text-center text-white">Amount</th>
                                        <th className="py-3 px-4 bg-teal-700 border border-gray-300 text-sm text-center text-white">Reference</th>
                                        <th className="py-3 px-4 bg-teal-700 border border-gray-300 text-sm text-center text-white">Create Date</th>
                                        <th className="py-3 px-4 bg-teal-700 border border-gray-300 text-sm text-center text-white">Adjustment Date</th>
                                        <th className="py-3 px-4 bg-teal-700 border border-gray-300 text-sm text-center text-white">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((item) => (
                                        <tr key={item.reference} className="hover:bg-gray-200 transition">
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black">{item.sl}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black">{item.pnr}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black">{item.amount}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black">{item.reference}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black">{item.create_date}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black">{item.adjustment_date}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black">{item.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex justify-end p-2">
                        <button className="p-2 bg-teal-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-teal-700 transition-colors">
                            <span>Export</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundStatus;
