'use client'
// import SearchInTable from "@/components/common/table/SearchInTable";
import TableBody from "@/components/common/table/TableBody";
import TableContainer from "@/components/common/table/TableContainer";
import TableHeader from "@/components/common/table/TableHeader";
import TableWrap from "@/components/common/table/TableWrap";
import { BookingCancelFields } from "@/types/common/fields";
import { BookingCancelInterface } from "@/types/common/interfaces";
import { BookingCancelData } from "@/types/common/mockData";
import { useState } from "react";


const BookingCancelled = () => {
    const [sortField, setSortField] = useState<keyof BookingCancelInterface>('booking_date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof BookingCancelInterface>('route');

    const handleSort = (field: keyof BookingCancelInterface) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };
    const handleFieldChange = (item: string) => {
        setSearchField(item as keyof BookingCancelInterface);
    };
    const filteredData = BookingCancelData
        .filter((item) =>
            item[searchField].toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
            if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });


    return (
        <TableWrap>
            {/* <SearchInTable
                search={searchQuery}
                field={searchField}
                onSearch={setSearchQuery}
                onFieldChange={handleFieldChange}
                fieldLists={BookingCancelFields.map((element) => element.label)}
            /> */}
            <TableContainer>
                <TableHeader
                    items={BookingCancelFields.map((element) => element.label)}
                />
                <TableBody
                    items={filteredData}
                />
            </TableContainer>
        </TableWrap>
    );
};

export default BookingCancelled;
