"use client";
import React from "react";
import { useState } from "react";
import TableSearchbar from "../common/TableSearchbar";
import PageTitle from "./PageTitle";
import TableHeader from "../common/table/TableHeader";
import TableContainer from "../common/table/TableContainer";
import TableBody from "../common/table/TableBody";
import TableWrap from "../common/table/TableWrap";
import searchFilter from "@/utils/searchFilter";

interface Fields {
  booking_name: string;
  account_name: string;
  account_number: string;
  branch: string;
  routing_number: string;
  swift_code: string;
}

// header names
const bookingFields = [
  "Booking Name",
  "Account Name",
  "Account Number",
  "Branch",
  "Routing Number",
  "Swift Code",
];

// Mock data array
const mockData: Fields[] = [
  {
    booking_name: "Jamuna Bank",
    account_name: "John Doe",
    account_number: "1234567890",
    branch: "Downtown",
    routing_number: "001122",
    swift_code: "GLBKUS33",
  },
  {
    booking_name: "City Bank",
    account_name: "Nasim",
    account_number: "1234567890",
    branch: "Downtown",
    routing_number: "001122",
    swift_code: "GLBKUS33",
  },
  {
    booking_name: "Bangladesh Bank",
    account_name: "Shanto",
    account_number: "1234567890",
    branch: "Downtown",
    routing_number: "001122",
    swift_code: "GLBKUS33",
  },
  {
    booking_name: "Dutch Bangla Bank",
    account_name: "Shanto",
    account_number: "1234567890",
    branch: "Downtown",
    routing_number: "001122",
    swift_code: "GLBKUS33",
  },
  {
    booking_name: "Pubali Bank",
    account_name: "Nazrul",
    account_number: "1234567890",
    branch: "Downtown",
    routing_number: "001122",
    swift_code: "GLBKUS33",
  },
];

const BankAccounts = () => {
  const [search, setSearch] = useState<string>("");
  const [field, setField] = useState<string>("booking_name");

  const result = searchFilter(mockData, field, search);

  return (
    <>
      <PageTitle content="Techwoozy Bank Accounts" />
      <TableWrap>
        <TableSearchbar
          search={search}
          field={field}
          onFieldChange={setField}
          onSearch={setSearch}
          fieldLists={bookingFields}
        />

        <TableContainer>
          <TableHeader items={bookingFields} />
          <TableBody items={result} />
        </TableContainer>
      </TableWrap>
    </>
  );
};

export default BankAccounts;
