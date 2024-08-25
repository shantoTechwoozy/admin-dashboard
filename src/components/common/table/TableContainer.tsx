import React from "react";


interface WrapperProps {
    children: React.ReactNode;
}
const TableContainer: React.FC<WrapperProps> = ({children}) => {
  return (
    <div className="overflow-x-auto">
      <table className="border-gray-300 min-w-full rounded-md border bg-white shadow-md">
       {children}
      </table>
    </div>
  );
};

export default TableContainer;
