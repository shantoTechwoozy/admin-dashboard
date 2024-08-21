'use client'
import { useState } from "react";
import { FaSort, FaSearch } from "react-icons/fa";

// Fields interface for the data structure
interface Fields {
    booking_date: string;
    booking_id: string;
    passenger_name: string;
    flight_date: string;
    route: string;
    pnr: string;
    issue_before: string;
    total_price: string;
    status: string;
    action: string;
}

// Mock data array
const mockData: Fields[] = [
    {
        booking_date: "21-08-2024 08:18",
        booking_id: "TB638598033713836999",
        passenger_name: "John Doe",
        flight_date: "27-08-2024 10:15",
        route: "DAC-DOH",
        pnr: "MZWE3B",
        issue_before: "Time Limit",
        total_price: "58,648.7",
        status: "On Hold",
        action: "VB RS",
    },
    {
        booking_date: "20-08-2024 11:50",
        booking_id: "TB638597297731693819",
        passenger_name: "Jane Smith",
        flight_date: "2024-09-10",
        route: "SPD-DAC",
        pnr: "008MLQ",
        issue_before: "Time Limit",
        total_price: "4,653.01",
        status: "On Hold",
        action: "VB RS",
    },

];

const TableCustom = () => {
    const [sortField, setSortField] = useState<keyof Fields>('booking_date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof Fields>('route');

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
        { label: 'Booking Date', key: 'booking_date' },
        { label: 'Booking ID', key: 'booking_id' },
        { label: 'Passenger Name', key: 'passenger_name' },
        { label: 'Flight Date', key: 'flight_date' },
        { label: 'Route', key: 'route' },
        { label: 'PNR', key: 'pnr' },
        { label: 'Issue Before', key: 'issue_before' },
        { label: 'Total Price', key: 'total_price' },
        { label: 'Status', key: 'status' },
        { label: 'Action', key: 'action' },
    ];

    return (
        <div className="flex w-full items-center justify-center">
            <div className="w-full max-w-8xl">

                <div className="bg-white p-2 rounded-sm shadow-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                    <div className="p-2">
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="p-2 border border-gray-300 rounded-md shadow-md text-sm w-full md:w-auto flex-grow"
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
                                                className="py-5 px-3 bg-slate-300 bg-gray-200 border-2 border-gray-300 cursor-pointer text-sm text-center hover:bg-gray-300 transition"
                                                onClick={() => handleSort(field.key)}
                                            >
                                                <div className="flex items-center lg:bg-white rounded-sm justify-center gap-2">
                                                    {field.label}
                                                    {/* <FaSort className="text-xs" /> */}
                                                </div>
                                            </th>
                                        ))}

                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((item) => (
                                        <tr key={item.booking_id} className="hover:bg-gray-100 transition">
                                            <td className="py-2 px-4 border-2 border-gray-300 text-sm text-center">{item.booking_date}</td>
                                            <td className="py-2 px-4 border-2 border-gray-300 text-sm text-center">
                                                <p className="text-red font-bold">{item.booking_id}</p>
                                            </td>
                                            <td className="py-2 px-4 border-2 border-gray-300 text-sm text-center">{item.passenger_name}</td>
                                            <td className="py-2 px-4 border-2 border-gray-300 text-sm text-center">{item.flight_date}</td>
                                            <td className="py-2 px-4 border-2 border-gray-300 text-sm text-center">{item.route}</td>
                                            <td className="py-2 px-4 border-2 border-gray-300 text-sm text-center">{item.pnr}</td>
                                            <td className="py-2 px-4 border-2 border-gray-300 text-sm text-center">
                                                <button className="lg:rounded-full lg:p-2 bg-blue-700 text-white font-bold"> {item.issue_before}</button>
                                            </td>
                                            <td className="py-2 px-4 border-2 border-gray-300 text-sm text-center">
                                                <p className="font-bold text-black"> {item.total_price}</p>
                                            </td>
                                            <td className="py-2 px-4 border-2 border-gray-300 text-sm text-center">{item.status}</td>
                                            <td className="py-2 px-4 border-2 border-gray-300 text-sm text-center">{item.action}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableCustom;
