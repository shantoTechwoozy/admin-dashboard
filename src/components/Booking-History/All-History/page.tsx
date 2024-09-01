'use client'
import SearchInTable from "@/components/common/table/SearchInTable";
import TableBody from "@/components/common/table/TableBody";
import TableContainer from "@/components/common/table/TableContainer";
import TableHeader from "@/components/common/table/TableHeader";
import TableWrap from "@/components/common/table/TableWrap";
import { useState } from "react";


// Fields interface for the data structure
interface Fields {
    issue_date: string;
    booking_date: string;
    booking_id: string;
    passenger_name: string;
    flight_date: string;
    route: string;
    pnr: string;
    ticket_number: string;
    total_price: string;
    status: string;
    action: string;
}

// Mock data array
const mockData: Fields[] = [
    {
        issue_date: "21-08-2024 08:18",
        booking_date: "21-08-2024 08:18",
        booking_id: "TB638598033713836999",
        passenger_name: "John Doe",
        flight_date: "27-08-2024 10:15",
        route: "DAC-DOH",
        pnr: "MZWE3B",
        ticket_number: "7792409146168",
        total_price: "58,648.7",
        status: "On Hold",
        action: "VT IN RS",
    },
    {
        issue_date: "21-08-2024 08:18",
        booking_date: "20-08-2024 11:50",
        booking_id: "TB638597297731693819",
        passenger_name: "Jane Smith",
        flight_date: "2024-09-10",
        route: "SPD-DAC",
        pnr: "008MLQ",
        ticket_number: "7792409146166",
        total_price: "4,653.01",
        status: "On Hold",
        action: "VT IN RS",
    },
];

const AllHistory = () => {
    const [sortField, setSortField] = useState<keyof Fields>('booking_date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof Fields>('route');
    
    
    const handleFieldChange = (item: string) => {
        setSearchField(item as keyof Fields);
    };
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
        { label: 'Issue Date', key: 'issue_date' },
        { label: 'Booking Date', key: 'booking_date' },
        { label: 'Booking ID', key: 'booking_id' },
        { label: 'Passenger Name', key: 'passenger_name' },
        { label: 'Flight Date', key: 'flight_date' },
        { label: 'Route', key: 'route' },
        { label: 'PNR', key: 'pnr' },
        { label: 'Ticket Number', key: 'ticket_number' },
        { label: 'Total Price', key: 'total_price' },
        { label: 'Status', key: 'status' },
        { label: 'Action', key: 'action' },
    ];

    return (
        <>
            <TableWrap>
                <SearchInTable
                    search={searchQuery}
                    field={searchField}
                    onSearch={setSearchQuery}
                    onFieldChange={handleFieldChange}
                    fieldLists={fields.map((element) => element.label)}
                />
                <TableContainer>
                    <TableHeader
                        items={fields.map((element) => element.label)}
                    />
                    <TableBody
                        items={filteredData}
                    />
                </TableContainer>
            </TableWrap>
        </>
    );
};

export default AllHistory;
