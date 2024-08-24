'use client'
import React, { useState } from "react";
import { FaSort, FaSearch } from "react-icons/fa";

// Fields interface for the data structure
interface Fields {
    [key: string]: string; // Flexible key to handle different data structures
}

interface TableProps {
    type: 'opened' | 'ongoing' | 'closed';
}

const Table: React.FC<TableProps> = ({ type }) => {
    const [sortField, setSortField] = useState<string>('date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<string>('message');

    // Mock data for different types
    const data: { [key: string]: Fields[] } = {
        opened: [
            { "sl": "1", "date": "21-08-2024 08:18", "booking_id": "TB638598033713836999", "message": "Issue with booking", "support_type": "Ticket", "pnr": "PNR12345", "ticket_number": "TCKT98765", "action": "View" },
            { "sl": "2", "date": "22-08-2024 09:30", "booking_id": "TB638598033713837000", "message": "Need assistance", "support_type": "Request", "pnr": "PNR12346", "ticket_number": "TCKT98766", "action": "View" }
        ],
        ongoing: [
            { "sl": "1", "date": "27-03-2024 15:36", "booking_id": "TCL638471159694473183", "message": "Dear Concern... Greetings from Trip Beyond!!! Ple...", "support_type": "Issue", "pnr": "PNR54321", "ticket_number": "TCKT56789", "action": "Update" },
            { "sl": "2", "date": "28-03-2024 12:10", "booking_id": "TCL638471159694473184", "message": "Waiting for confirmation", "support_type": "Follow-up", "pnr": "PNR54322", "ticket_number": "TCKT56790", "action": "Update" }
        ],
        closed: [
            { "sl": "1", "date": "08-07-2024 10:21", "booking_id": "TCL638558679553839420", "message": "Please mail at reservation@travelchamp.com", "support_type": "Resolved", "pnr": "PNR67890", "ticket_number": "TCKT12345", "action": "View" },
            { "sl": "2", "date": "09-07-2024 11:00", "booking_id": "TCL638558679553839421", "message": "Issue resolved successfully", "support_type": "Closed", "pnr": "PNR67891", "ticket_number": "TCKT12346", "action": "View" }
        ],
    };

    const getFields = () => {
        switch (type) {
            case 'opened':
                return [
                    { label: 'SL', key: 'sl' },
                    { label: 'Support Type', key: 'support_type' },
                    { label: 'Message', key: 'message' },
                    { label: 'Date', key: 'date' },
                    { label: 'Booking ID', key: 'booking_id' },
                    { label: 'PNR', key: 'pnr' },
                    { label: 'Ticket Number', key: 'ticket_number' },
                    { label: 'Action', key: 'action' }
                ];
            case 'ongoing':
                return [
                    { label: 'SL', key: 'sl' },
                    { label: 'Support Type', key: 'support_type' },
                    { label: 'Message', key: 'message' },
                    { label: 'Date', key: 'date' },
                    { label: 'Booking ID', key: 'booking_id' },
                    { label: 'PNR', key: 'pnr' },
                    { label: 'Ticket Number', key: 'ticket_number' }
                ];
            case 'closed':
                return [
                    { label: 'SL', key: 'sl' },
                    { label: 'Support Type', key: 'support_type' },
                    { label: 'Message', key: 'message' },
                    { label: 'Date', key: 'date' },
                    { label: 'Booking ID', key: 'booking_id' },
                    { label: 'PNR', key: 'pnr' },
                    { label: 'Ticket Number', key: 'ticket_number' },
                    { label: 'Action', key: 'action' }
                ];
            default:
                return [];
        }
    };

    const fields = getFields();

    const handleSort = (field: string) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };

    const filteredData = data[type]
        .filter((item) => item[searchField]?.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
            if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
            if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

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
                                className="p-2 border border-gray-300 rounded-md shadow-md text-sm w-full md:w-auto"
                            />
                            <select
                                value={searchField}
                                onChange={(e) => setSearchField(e.target.value)}
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
                                                className="py-5 px-3 bg-black border border-gray-300 cursor-pointer text-sm text-center hover:bg-gray-300 transition"
                                                onClick={() => handleSort(field.key)}
                                            >
                                                <div className="flex items-center text-white rounded-sm justify-center gap-2 whitespace-nowrap">
                                                    {field.label}
                                                    <FaSort className="text-xs" />
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item, index) => (
                                            <tr key={index} className="hover:bg-gray-100 transition">
                                                {fields.map((field) => (
                                                    <td key={field.key} className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">
                                                        {item[field.key] || '-'}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={fields.length} className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">
                                                No data available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
