'use client'
// import SearchInTable from "@/components/common/table/SearchInTable";
import TableBody from "@/components/common/table/TableBody";
import TableContainer from "@/components/common/table/TableContainer";
import TableHeader from "@/components/common/table/TableHeader";
import TableWrap from "@/components/common/table/TableWrap";
import PageTitle from "@/components/paymentRequests/PageTitle";
import { VoidHistoryFields } from "@/types/common/fields";
import { VoidHistoryInterface } from '@/types/common/interfaces';
import { useState } from "react";
import { VoidHistoryData } from '../../../types/common/mockData';
import { KeepTable } from "@/components/keep-react/KeepTable";


const VoidHistory = () => {
    return (
        <KeepTable
            tableTitle="Void"
            headerItems={VoidHistoryFields}
            data={VoidHistoryData}
        />
    );
};

export default VoidHistory;
