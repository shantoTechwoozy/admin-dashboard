import React from 'react'

type Props = {}

const SearchEngine: React.FC<Props> = () => {
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold text-black">Search Engine</h1>
      <p className="text-sm sm:text-base text-black">Content for Search Engine page.</p>
    </div>
  );
}

export default SearchEngine;
