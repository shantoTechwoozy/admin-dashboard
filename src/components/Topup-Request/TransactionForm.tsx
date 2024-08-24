"use client";
import { useState } from "react";
import { FaSort, FaSearch } from "react-icons/fa";
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
     <PageTitle content="Transaction"/>
    <div className="flex w-full items-center justify-center rounded-md">
      <div className="max-w-8xl w-full">
        <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-2 shadow-lg sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <div className="p-2">
            <div className="mb-4 flex flex-wrap justify-end gap-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-gray-300 w-full flex-wrap rounded-md border p-2 text-sm shadow-md md:w-auto"
              />
              <select
                value={searchField}
                onChange={(e) => setSearchField(e.target.value as keyof Fields)}
                className="border-gray-300 w-auto rounded-md border p-2 text-sm shadow-md"
              >
                {fields.map((field) => (
                  <option key={field.key} value={field.key}>
                    {field.label}
                  </option>
                ))}
              </select>
              <button
                className="flex items-center gap-2 rounded-md bg-blue-600 p-2 text-sm text-white shadow-md"
                onClick={() => console.log("Search triggered")}
              >
                <FaSearch />
                Search
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="border-gray-300 min-w-full rounded-md border bg-white shadow-md">
                <thead>
                  <tr>
                    {fields.map((field) => (
                      <th
                        key={field.key}
                        className="border-gray-300 hover:bg-gray-300 cursor-pointer border bg-black px-3 py-5 text-center text-sm transition"
                        onClick={() => handleSort(field.key)}
                      >
                        <div className="flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-white">
                          {field.label}
                          {/* <FaSort className="text-xs" /> */}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr
                      key={index + "something"}
                      className="hover:bg-gray-100 transition"
                    >
                      <td className="border-gray-300 whitespace-nowrap border px-4 py-2 text-center text-sm text-black">
                        {item.submitted_date}
                      </td>
                      <td className="border-gray-300 whitespace-nowrap border px-4 py-2 text-center text-sm text-black">
                        <p className="font-bold text-red">
                          {item.depositeType}
                        </p>
                      </td>
                      <td className="border-gray-300 whitespace-nowrap border px-4 py-2 text-center text-sm text-black">
                        {item.tnxNumber}
                      </td>
                      <td className="border-gray-300 whitespace-nowrap border px-4 py-2 text-center text-sm text-black">
                        {item.reference}
                      </td>
                      <td className="border-gray-300 whitespace-nowrap border px-4 py-2 text-center text-sm text-black">
                        {item.status}
                      </td>
                      <td className="border-gray-300 whitespace-nowrap border px-4 py-2 text-center text-sm text-black">
                        {item.amount}
                      </td>
                      <td className="border-gray-300 whitespace-nowrap border px-4 py-2 text-center text-sm text-black">
                        {item.bankCharge}
                      </td>
                      <td className="border-gray-300 whitespace-nowrap border px-4 py-2 text-center text-sm text-black">
                        {item.image}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div> </>
  );
};

export default TransactionForm;
