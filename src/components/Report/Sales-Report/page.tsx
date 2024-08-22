'use client';
import { useState } from "react";
import { FaSort, FaSearch } from "react-icons/fa";

// Fields interface for the data structure
interface Fields {
    date_time: string;
    booking_id: string;
    pnr: string;
    ticket_number: string;
    passenger_name: string;
    passenger_type: string;
    base_fare: string;
    tax: string;
    commission: string;
    ait: string;
    total_price: string;
}

// Mock data array
const mockData: Fields[] = [
    {
        date_time: "22-Aug-2024 03:08",
        booking_id: "TCL638599142399375102",
        pnr: "NTBYUV",
        ticket_number: "NTBYUV",
        passenger_name: "Mr MD ASHFAK ALAM",
        passenger_type: "Adult",
        base_fare: "27,786.97",
        tax: "14,041",
        commission: "0",
        ait: "0",
        total_price: "41,827.97",
    },
    {
        date_time: "22-Aug-2024 03:08",
        booking_id: "TCL638599142399375102",
        pnr: "NTBYUV",
        ticket_number: "NTBYUV",
        passenger_name: "Mr MD ASHFAK ALAM",
        passenger_type: "Adult",
        base_fare: "27,786.97",
        tax: "14,041",
        commission: "0",
        ait: "0",
        total_price: "41,827.97",
    },
];

const SalesReport = () => {
    const [sortField, setSortField] = useState<keyof Fields>('date_time');
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
        { label: 'Date Time', key: 'date_time' },
        { label: 'Booking ID', key: 'booking_id' },
        { label: 'PNR', key: 'pnr' },
        { label: 'Ticket Number', key: 'ticket_number' },
        { label: 'Passenger Name', key: 'passenger_name' },
        { label: 'Passenger Type', key: 'passenger_type' },
        { label: 'Base Fare', key: 'base_fare' },
        { label: 'Tax', key: 'tax' },
        { label: 'Commission', key: 'commission' },
        { label: 'AIT', key: 'ait' },
        { label: 'Total Price', key: 'total_price' },
    ];

    return (
        <div className="flex w-full items-center justify-center rounded-md">
            <div className="w-full max-w-8xl">
                <div className="bg-gray-100 p-2 rounded-sm shadow-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
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
                                className="p-2 bg-teal-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm"
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
                                                className="py-3 px-4 bg-teal-700 border border-gray-300 cursor-pointer text-sm text-center text-white hover:bg-teal-600 transition"
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
                                        <tr key={item.booking_id} className="hover:bg-gray-200 transition">
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.date_time}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.booking_id}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.pnr}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.ticket_number}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.passenger_name}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.passenger_type}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.base_fare}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.tax}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.commission}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.ait}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.total_price}</td>
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

export default SalesReport;
