import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const TableWrap: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex min-w-full items-center justify-center rounded-md">
      <div className="max-w-8xl w-full">
        <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-2 shadow-lg sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
          <div className="p-2">
            {/* <TableSearchbar
            search={search}
            field={field}
            onFieldChange={setField}
            onSearch={setSearch}
            fieldLists={bookingFields}
          />

          <TableContainer>
            <TableHeader items={bookingFields} />
          
            
            <TableBody items={bookingFields} />
            <TableBody items={bookingFields} />
            <TableBody items={bookingFields} />
            <TableBody items={bookingFields} />
            <TableBody items={bookingFields} />
          
          </TableContainer> */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableWrap;
