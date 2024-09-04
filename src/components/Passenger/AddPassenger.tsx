'use client';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiCheckboxFill } from "react-icons/ri";

// Fields interface for the data structure
interface Fields {
  sl: number;
  name: string;
  email: string;
  dob: string;
  gender: string;
  passport_number: string;
  passport_expire_date: string;
  passport_copy: string;
  visa_copy: string;
  action: string;
}

// Mock data array
const mockData: Fields[] = [
  {
    sl: 1,
    name: "Mr MD SHAREA HOSIN SIMUL (ADT)",
    email: "trip.beyond.fly@gmail.com",
    dob: "28-June-2024",
    gender: "Male",
    passport_number: "A07733910",
    passport_expire_date: "01-May-2033",
    passport_copy: "N/A",
    visa_copy: "N/A",
    action: "Edit/Delete",
  },
  {
    sl: 1,
    name: "Mr MD SHAREA HOSIN SIMUL (ADT)",
    email: "trip.beyond.fly@gmail.com",
    dob: "28-June-2003",
    gender: "Male",
    passport_number: "A07733910",
    passport_expire_date: "01-May-2033",
    passport_copy: "N/A",
    visa_copy: "N/A",
    action: "Edit/Delete",
  },

];

const AddPassenger = () => {
  const [sortField, setSortField] = useState<keyof Fields>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchField, setSearchField] = useState<keyof Fields>('name');

  const handleSort = (field: keyof Fields) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
  };

  const filteredData = mockData
    .filter((item) =>
      item[searchField].toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

  // Field labels and their corresponding keys
  const fields: { label: string; key: keyof Fields }[] = [
    { label: 'SL', key: 'sl' },
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'DOB', key: 'dob' },
    { label: 'Gender', key: 'gender' },
    { label: 'Passport Number', key: 'passport_number' },
    { label: 'Passport Expire Date', key: 'passport_expire_date' },
    { label: 'Passport Copy', key: 'passport_copy' },
    { label: 'Visa Copy', key: 'visa_copy' },
    { label: 'Action', key: 'action' },
  ];

  return (
    <div className="flex w-full items-center justify-center rounded-md">
      <div className="w-full max-w-8xl">
        <div className="bg-white p-2 rounded-sm shadow-lg grid grid-cols-1 gap-4">
          <div className="p-2">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="mb-12 flex flex-wrap items-start justify-start gap-2">
                <button className="p-2 bg-green-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-yellow-700 transition-colors">
                  <RiCheckboxFill />
                  Add Passenger
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4 ml-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md shadow-md text-sm w-full md:w-auto flex-wrap"
                />
                <select
                  value={searchField}
                  onChange={(e) => setSearchField(e.target.value as keyof Fields)}
                  className="p-2 border border-gray-300 rounded-md shadow-md text-sm w-auto"
                >
                  {fields.map((field) => (
                    <option key={field.key} value={field.key}>
                      {field.label}
                    </option>
                  ))}
                </select>
                <button
                  className="p-2 bg-green-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-blue-700 transition-colors"
                  onClick={() => console.log('Search triggered')}
                >
                  <FaSearch />
                  Search
                </button>
              </div>
            </div>

            <div className="overflow-x-auto max-h-[400px] lg:max-h-[600px] overflow-y-auto">
              <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
                <thead>
                  <tr>
                    {fields.map((field) => (
                      <th
                        key={field.key}
                        className="py-5 px-3 bg-green-600 border-2 border-slate-600 cursor-pointer text-sm text-center text-white hover:bg-gray-700 transition-colors whitespace-nowrap"
                        onClick={() => handleSort(field.key)}
                      >
                        <div className="flex items-center justify-center gap-2 whitespace-nowrap">
                          {field.label}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr key={item.sl} className="hover:bg-gray-100 transition-colors">
                      <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.sl}</td>
                      <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.name}</td>
                      <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.email}</td>
                      <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.dob}</td>
                      <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.gender}</td>
                      <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.passport_number}</td>
                      <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.passport_expire_date}</td>
                      <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.passport_copy}</td>
                      <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.visa_copy}</td>
                      <td className="py-2 px-4 border border-gray-300 text-sm text-center text-black whitespace-nowrap">{item.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPassenger;
