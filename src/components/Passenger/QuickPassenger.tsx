'use client';
import { QuickPassengerFields } from "@/types/common/fields";
import { QuickPassengerInterface } from "@/types/common/interfaces";
import { QuickPassengerData } from "@/types/common/mockData";
import { useState } from "react";
// import SearchInTable from "../common/table/SearchInTable";
import TableBody from "../common/table/TableBody";
import TableContainer from "../common/table/TableContainer";
import TableHeader from "../common/table/TableHeader";
import TableWrap from "../common/table/TableWrap";


const QuickPassenger = () => {
    const [sortField, setSortField] = useState<keyof QuickPassengerInterface>('name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof QuickPassengerInterface>('name');

    const handleSort = (field: keyof QuickPassengerInterface) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };
    const handleFieldChange = (item: string) => {
        setSearchField(item as keyof QuickPassengerInterface);
    };


    const filteredData = QuickPassengerData
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
                fieldLists={QuickPassengerFields.map((element) => element.label)}
            /> */}
            <TableContainer>
                <TableHeader
                    items={QuickPassengerFields.map((element) => element.label)}
                />
                <TableBody
                    items={filteredData}
                />
            </TableContainer>
        </TableWrap>
    );
};

export default QuickPassenger;
