'use client';
import { AddPassengerFields } from "@/types/common/fields";
import { AddPassengerInterface } from "@/types/common/interfaces";
import { AddPassengerData } from "@/types/common/mockData";
import { useState } from "react";
// import SearchInTable from "../common/table/SearchInTable";
import TableBody from "../common/table/TableBody";
import TableContainer from "../common/table/TableContainer";
import TableHeader from "../common/table/TableHeader";
import TableWrap from "../common/table/TableWrap";



const AddPassenger = () => {
  const [sortField, setSortField] = useState<keyof AddPassengerInterface>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchField, setSearchField] = useState<keyof AddPassengerInterface>('name');
  const handleFieldChange = (item: string) => {
    setSearchField(item as keyof AddPassengerInterface);
  };
  const handleSort = (field: keyof AddPassengerInterface) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
  };

  const filteredData = AddPassengerData
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
        fieldLists={AddPassengerFields.map((element) => element.label)}
      /> */}
      <TableContainer>
        <TableHeader
          items={AddPassengerFields.map((element) => element.label)}
        />
        <TableBody
          items={filteredData}
        />
      </TableContainer>
    </TableWrap>
  );
};

export default AddPassenger;
