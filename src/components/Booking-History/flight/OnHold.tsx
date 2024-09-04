'use client'
import SearchInTable from "@/components/common/table/SearchInTable";
import TableBody from "@/components/common/table/TableBody";
import TableContainer from "@/components/common/table/TableContainer";
import TableHeader from "@/components/common/table/TableHeader";
import TableWrap from "@/components/common/table/TableWrap";
import { useState } from "react";
import { OnHoldData } from "../mockData";
import { OnHoldFields } from "../interfaces";


const fields: { label: string; key: keyof OnHoldFields }[] = [
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
const OnHold = () => {
    const [sortField, setSortField] = useState<keyof OnHoldFields>('booking_date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof OnHoldFields>('route');

    //Table Data Sorting function
    const handleSort = (field: keyof OnHoldFields) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };
    const handleFieldChange = (item: string) => {
        setSearchField(item as keyof OnHoldFields);
    };
    const filteredData = OnHoldData
        .filter((item) =>
            item[searchField].toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
            if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

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
                        items={fields.map((field) => field.label)}
                    />
                    <TableBody items={filteredData} />
                </TableContainer>
            </TableWrap>

        </>
    );
};

export default OnHold;
