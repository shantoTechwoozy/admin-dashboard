import React from "react";

import { FaSearch } from "react-icons/fa";

interface _PropsTypes {
  search: string;
  field: string;
  onSearch: (item: string) => void;
  onFieldChange: (item: string) => void;
  fieldLists: string[];
}

const TableSearch: React.FC<_PropsTypes> = ({
  search,
  field,
  onFieldChange,
  onSearch,
  fieldLists,
}) => {
  return (
    <div className="mb-4 flex flex-wrap justify-end gap-2">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="border-gray-300 w-full flex-wrap rounded-md border p-2 text-sm shadow-md md:w-auto"
      />
      <select
        value={field}
        onChange={(e) => onFieldChange(e.target.value)}
        className="border-gray-300 w-auto rounded-md border p-2 text-sm shadow-md"
      >
        {fieldLists.map((field, index) => {
          let fieldValue = field.toLocaleLowerCase().split(" ").join("_");
          return (
            <option key={index} value={fieldValue}>
              {field}
            </option>
          );
        })}
      </select>
      <button
        className="flex items-center gap-2 rounded-md bg-blue-600 p-2 text-sm text-white shadow-md"
        onClick={() => {}}
      >
        <FaSearch />
        Search
      </button>
    </div>
  );
};

export default TableSearch;
