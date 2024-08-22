'use client';

import { useState } from 'react';
import { FaPlane } from 'react-icons/fa';

const SharePNR = () => {
  const [supplier, setSupplier] = useState('Galileo');
  const [pnr, setPnr] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Supplier:', supplier);
    console.log('PNR:', pnr);
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 bg-white shadow-lg rounded-md w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        <FaPlane className="inline-block text-blue-600 mr-2" />
        Please find the shared PNR code
        <span className="block text-blue-600 mt-2">ESDACVS33KV-B;RFS;ER;ER</span>
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-between sm:flex-row sm:items-center gap-4 w-full">
        <div className="flex flex-col w-full sm:w-2/5">
          <label htmlFor="supplier" className="text-sm font-semibold text-gray-600 mb-2">
            Supplier
          </label>
          <select
            id="supplier"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            className="p-3 border border-gray-300 rounded-md shadow-sm text-gray-700 w-full"
          >
            <option value="Galileo">Galileo</option>
            <option value="Sabre">Sabre</option>
            <option value="Amadeus">Amadeus</option>
          </select>
        </div>
        <div className="flex flex-col w-full sm:w-2/5">
          <label htmlFor="pnr" className="text-sm font-semibold text-gray-600 mb-2">
            PNR
          </label>
          <input
            type="text"
            id="pnr"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            className="p-3 border border-gray-300 rounded-md shadow-sm text-gray-700 w-full"
            placeholder="Enter PNR code"
          />
        </div>
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-blue-700 transition-colors w-full sm:w-auto sm:mt-6"
        >
          Fetch
        </button>
      </form>
    </div>
  );
};

export default SharePNR;
