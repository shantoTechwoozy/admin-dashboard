"use client";
import { useState } from "react";
// import SearchInTable from "../common/table/SearchInTable";
import TableBody from "../common/table/TableBody";
import TableContainer from "../common/table/TableContainer";
import TableHeader from "../common/table/TableHeader";
import TableWrap from "../common/table/TableWrap";
import PageTitle from "./PageTitle";

// Fields interface for the data structure
interface Fields {
  submitted_date: string;
  depositeType: string;
  tnxNumber: string;
  reference: string;
  status: string;
  amount: string;
  bankCharge: string;
  topupAmount: string;
  image: string;
}

// Mock data array
const mockData: Fields[] = [
  {
    submitted_date: "21-08-2024 08:18",
    depositeType: "Bank Deposite",
    tnxNumber: "MR0185452454645454",
    reference: "123",
    status: "Approved",
    amount: "BDT 10,000",
    bankCharge: "BDT 0",
    topupAmount: "BDT 10,000",
    image: "img_url",
  },
  {
    submitted_date: "21-08-2024 08:18",
    depositeType: "Bank Deposite",
    tnxNumber: "MR0185452454645454",
    reference: "456",
    status: "Approved",
    amount: "BDT 10,000",
    bankCharge: "BDT 0",
    topupAmount: "BDT 10,000",
    image: "img_url",
  },
  {
    submitted_date: "21-08-2024 08:18",
    depositeType: "Bank Deposite",
    tnxNumber: "MR0185452454645454",
    reference: "123",
    status: "Approved",
    amount: "BDT 10,000",
    bankCharge: "BDT 0",
    topupAmount: "BDT 10,000",
    image: "img_url",
  },
  {
    submitted_date: "21-08-2024 08:18",
    depositeType: "Bank Deposite",
    tnxNumber: "MR0185452454645454",
    reference: "123",
    status: "Approved",
    amount: "BDT 10,000",
    bankCharge: "BDT 0",
    topupAmount: "BDT 10,000",
    image: "img_url",
  },
];

const TransactionForm = () => {
  const [sortField, setSortField] = useState<keyof Fields>("submitted_date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchField, setSearchField] = useState<keyof Fields>("tnxNumber");

  const handleSort = (field: keyof Fields) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  const handleFieldChange = (item: string) => {
    setSearchField(item as keyof Fields);
  };
  const filteredData = mockData
    .filter((item) =>
      item[searchField]
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  // Field labels and their corresponding keys
  const fields: { label: string; key: keyof Fields }[] = [
    { label: "Submitted Date", key: "submitted_date" },
    { label: "Deposite Type", key: "depositeType" },
    { label: "Tnx Number", key: "tnxNumber" },
    { label: "Reference", key: "reference" },
    { label: "Status", key: "status" },
    { label: "Amount", key: "amount" },
    { label: "Bank Charge", key: "bankCharge" },
    { label: "Topup Amount", key: "topupAmount" },
    { label: "image", key: "image" },
  ];

  return (
    <>
      <PageTitle content="Transaction" />

      <TableWrap>
        {/* <SearchInTable
          search={searchQuery}
          field={searchField}
          onSearch={setSearchQuery}
          onFieldChange={handleFieldChange}
          fieldLists={fields.map((element) => element.label)}
        /> */}

        <TableContainer>
          <TableHeader items={fields.map((field) => field.label)} />
          <TableBody items={filteredData} />
        </TableContainer>
      </TableWrap>
    </>
  );
};

export default TransactionForm;
