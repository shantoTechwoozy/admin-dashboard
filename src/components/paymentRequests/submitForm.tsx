"use client";
import { useState } from "react";

import { FaFileUpload } from "react-icons/fa";
import PageTitle from "./PageTitle";

const SubmitForm = () => {
  const [depositType, setDepositType] = useState("Cheque");
  const [bankAccount, setBankAccount] = useState("");
  const [depositDate, setDepositDate] = useState("");
  const [reference, setReference] = useState("");
  const [amount, setAmount] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <>
      <PageTitle content="Submit Request" />
      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 gap-4 lg:grid-cols-2"
      >
        {/* Deposit Type */}
        <div className="flex flex-col">
          <label
            htmlFor="depositType"
            className="text-gray-600 mb-2 text-sm font-semibold"
          >
            Deposit Type*
          </label>
          <select
            id="depositType"
            value={depositType}
            onChange={(e) => setDepositType(e.target.value)}
            className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
          >
            <option value="Cheque">Cheque</option>
            <option value="Bank Deposit">Bank Deposit</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Cash">Cash</option>
            <option value="Bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
          </select>
        </div>

        {/* TripBeyond Bank A/C */}
        <div className="flex flex-col">
          <label
            htmlFor="bankAccount"
            className="text-gray-600 mb-2 text-sm font-semibold"
          >
            TripBeyond Bank A/C*
          </label>
          <select
            id="bankAccount"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
            className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
          >
            <option value="">Select Account</option>
            <option value="Dutch Bangla Bank Ltd., Bashundhara, Dhaka(147-110-0024729)">
              Dutch Bangla Bank Ltd., Bashundhara, Dhaka(147-110-0024729)
            </option>
            <option value="The City Bank Ltd., Gulshan Avenue, Dhaka(1403664894001)">
              The City Bank Ltd., Gulshan Avenue, Dhaka(1403664894001)
            </option>
            <option value="BRAC bank, Natunbazar branch(2055206120001)">
              BRAC bank, Natunbazar branch(2055206120001)
            </option>
            <option value="UCBL Bank, Banani Branch(0901101000002246)">
              UCBL Bank, Banani Branch(0901101000002246)
            </option>
            <option value="Pubali Bank PLC, Banani Branch(3311901025114)">
              Pubali Bank PLC, Banani Branch(3311901025114)
            </option>
            <option value="STANDARD CHARTERED BANK, Gulshan(01-4976936-01)">
              STANDARD CHARTERED BANK, Gulshan(01-4976936-01)
            </option>
          </select>
        </div>

        {/* Deposited Date */}
        <div className="flex flex-col">
          <label
            htmlFor="depositDate"
            className="text-gray-600 mb-2 text-sm font-semibold"
          >
            Deposited Date*
          </label>
          <input
            type="date"
            id="depositDate"
            value={depositDate}
            onChange={(e) => setDepositDate(e.target.value)}
            className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
          />
        </div>

        {/* Reference */}
        <div className="flex flex-col">
          <label
            htmlFor="reference"
            className="text-gray-600 mb-2 text-sm font-semibold"
          >
            Reference*
          </label>
          <input
            type="text"
            id="reference"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
            placeholder="Enter reference number"
          />
        </div>

        {/* Amount */}
        <div className="flex flex-col">
          <label
            htmlFor="amount"
            className="text-gray-600 mb-2 text-sm font-semibold"
          >
            Amount*
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
            placeholder="Enter amount"
          />
        </div>

        {/* Attachment */}
        <div className="flex flex-col">
          <label
            htmlFor="attachment"
            className="text-gray-600 mb-2 text-sm font-semibold"
          >
            Attachment (Choose file)
          </label>
          <input
            type="file"
            id="attachment"
            onChange={(e) =>
              setAttachment(e.target.files ? e.target.files[0] : null)
            }
            className="border-gray-300 text-gray-700 rounded-md border p-3 shadow-sm"
          />
        </div>

        {/* Empty placeholder to balance the grid */}
        <div className="lg:col-span-2"></div>

        {/* Submit Button */}
        <div className="lg:col-span-1">
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 p-3 text-sm text-white shadow-md transition-colors hover:bg-blue-700"
          >
            <FaFileUpload />
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SubmitForm;
