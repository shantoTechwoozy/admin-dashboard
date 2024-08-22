'use client';
import { useState } from "react";
import { FaSort, FaSearch } from "react-icons/fa";

// Fields interface for the data structure
interface Fields {
    date: string;
    invoice_number: string;
    booking_id: string;
    pnr: string;
    ticket_number: string;
    description: string;
    type: string;
    debit: string;
    credit: string;
    running_balance: string;
}

// Mock data array
const mockData: Fields[] = [
    {
        date: "17-Aug-2024 12:23:18",
        invoice_number: "IN0184524081700001",
        booking_id: "TBL638594721242591538",
        pnr: "KPTCPE",
        ticket_number: "7792409146168",
        description: "Agent booking by imp...",
        type: "Invoice",
        debit: "75,442",
        credit: "0",
        running_balance: "12,737.38",
    },
    {
        date: "17-Aug-2024 12:23:18",
        invoice_number: "IN0184524081700001",
        booking_id: "TBL638594721242591538",
        pnr: "KPTCPE",
        ticket_number: "7792409146168",
        description: "Agent booking by imp...",
        type: "Invoice",
        debit: "75,442",
        credit: "0",
        running_balance: "12,737.38",
    },
];

const AccountLedger = () => {
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
        // Trigger the search logic based on the date range and search query
        console.log('Search triggered');
    };

    const filteredData = mockData
        .filter((item) => {
            const itemDate = new Date(item.date);
            const start = new Date(startDate);
            const end = new Date(endDate);

            return (
                (!startDate || itemDate >= start) &&
                (!endDate || itemDate <= end) &&
                (searchQuery === '' || item.description.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        });

    // Field labels and their corresponding keys
    const fields: { label: string; key: keyof Fields }[] = [
        { label: 'Date', key: 'date' },
        { label: 'Invoice Number', key: 'invoice_number' },
        { label: 'Booking ID', key: 'booking_id' },
        { label: 'PNR', key: 'pnr' },
        { label: 'Ticket Number', key: 'ticket_number' },
        { label: 'Description', key: 'description' },
        { label: 'Type', key: 'type' },
        { label: 'Debit', key: 'debit' },
        { label: 'Credit', key: 'credit' },
        { label: 'Running Balance', key: 'running_balance' },
    ];

    return (
        <div className="flex w-full items-center justify-center rounded-md">
            <div className="w-full max-w-8xl">
                <div className="bg-gray-100 p-2 rounded-sm shadow-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                    <div className="p-2">
                        <div className="mb-4 flex flex-wrap justify-end gap-2">
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="p-2 border border-gray-300 rounded-md shadow-md text-sm w-full md:w-auto"
                            />
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="p-2 border border-gray-300 rounded-md shadow-md text-sm w-full md:w-auto"
                            />
                            <button
                                className="p-2 bg-teal-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm"
                                onClick={handleSearch}
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
                                            >
                                                <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                                                    {field.label}
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map((item) => (
                                        <tr key={item.invoice_number} className="hover:bg-gray-200 transition">
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.date}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.invoice_number}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.booking_id}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.pnr}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.ticket_number}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.description}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.type}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.debit}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.credit}</td>
                                            <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.running_balance}</td>
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

export default AccountLedger;
