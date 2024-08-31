"use client";
import React, { useState } from "react";
import { z } from "zod";

interface BankFormProps {
    onClose: () => void;
}

// Zod schema for form validation
const bankFormSchema = z.object({
    accountName: z.string().min(1, "Account Name is required"),
    accountNumber: z.string().min(1, "Account Number is required"),
    bankName: z.string().min(1, "Bank Name is required"),
    branchName: z.string().min(1, "Branch Name is required"),
    routingNumber: z.string().optional(),
    branchCode: z.string().optional(),
    city: z.string().min(1, "City is required"),
    address: z.string().optional(),
    swiftCode: z.string().optional(),
    isActive: z.enum(["Yes", "No"]),
});

const BankForm: React.FC<BankFormProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        accountName: "",
        accountNumber: "",
        bankName: "",
        branchName: "",
        routingNumber: "",
        branchCode: "",
        city: "",
        address: "",
        swiftCode: "",
        isActive: "Yes",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        // Validate form data with Zod
        const validationResult = bankFormSchema.safeParse(formData);
        if (!validationResult.success) {
            const errorMessages: Record<string, string> = {};
            validationResult.error.errors.forEach((error) => {
                if (error.path.length > 0) {
                    errorMessages[error.path[0]] = error.message;
                }
            });
            setErrors(errorMessages);
            return;
        }

        // Submit the form (you can handle the form submission here)
        console.log("Form submitted successfully", formData);
        onClose(); // Close the form
    };

    return (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <div>
                <label className="block font-semibold mb-2">Account Name*</label>
                <input
                    type="text"
                    name="accountName"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter Account Name"
                    value={formData.accountName}
                    onChange={handleInputChange}
                    required
                />
                {errors.accountName && (
                    <span className="text-red-500">{errors.accountName}</span>
                )}
            </div>

            <div>
                <label className="block font-semibold mb-2">Account Number*</label>
                <input
                    type="text"
                    name="accountNumber"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter Account Number"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    required
                />
                {errors.accountNumber && (
                    <span className="text-red-500">{errors.accountNumber}</span>
                )}
            </div>

            <div>
                <label className="block font-semibold mb-2">Bank Name*</label>
                <input
                    type="text"
                    name="bankName"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter Bank Name"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    required
                />
                {errors.bankName && (
                    <span className="text-red-500">{errors.bankName}</span>
                )}
            </div>

            <div>
                <label className="block font-semibold mb-2">Branch Name*</label>
                <input
                    type="text"
                    name="branchName"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter Branch Name"
                    value={formData.branchName}
                    onChange={handleInputChange}
                    required
                />
                {errors.branchName && (
                    <span className="text-red-500">{errors.branchName}</span>
                )}
            </div>

            <div>
                <label className="block font-semibold mb-2">Routing Number</label>
                <input
                    type="text"
                    name="routingNumber"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter Routing Number"
                    value={formData.routingNumber}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="block font-semibold mb-2">Branch Code</label>
                <input
                    type="text"
                    name="branchCode"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter Branch Code"
                    value={formData.branchCode}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="block font-semibold mb-2">City*</label>
                <select
                    name="city"
                    className="w-full p-2 border rounded-lg"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select City</option>
                    <option value="City 1">City 1</option>
                    <option value="City 2">City 2</option>
                    <option value="City 3">City 3</option>
                </select>
                {errors.city && <span className="text-red-500">{errors.city}</span>}
            </div>

            <div>
                <label className="block font-semibold mb-2">Address</label>
                <input
                    type="text"
                    name="address"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter Address"
                    value={formData.address}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="block font-semibold mb-2">Swift Code</label>
                <input
                    type="text"
                    name="swiftCode"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter Swift Code"
                    value={formData.swiftCode}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label className="block font-semibold mb-2">Is Active?*</label>
                <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="isActive"
                            value="Yes"
                            checked={formData.isActive === "Yes"}
                            onChange={handleInputChange}
                            required
                        />
                        <span className="ml-2">Yes</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="isActive"
                            value="No"
                            checked={formData.isActive === "No"}
                            onChange={handleInputChange}
                            required
                        />
                        <span className="ml-2">No</span>
                    </label>
                </div>
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex justify-end space-x-4 mt-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                    Close
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default BankForm;
