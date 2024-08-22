'use client'
import { useState } from "react";
import { FaSort, FaSearch } from "react-icons/fa";

// Fields interface for the data structure
interface Fields {
    agent_name: string;
    agent_code: string;
    booking_id: string;
    pnr: string;
    booking_date: string;
    airline: string;
    total_price: string;
    percentage: string;
    paid_amount: string;
}

// Mock data array
const mockData: Fields[] = [
    {
        agent_name: "Trip Beyond",
        agent_code: "TB01845",
        booking_id: "TBL638590615149746617",
        pnr: "GVVZON",
        booking_date: "12-08-2024",
        airline: "TK",
        total_price: "294,408.97",
        percentage: "25%",
        paid_amount: "73,602",
    },
    {
        agent_name: "Trip Beyond",
        agent_code: "TB01845",
        booking_id: "TBL638590615149746618",
        pnr: "GVVZON",
        booking_date: "13-08-2024",
        airline: "TK",
        total_price: "150,000.00",
        percentage: "50%",
        paid_amount: "75,000",
    },
];

const PaidList = () => {
    const [sortField, setSortField] = useState<keyof Fields>('booking_date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof Fields>('booking_id');

    const handleSort = (field: keyof Fields) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };

    const filteredData = mockData
        .filter((item) =>
            item[searchField].toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
            if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

    // Field labels and their corresponding keys
    const fields: { label: string; key: keyof Fields }[] = [
        { label: 'Agent Name', key: 'agent_name' },
        { label: 'Agent Code', key: 'agent_code' },
        { label: 'Booking ID', key: 'booking_id' },
        { label: 'PNR', key: 'pnr' },
        { label: 'Booking Date', key: 'booking_date' },
        { label: 'Airline', key: 'airline' },
        { label: 'Total Price', key: 'total_price' },
        { label: 'Percentage', key: 'percentage' },
        { label: 'Paid Amount', key: 'paid_amount' },
    ];

    return (
        <div className="flex w-full items-center justify-center rounded-md">
            <div className="w-full max-w-8xl">
                <div className="bg-white p-2 rounded-sm shadow-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                    <div className="p-2">
                        <div className="mb-4 flex flex-wrap justify-end gap-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="p-2 border border-gray-300 rounded-md shadow-md text-sm w-full md:w-auto flex-wrap"
                            />
                            <select
                                value={searchField}
                                onChange={(e) => setSearchField(e.target.value as keyof Fields)}
                                className="p-2 border border-gray-300 rounded-md shadow-md text-sm w-auto"
                            >
                                {fields.map((field) => (
                                    <option key={field.key} value={field.key}>
                                        {field.label}
                                    </option>
                                ))}
                            </select>
                            <button
                                className="p-2 bg-blue-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm"
                                onClick={() => console.log('Search triggered')}
                            >
                                <FaSearch />
                                Search
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
                                <thead>
                                    <tr>
                                        {fields.map((field) => (
                                            <th
                                                key={field.key}
                                                className="py-3 px-4 bg-slate-700 border border-gray-300 cursor-pointer text-sm text-center text-white hover:bg-blue-600 transition"
                                                onClick={() => handleSort(field.key)}
                                            >
                                                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                                                    {field.label}
                                                    {/* <FaSort className={`text-xs ${sortField === field.key ? (sortOrder === 'asc' ? 'rotate-180' : '') : ''}`} /> */}
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((item) => (
                                        <tr key={item.booking_id} className="hover:bg-gray-100 transition">
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.agent_name}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.agent_code}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.booking_id}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.pnr}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.booking_date}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.airline}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.total_price}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.percentage}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.paid_amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex justify-end p-2">
                        <button className="p-2 bg-blue-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-blue-700 transition-colors">
                            <span>Export</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaidList;
