'use client'
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PageTitle from "./PageTitle";

interface Fields {
    bank_name: string;
    accName: string;
    accNumber: string;
    branch: string;
    routeNo: string;
    swiftCode: string;
}

// Mock data array
const mockData: Fields[] = [
    {
        bank_name: "Global Bank",
        accName: "John Doe",
        accNumber: "1234567890",
        branch: "Downtown",
        routeNo: "001122",
        swiftCode: "GLBKUS33",
    },
    {
        bank_name: "City National Bank",
        accName: "Jane Smith",
        accNumber: "0987654321",
        branch: "Uptown",
        routeNo: "110022",
        swiftCode: "CNBKUS44",
    },
    {
        bank_name: "Universal Bank",
        accName: "Alice Johnson",
        accNumber: "1122334455",
        branch: "Midtown",
        routeNo: "223344",
        swiftCode: "UNBKUS55",
    },
    {
        bank_name: "Pioneer Bank",
        accName: "Bob Brown",
        accNumber: "6677889900",
        branch: "Westside",
        routeNo: "334455",
        swiftCode: "PIBKUS66",
    },
    {
        bank_name: "First Financial Bank",
        accName: "Carol Davis",
        accNumber: "5566778899",
        branch: "Eastside",
        routeNo: "445566",
        swiftCode: "FFBKUS77",
    },
];

const TechwoozyBankAccounts = () => {
    const [sortField, setSortField] = useState<keyof Fields>('bank_name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof Fields>('accNumber');

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
        { label: 'Bank Name', key: 'bank_name' },
        { label: 'Account Name', key: 'accName' },
        { label: 'Account Number', key: 'accNumber' },
        { label: 'Branch', key: 'branch' },
        { label: 'Routing Number', key: 'routeNo' },
        { label: 'Swift Code', key: 'swiftCode' },
    ];

    return (
        <>
            <PageTitle content="Techwoozy Bank Accounts" />
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
                                                    className="py-5 px-3 bg-black border border-gray-300 cursor-pointer text-sm text-center hover:bg-gray-300 transition"
                                                    onClick={() => handleSort(field.key)}
                                                >
                                                    <div className="flex items-center text-white rounded-sm justify-center gap-2 whitespace-nowrap">
                                                        {field.label}
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredData.map((item, index) => (
                                            <tr key={index} className="hover:bg-gray-100 transition">
                                                <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">
                                                    {item.bank_name}
                                                </td>
                                                <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">
                                                    {item.accName}
                                                </td>
                                                <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">
                                                    {item.accNumber}
                                                </td>
                                                <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">
                                                    {item.branch}
                                                </td>
                                                <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">
                                                    {item.routeNo}
                                                </td>
                                                <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">
                                                    {item.swiftCode}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TechwoozyBankAccounts;
