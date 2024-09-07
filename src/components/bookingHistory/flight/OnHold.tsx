'use client'
// import SearchInTable from "@/components/common/table/SearchInTable";
import TableBody from "@/components/common/table/TableBody";
import TableContainer from "@/components/common/table/TableContainer";
import TableHeader from "@/components/common/table/TableHeader";
import TableWrap from "@/components/common/table/TableWrap";
import { onHoldFields } from "@/types/common/fields";
import { OnHoldData } from "@/types/common/mockData";
import { useState } from "react";
import { OnHoldInterface } from '../../../types/common/interfaces';



const OnHold = () => {
    const [sortField, setSortField] = useState<keyof OnHoldInterface>('booking_date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof OnHoldInterface>('route');

    //Table Data Sorting function
    const handleSort = (field: keyof OnHoldInterface) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };
    const handleFieldChange = (item: string) => {
        setSearchField(item as keyof OnHoldInterface);
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
        <TableWrap>
            {/* <SearchInTable
                    search={searchQuery}
                    field={searchField}
                    onSearch={setSearchQuery}
                    onFieldChange={handleFieldChange}
                    fieldLists={onHoldFields.map((element) => element.label)}
                /> */}
            <TableContainer>
                <TableHeader
                    items={onHoldFields.map((field) => field.label)}
                />
                <TableBody items={filteredData} />
            </TableContainer>
        </TableWrap>

    );
};

export default OnHold;
