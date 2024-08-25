import React from "react";

interface PropsTypes {
  items: Record<string, any>[];
}

const TableBody = ({ items }: PropsTypes) => {
  return (
    <tbody>
      {items.map((item, rowIndex) => {
        const keys = Object.keys(item); // Get the keys of the current item

        return (
          <tr key={rowIndex} className="hover:bg-gray-100 transition">
            {keys.map((key) => (
              <td
                key={key}
                className="border-gray-300 whitespace-nowrap border px-4 py-2 text-center text-sm text-black"
              >
                {item[key]}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
