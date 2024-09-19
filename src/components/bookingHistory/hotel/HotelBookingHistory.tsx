'use client'
// import SearchInTable from "@/components/common/table/SearchInTable";
import TableBody from "@/components/common/table/TableBody";
import TableContainer from "@/components/common/table/TableContainer";
import TableHeader from "@/components/common/table/TableHeader";
import TableWrap from "@/components/common/table/TableWrap";
import { hotelHistoryFields } from "@/types/common/fields";
import { hotelHistoryData } from "@/types/common/mockData";
import { useState } from "react";
import { HotelHistoryInterface } from "@/types/common/interfaces";
import PageTitle from "@/components/paymentRequests/PageTitle";


const HotelBookingHistory = () => {
    const [sortField, setSortField] = useState<keyof HotelHistoryInterface>('booked_by');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof HotelHistoryInterface>('booking_id');

    const handleFieldChange = (item: string) => {
        setSearchField(item as keyof HotelHistoryInterface);
    };
    const handleSort = (field: keyof HotelHistoryInterface) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };

    const filteredData = hotelHistoryData
        .filter((item) =>
            item[searchField].toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
            if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

    // Field labels and their corresponding keys


    return (
        <>
            <PageTitle content="Hotel Booking" />
            <TableWrap>
                {/* <SearchInTable
                search={searchQuery}
                field={searchField}
                onSearch={setSearchQuery}
                onFieldChange={handleFieldChange}
                fieldLists={hotelHistoryFields.map((element) => element.label)}
            /> */}
                <TableContainer>
                    <TableHeader
                        items={hotelHistoryFields.map((element) => element.label)}
                    />
                    <TableBody
                        items={filteredData}
                    />
                </TableContainer>
            </TableWrap>
        </>
    );
};

export default HotelBookingHistory;

