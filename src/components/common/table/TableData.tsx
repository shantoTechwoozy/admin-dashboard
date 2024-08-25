import React from "react";

interface PropsTypes {
    content: string;
}

const TableData = ({ content }:PropsTypes) => {
  return (
    <td className="border-gray-300 whitespace-nowrap border px-4 py-2 text-center text-sm text-black">
      {content}
    </td>
  );
};

export default TableData;
