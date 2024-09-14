"use client";
import { useState } from "react";
import BankForm from "../common/form";
import PopupModal from "../common/modal";
// import SearchInTable from "../common/table/SearchInTable";
import TableBody from "../common/table/TableBody";
import TableContainer from "../common/table/TableContainer";
import TableHeader from "../common/table/TableHeader";
import TableWrap from "../common/table/TableWrap";
import PageTitle from "./PageTitle";
interface Fields {
  sl: string;
  account_name: string;
  status: string;
  account_numner: string;
  bank_name: string;
  branch_name: string;
}

const mockData: Fields[] = [
  {
    sl: "1",
    account_name: "Sazzad Alam Niloy",
    status: "Active",
    account_numner: "3411580005662",
    bank_name: "Dutch Bangla Bank PLC",
    branch_name: "Green Road",
  },
  {
    sl: "2",
    account_name: "TRIP BEYOND",
    status: "Active",
    account_numner: "05013100233939",
    bank_name: "EXIM BANK",
    branch_name: "BARISAL",
  },
  {
    sl: "3",
    account_name: "Sazzad Alam Niloy",
    status: "Active",
    account_numner: "1502923125001",
    bank_name: "CITY BANK",
    branch_name: "UTTARA",
  },
];

const MyBankAcc = () => {
  const [sortField, setSortField] = useState<keyof Fields>("account_numner");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchField, setSearchField] = useState<keyof Fields>("sl");

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
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

  const fields: { label: string; key: keyof Fields }[] = [
    { label: "SL", key: "sl" },
    { label: "Account Name", key: "account_name" },
    { label: "Status", key: "status" },
    { label: "Account Numner", key: "account_numner" },
    { label: "Bank Name", key: "bank_name" },
    { label: "Branch Name", key: "branch_name" },
  ];

  return (
    <>
      <PageTitle content="My Bank Account" />

      <TableWrap>
        {/* <SearchInTable
          search={searchQuery}
          field={searchField}
          onSearch={setSearchQuery}
          onFieldChange={handleFieldChange}
          fieldLists={fields.map((element) => element.label)}
        /> */}

        <button
          className="mb-2 rounded-lg bg-black  p-2 px-5 py-2 font-semibold text-white"
          onClick={openPopup}
        >
          Add Account
        </button>

        {isPopupOpen && <PopupModal show={isPopupOpen} onclose={closePopup}>
          <div className="p-4">
            <h2 className="text-lg font-semibold">Add New Bank Account</h2>
            <BankForm onClose={() => { }} />
          </div>
        </PopupModal>}

        <TableContainer>
          <TableHeader items={fields.map((field) => field.label)} />
          <TableBody items={filteredData} />
        </TableContainer>
      </TableWrap>
    </>
  );
};

export default MyBankAcc;