import React from 'react'

interface Props {
    children: React.ReactNode;
}

const TableContainer: React.FC<Props> = ({ children }) => {
    return (
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
            {children}
        </table>
    )
}

export default TableContainer;