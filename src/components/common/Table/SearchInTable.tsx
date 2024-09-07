import { nanoid } from "nanoid";
import React from "react";

interface PropsTypes {
  search: string;
  field: string;
  onSearch: (item: string) => void;
  onFieldChange: (item: string) => void;
  fieldLists: string[];
}

const SearchInTable: React.FC<PropsTypes> = ({
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
            <option key={nanoid()} value={fieldValue}>
              {field}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SearchInTable;
