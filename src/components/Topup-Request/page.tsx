'use client';
import { useState } from "react";
import { AiFillAppstore, AiOutlineBank } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsBank, BsFillCreditCardFill } from "react-icons/bs";
import { FaFileUpload } from "react-icons/fa";

const TopupRequest = () => {
    const [depositType, setDepositType] = useState('Cheque');
    const [bankAccount, setBankAccount] = useState('');
    const [depositDate, setDepositDate] = useState('');
    const [reference, setReference] = useState('');
    const [amount, setAmount] = useState('');
    const [attachment, setAttachment] = useState<File | null>(null);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="flex w-full items-center justify-center rounded-md">
            <div className="w-full max-w-6xl">
                <div className="bg-white p-4 rounded-sm shadow-lg">
                    <div className="mb-4 flex flex-wrap gap-2">
                        <button className="p-2 bg-blue-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-blue-700 transition-colors">
                            <AiFillAppstore />
                            Submit Request
                        </button>
                        <button className="p-2 bg-green-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-green-700 transition-colors">
                            <RiMoneyDollarCircleFill />
                            Transaction
                        </button>
                        <button className="p-2 bg-yellow-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-yellow-700 transition-colors">
                            <BsBank />
                            My Bank Accounts
                        </button>
                        <button className="p-2 bg-slate-400 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-gray-700 transition-colors">
                            <AiOutlineBank />
                            TravelChamp Bank Accounts
                        </button>
                        <button className="p-2 bg-orange-600 text-white rounded-md shadow-md flex items-center gap-2 text-sm hover:bg-orange-700 transition-colors">
                            <BsFillCreditCardFill />
                            Online Deposit
                        </button>
                    </div>

                    <div className="overflow-x-auto max-h-[400px] lg:max-h-[600px] overflow-y-auto">
                        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {/* Deposit Type */}
                            <div className="flex flex-col">
                                <label htmlFor="depositType" className="text-sm font-semibold text-gray-600 mb-2">
                                    Deposit Type*
                                </label>
                                <select
                                    id="depositType"
                                    value={depositType}
                                    onChange={(e) => setDepositType(e.target.value)}
                                    className="p-3 border border-gray-300 rounded-md shadow-sm text-gray-700"
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
                                <label htmlFor="bankAccount" className="text-sm font-semibold text-gray-600 mb-2">
                                    TripBeyond Bank A/C*
                                </label>
                                <select
                                    id="bankAccount"
                                    value={bankAccount}
                                    onChange={(e) => setBankAccount(e.target.value)}
                                    className="p-3 border border-gray-300 rounded-md shadow-sm text-gray-700"
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
                                <label htmlFor="depositDate" className="text-sm font-semibold text-gray-600 mb-2">
                                    Deposited Date*
                                </label>
                                <input
                                    type="date"
                                    id="depositDate"
                                    value={depositDate}
                                    onChange={(e) => setDepositDate(e.target.value)}
                                    className="p-3 border border-gray-300 rounded-md shadow-sm text-gray-700"
                                />
                            </div>

                            {/* Reference */}
                            <div className="flex flex-col">
                                <label htmlFor="reference" className="text-sm font-semibold text-gray-600 mb-2">
                                    Reference*
                                </label>
                                <input
                                    type="text"
                                    id="reference"
                                    value={reference}
                                    onChange={(e) => setReference(e.target.value)}
                                    className="p-3 border border-gray-300 rounded-md shadow-sm text-gray-700"
                                    placeholder="Enter reference number"
                                />
                            </div>

                            {/* Amount */}
                            <div className="flex flex-col">
                                <label htmlFor="amount" className="text-sm font-semibold text-gray-600 mb-2">
                                    Amount*
                                </label>
                                <input
                                    type="number"
                                    id="amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="p-3 border border-gray-300 rounded-md shadow-sm text-gray-700"
                                    placeholder="Enter amount"
                                />
                            </div>

                            {/* Attachment */}
                            <div className="flex flex-col">
                                <label htmlFor="attachment" className="text-sm font-semibold text-gray-600 mb-2">
                                    Attachment (Choose file)
                                </label>
                                <input
                                    type="file"
                                    id="attachment"
                                    onChange={(e) => setAttachment(e.target.files ? e.target.files[0] : null)}
                                    className="p-3 border border-gray-300 rounded-md shadow-sm text-gray-700"
                                />
                            </div>
                            
                            {/* Empty placeholder to balance the grid */}
                            <div className="lg:col-span-2"></div>

                            {/* Submit Button */}
                            <div className="lg:col-span-1">
                                <button
                                    type="submit"
                                    className="p-3 bg-blue-600 text-white rounded-md shadow-md flex items-center justify-center gap-2 text-sm hover:bg-blue-700 transition-colors w-full"
                                >
                                    <FaFileUpload />
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopupRequest;
