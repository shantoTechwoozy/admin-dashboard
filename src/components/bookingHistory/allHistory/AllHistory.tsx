'use client'
// import SearchInTable from "@/components/common/table/SearchInTable";
import TableBody from "@/components/common/table/TableBody";
import TableContainer from "@/components/common/table/TableContainer";
import TableHeader from "@/components/common/table/TableHeader";
import TableWrap from "@/components/common/table/TableWrap";
import { AllHistoryFields } from "@/types/common/fields";
import { AllHistoryInterface } from "@/types/common/interfaces";
import { AllHistoryData } from "@/types/common/mockData";
import { useState } from "react";


const AllHistory = () => {
    const [sortField, setSortField] = useState<keyof AllHistoryInterface>('booking_date');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof AllHistoryInterface>('route');


    const handleFieldChange = (item: string) => {
        setSearchField(item as keyof AllHistoryInterface);
    };


    const filteredData = AllHistoryData
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
                fieldLists={AllHistoryFields.map((element) => element.label)}
            /> */}
            <TableContainer>
                <TableHeader
                    items={AllHistoryFields.map((element) => element.label)}
                />
                <TableBody
                    items={filteredData}
                />
            </TableContainer>
        </TableWrap>
    );
};

export default AllHistory;
