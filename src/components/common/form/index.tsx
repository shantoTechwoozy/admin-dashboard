import React from 'react';

interface FormProps { }

const BankForm: React.FC<FormProps> = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Add New Bank Account
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Input Fields */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Account Name
                    </label>
                    <input
                        type="text"
                        placeholder="Account Name"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Account Nu
                    </label>
                    <input
                        type="text"
                        placeholder="Account Number"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Account Nu
                    </label>
                    <input
                        type="text"
                        placeholder="Account Number"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Bank Name
                    </label>
                    <input
                        type="text"
                        placeholder="Bank Name"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Branch Name
                    </label>
                    <input
                        type="text"
                        placeholder="Branch Name"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Routing Number
                    </label>
                    <input
                        type="text"
                        placeholder="Routing Number"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Branch Code
                    </label>
                    <input
                        type="text"
                        placeholder="Branch Code"
                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            <div className="flex justify-end mt-6 space-x-4">
                <button
                    type="button"
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg dark:bg-gray-600 dark:text-gray-200"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default BankForm;
