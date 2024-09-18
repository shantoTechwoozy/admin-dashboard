'use client'
// import SearchInTable from "@/components/common/table/SearchInTable";
import TableBody from "@/components/common/table/TableBody";
import TableContainer from "@/components/common/table/TableContainer";
import TableHeader from "@/components/common/table/TableHeader";
import TableWrap from "@/components/common/table/TableWrap";
import PageTitle from "@/components/paymentRequests/PageTitle";
import { RefundHistoryFields } from "@/types/common/fields";
import { RefundHistoryInterface } from '@/types/common/interfaces';
import { useState } from "react";
import { RefundHistoryData } from '../../../types/common/mockData';


const RefundHistory = () => {
    const [sortField, setSortField] = useState<keyof RefundHistoryInterface>('pnr');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchField, setSearchField] = useState<keyof RefundHistoryInterface>('pnr');

    const handleFieldChange = (item: string) => {
        setSearchField(item as keyof RefundHistoryInterface);
    };
    const handleSort = (field: keyof RefundHistoryInterface) => {
        const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortOrder(order);
    };

    const filteredData = RefundHistoryData
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
            <PageTitle content="Refund/History" />
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
                        items={RefundHistoryFields.map((element) => element.label)}
                    />
                    <TableBody
                        items={filteredData}
                    />
                </TableContainer>
            </TableWrap>
        </>
    );
};

export default RefundHistory;
