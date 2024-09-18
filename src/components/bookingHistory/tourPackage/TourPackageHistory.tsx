'use client'
// import SearchInTable from "@/components/common/table/SearchInTable";
import TableBody from "@/components/common/table/TableBody";
import TableContainer from "@/components/common/table/TableContainer";
import TableHeader from "@/components/common/table/TableHeader";
import TableWrap from "@/components/common/table/TableWrap";
import { tourPackageHistoryFields } from "@/types/common/fields";
import { tourPackageHistoryData } from "@/types/common/mockData";
import { useState } from "react";
import { TourPackageHistoryInterface } from "@/types/common/interfaces";
import PageTitle from "@/components/paymentRequests/PageTitle";


const TourPackageHistory = () => {
    const [sortField, setSortField] = useState<keyof TourPackageHistoryInterface>('created_at');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof TourPackageHistoryInterface>('actions');

    const handleFieldChange = (item: string) => {
        setSearchField(item as keyof TourPackageHistoryInterface);
    };
    const handleSort = (field: keyof TourPackageHistoryInterface) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };

    const filteredData = tourPackageHistoryData
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
                fieldLists={tourPackageHistoryFields.map((element) => element.label)}
            /> */}
                <TableContainer>
                    <TableHeader
                        items={tourPackageHistoryFields.map((element) => element.label)}
                    />
                    <TableBody
                        items={filteredData}
                    />
                </TableContainer>
            </TableWrap>
        </>
    );
};

export default TourPackageHistory;

