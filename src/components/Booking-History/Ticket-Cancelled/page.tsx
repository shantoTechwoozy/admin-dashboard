'use client'
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TicketCancelFields } from "../interfaces";
import { TicketCancelData } from "../mockData";
import TableWrap from "@/components/common/table/TableWrap";
import SearchInTable from "@/components/common/table/SearchInTable";
import TableContainer from "@/components/common/table/TableContainer";
import TableHeader from "@/components/common/table/TableHeader";
import TableBody from "@/components/common/table/TableBody";


const TicketCancelled = () => {
    const [sortField, setSortField] = useState<keyof TicketCancelFields>('booking_date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof TicketCancelFields>('route');


    const handleFieldChange = (item: string) => {
        setSearchField(item as keyof TicketCancelFields);
    };
    const handleSort = (field: keyof TicketCancelFields) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };

    const filteredData = TicketCancelData
        .filter((item) =>
            item[searchField].toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
            if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

    // Field labels and their corresponding keys
    const fields: { label: string; key: keyof TicketCancelFields }[] = [
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

export default TicketCancelled;
