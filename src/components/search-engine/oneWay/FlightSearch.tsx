import React from 'react';

const FlightSearch = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}


      {/* Search Panel */}
      <div className="p-6 bg-white shadow-lg rounded-lg mx-4 my-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block mb-2 text-sm">From</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="London (UK)" />
          </div>
          <div>
            <label className="block mb-2 text-sm">To</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Birmingham (UK)" />
          </div>
          <div>
            <label className="block mb-2 text-sm">Depart</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block mb-2 text-sm">Return</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="space-x-4">
            <button className="bg-orange-500 px-4 py-2 rounded text-white">Search</button>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Direct Flights Only</span>
            </label>
          </div>
          <div className="flex space-x-2 items-center">
            <select className="p-2 border rounded bg-gray-100">
              <option>One Way</option>
              <option>Round Trip</option>
              <option>Multi-city</option>
            </select>
            <select className="p-2 border rounded bg-gray-100">
              <option>Adult</option>
              <option>Child</option>
            </select>
            <select className="p-2 border rounded bg-gray-100">
              <option>Economy</option>
              <option>Business</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap lg:flex-nowrap gap-4 px-4">
        {/* Filter Section */}
        <aside className="w-full lg:w-1/4 bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Filter By</h3>
          <div>
            <h4 className="font-semibold mb-2">No. of Stops</h4>
            <label className="block">
              <input type="radio" name="stops" className="mr-2" />
              1 stop ($100)
            </label>
            <label className="block">
              <input type="radio" name="stops" className="mr-2" />
              2+ stops ($50)
            </label>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Airlines From</h4>
            <label className="block">
              <input type="radio" name="airlines" className="mr-2" />
              Qatar ($100)
            </label>
            <label className="block">
              <input type="radio" name="airlines" className="mr-2" />
              Emirates ($50)
            </label>
          </div>
        </aside>

        {/* Trip Details Section */}
        <section className="w-full lg:w-3/4 space-y-4">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Trip Details</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              {["Sept 22", "Sept 23", "Sept 24", "Sept 25", "Sept 26"].map((date, index) => (
                <div key={index} className="border p-4 rounded-lg">
                  <div>{date}</div>
                  <div className="text-xl font-semibold">$265</div>
                </div>
              ))}
            </div>
          </div>

          {/* Flight Cards */}
          <div className="bg-white p-4 shadow-lg rounded-lg space-y-4">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-4">
                <div>
                  <div className="font-bold">Dhaka (DAC) - Delhi (DEL)</div>
                  <div className="text-sm text-gray-600">10:20 AM - 1 Stop - Seats Left: 9</div>
                </div>
                <div className="text-lg font-semibold">$600</div>
                <button className="bg-orange-500 px-4 py-2 rounded text-white">Book Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Sponsor Section */}
        <aside className="w-full lg:w-1/4 bg-white p-4 shadow-lg rounded-lg space-y-4">
          <h3 className="text-lg font-semibold mb-4">Sponsor</h3>
          <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Fly to Dhaka</span>
          </div>
          <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">Ad Space</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FlightSearch;
