import React from 'react'

interface Propstypes {
    shops?: number;
    airlines?: number;
    title: string;
    price: string;
}
const FilterChecker: React.FC<Propstypes> = ({ shops, airlines, title, price }) => {
    return (
        <div className=" flex py-1 px-2 gap-1">
            <input type="checkbox" name="stops" className="mr-1" />
            <span className="text-sm">{shops}</span>
            <span className="text-sm">{title}</span>
            <span className="text-sm">{airlines}</span>
            <span className="text-sm ml-auto">{price}</span>
        </div>
    )
}

export default FilterChecker
