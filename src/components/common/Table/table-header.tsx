import React from 'react'

interface Props {
    fields: { label: string; key: string }[];
    sortField: string;
    sortOrder: 'asc' | 'dsc';
    onSort: (field: string) => void;
}


const TableHeader: React.FC<Props> = ({ fields, sortField, sortOrder, onSort }) => {
    return (
        <thead>
            <tr>
                {fields.map((field) => (
                    <th
                        key={field.key}
                        className="py-5 px-3 bg-black border border-gray-300 cursor-pointer text-sm text-center hover:bg-gray-300 transition"
                        onClick={() => onSort(field.key)}
                    >
                        <div className="flex items-center text-white rounded-sm justify-center gap-2 whitespace-nowrap">
                            {field.label}
                            {sortField === field.key && (
                                <span>
                                    {sortOrder === 'asc' ? '▲' : '▼'}
                                </span>
                            )}
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader;
