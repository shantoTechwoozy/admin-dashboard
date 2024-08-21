'use client'
import { useState } from "react";
import { FaSort, FaSearch } from "react-icons/fa";

// Fields interface for the data structure
interface Fields {
    id: number;
    hotel: string;
    city: string;
    country: string;
    voucher_code: number;
    total_price: number;
    cancel_policy: string;
    booking_status: string;
    payment_status: string;
    agent_confirmation_status: string;
    check_in: string;
    check_out: string;
    last_cancel_date: Date;
}

// Mock data array
const mockData: Fields[] = [
    {
        id: 1,
        hotel: "Hotel California",
        city: "Los Angeles",
        country: "USA",
        voucher_code: 123456,
        total_price: 300,
        cancel_policy: "24 hours before check-in",
        booking_status: "Confirmed",
        payment_status: "Paid",
        agent_confirmation_status: "Confirmed",
        check_in: "2024-08-01",
        check_out: "2024-08-05",
        last_cancel_date: new Date("2024-07-30"),
    },
    {
        id: 2,
        hotel: "The Grand Hotel",
        city: "New York",
        country: "USA",
        voucher_code: 789012,
        total_price: 450,
        cancel_policy: "48 hours before check-in",
        booking_status: "Pending",
        payment_status: "Pending",
        agent_confirmation_status: "Pending",
        check_in: "2024-09-10",
        check_out: "2024-09-15",
        last_cancel_date: new Date("2024-09-08"),
    },
    // Add more mock data as needed
];

const TableCustom = () => {
    const [sortField, setSortField] = useState<keyof Fields>('id');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof Fields>('country');

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
        { label: 'ID', key: 'id' },
        { label: 'Hotel', key: 'hotel' },
        { label: 'City', key: 'city' },
        { label: 'Country', key: 'country' },
        { label: 'Voucher Code', key: 'voucher_code' },
        { label: 'Total Price', key: 'total_price' },
        { label: 'Cancel Policy', key: 'cancel_policy' },
        { label: 'Booking Status', key: 'booking_status' },
        { label: 'Payment Status', key: 'payment_status' },
        { label: 'Agent Confirmation Status', key: 'agent_confirmation_status' },
        { label: 'Check-In', key: 'check_in' },
        { label: 'Check-Out', key: 'check_out' },
        { label: 'Last Cancel Date', key: 'last_cancel_date' },
    ];

    return (
        <div className="p-4">
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
                    className="p-2 border border-gray-300 rounded-md shadow-md text-sm flex-grow"
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
                    Search By
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
                    <thead>
                        <tr>
                            {fields.map((field) => (
                                <th
                                    key={field.key}
                                    className="py-3 px-4 bg-gray-200 border-b border-gray-300 cursor-pointer text-sm text-center hover:bg-gray-300 transition"
                                    onClick={() => handleSort(field.key)}
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        {field.label}
                                        <FaSort className="text-xs" />
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-100 transition">
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">{item.id}</td>
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">{item.hotel}</td>
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">{item.city}</td>
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">{item.country}</td>
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">{item.voucher_code}</td>
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">{item.total_price}</td>
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">{item.cancel_policy}</td>
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">{item.booking_status}</td>
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">{item.payment_status}</td>
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">{item.agent_confirmation_status}</td>
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">{item.check_in}</td>
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">{item.check_out}</td>
                                <td className="py-2 px-4 border-b border-gray-300 text-sm text-center">
                                    {item.last_cancel_date.toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableCustom;
