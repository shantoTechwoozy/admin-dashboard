import React from 'react'

interface Propstypes {
    title: string;
    price: string;
}
const FilterChecker: React.FC<Propstypes> = ({ title, price }) => {
    return (
        <div className=" flex py-1 px-2">
            <input type="checkbox" name="stops" className="mr-1" />
            <span className="text-sm">{title}</span>
            <span className="text-sm ml-auto">{price}</span>
        </div>
    )
}

export default FilterChecker
