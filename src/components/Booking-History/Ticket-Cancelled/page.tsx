'use client'
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TicketCancelInterface } from "../../../types/common/interfaces";

import TableWrap from "@/components/common/table/TableWrap";
import SearchInTable from "@/components/common/table/SearchInTable";
import TableContainer from "@/components/common/table/TableContainer";
import TableHeader from "@/components/common/table/TableHeader";
import TableBody from "@/components/common/table/TableBody";
import { TicketCancelData } from "@/types/common/mockData";
import { ticketCancelFields } from "@/types/common/fields";


const TicketCancelled = () => {
    const [sortField, setSortField] = useState<keyof TicketCancelInterface>('booking_date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof TicketCancelInterface>('route');


    const handleFieldChange = (item: string) => {
        setSearchField(item as keyof TicketCancelInterface);
    };
    const handleSort = (field: keyof TicketCancelInterface) => {
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


    return (
        <>
            <TableWrap>
                <SearchInTable
                    search={searchQuery}
                    field={searchField}
                    onSearch={setSearchQuery}
                    onFieldChange={handleFieldChange}
                    fieldLists={ticketCancelFields.map((element) => element.label)}
                />
                <TableContainer>
                    <TableHeader
                        items={ticketCancelFields.map((element) => element.label)}
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
