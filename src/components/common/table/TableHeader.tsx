import React from "react";

interface PropeTypes {
  items: string[];
}

const TableHeader = ({ items }: PropeTypes) => {
  return (
    <thead>
      <tr>
        {items.map((item: string, index: number) => (
          <th
            key={index + "soim"}
            className="border-gray-300 hover:bg-gray-300 cursor-pointer border bg-secondary px-3 py-5 text-center text-sm transition"
          >
            <div className="flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-white">
              {item}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
