import FilterCard from '@/components/common/searchFilter/FilterCard'
import FilterChecker from '@/components/common/searchFilter/FilterChecker'
import FilterContainer from '@/components/common/searchFilter/FilterContainer'
import React from 'react'

const Filter = () => {
    return (
        <aside className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Filter By</h3>
            <FilterContainer titleLeft="No. of Stops" titleRight='From'>
                <FilterChecker title="1 Shop" price="($100)" />
                <FilterChecker title="2+ stops" price="($50)" />
            </FilterContainer>

            <FilterContainer titleLeft="No. of Stops" titleRight='From'>
                <FilterChecker title="1 Shop" price="($100)" />
                <FilterChecker title="2+ stops" price="($50)" />
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
