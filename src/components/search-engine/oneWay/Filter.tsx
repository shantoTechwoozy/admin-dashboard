import FilterCard from '@/components/common/searchFilter/FilterCard'
import FilterChecker from '@/components/common/searchFilter/FilterChecker'
import FilterContainer from '@/components/common/searchFilter/FilterContainer'
import React from 'react'

const Filter = () => {
    return (
        <aside className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Filter By</h3>
            <FilterContainer titleLeft="No. of Stops" titleRight='From'>
                <FilterChecker shops={1} type="stops" title="Stop" price="($100)" />
                <FilterChecker shops={2} type="stops" title="stops" price="($50)" />
            </FilterContainer>

            <FilterContainer titleLeft="Airlines from" titleRight='From'>
                <FilterChecker title="Quatar" type="airlines" airlines={5} price="($100)" />
                <FilterChecker title="Emirates" type="airlines" airlines={10} price="($50)" />
            </FilterContainer>

            <FilterContainer titleLeft="Departure time Point 1">
                <FilterCard />
            </FilterContainer>

            <FilterContainer titleLeft="Arrival time Point 2">
                <FilterCard />
            </FilterContainer>

        </aside>
    )
}

export default Filter
