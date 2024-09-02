'use client';

import { IconSharePnr } from '@/icons';
import { useState } from 'react';
import { Supplier, selectOptions } from './Options'; // Adjust the import path as needed

const SharePNR = () => {
  const [supplier, setSupplier] = useState<Supplier>(selectOptions[0]);
  const [pnr, setPnr] = useState<string>('');

  const handleSupplierChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSupplier = selectOptions.find(
      (supplier: Supplier) => supplier.id === e.target.value
    );
    if (selectedSupplier) {
      setSupplier(selectedSupplier);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Supplier:', supplier);
    console.log('PNR:', pnr);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-md w-full max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        <IconSharePnr.plane className="inline-block text-blue-600 mr-2" />
        Please find the shared PNR code
        <span className="block text-blue-600 mt-2">ESDACVS33KV-B;RFS;ER;ER</span>
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
        <div className="flex flex-col w-full">
          <label htmlFor="supplier" className="text-sm font-semibold text-gray-600 mb-2">
            Supplier
          </label>
          <select
            id="supplier"
            value={supplier.id}
            onChange={handleSupplierChange}
            className="p-3 border border-gray-300 rounded-md shadow-sm text-gray-700 w-full"
          >
            {selectOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full">
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
        <div className="flex items-end w-full sm:w-auto">
          <button
            type="submit"
            className="p-3 bg-blue-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            Fetch
          </button>
        </div>
      </form>
    </div>
  );
};

export default SharePNR;
