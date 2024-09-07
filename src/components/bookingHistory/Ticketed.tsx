'use client'
// import SearchInTable from "@/components/common/table/SearchInTable";
import TableBody from "@/components/common/table/TableBody";
import TableContainer from "@/components/common/table/TableContainer";
import TableHeader from "@/components/common/table/TableHeader";
import TableWrap from "@/components/common/table/TableWrap";
import { ticketedFields } from "@/types/common/fields";
import { TicketedData } from "@/types/common/mockData";
import { useState } from "react";
import { TicketedInterface } from "../../types/common/interfaces";


const Ticketed = () => {
    const [sortField, setSortField] = useState<keyof TicketedInterface>('booking_date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof TicketedInterface>('route');

    const handleFieldChange = (item: string) => {
        setSearchField(item as keyof TicketedInterface);
    };
    const handleSort = (field: keyof TicketedInterface) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };

    const filteredData = TicketedData
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

        <TableWrap>
            {/* <SearchInTable
                search={searchQuery}
                field={searchField}
                onSearch={setSearchQuery}
                onFieldChange={handleFieldChange}
                fieldLists={ticketedFields.map((element) => element.label)}
            /> */}
            <TableContainer>
                <TableHeader
                    items={ticketedFields.map((element) => element.label)}
                />
                <TableBody
                    items={filteredData}
                />
            </TableContainer>
        </TableWrap>
    );
};

export default Ticketed;
