"use client"
import SignupContainer from '@/components/common/auth/SignupContainer';
import SignupLabel from '@/components/common/auth/SignupLabel';
import React, { useState } from 'react';
import SignupInput from '@/components/common/auth/SignupInput';
import Link from 'next/link';
import Select from 'react-dropdown-select';
import Button from '@/components/common/buttons/Button';

const SignupForm = () => {
    const [options, setOptions] = useState<{ value: number; label: string }[]>([]);
    const [formData, setFormData] = useState({
        typeOfOrg: '',
        nameOfOrg: '',
        status: '',
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        country: '',
        email: '',
        phoneCode: '',
        phoneNumber: '',
        currency: '',
        zipCode: '',
    });

    const organisation = [
        { value: 1, label: 'Non-Profit' },
        { value: 2, label: 'For-Profit' }
    ];
    const tagName = [
        { value: 1, label: 'Mr' },
        { value: 1, label: 'Mrs' },
        { value: 1, label: 'Ms' }
    ]
    const country = [
        { value: 1, label: 'United States' },
        { value: 1, label: 'United States' },
        { value: 1, label: 'United States' }
    ]


    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <form className="bg-white p-8 rounded-md shadow-md w-full max-w-4xl" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-semibold mb-6">Agency Registration:</h2>

                <SignupContainer>
                    <div>
                        <SignupLabel label="Type of organisation" required />
                        <Select
                            options={organisation}
                            onChange={(values) => setOptions(values)}
                            searchable={true}
                            placeholder="Select Type of Org."
                            values={[]}
                            className="mt-3 w-full !border-b !border-b-black !border-t-white !border-l-white !border-r-white p-2 outline-none rounded-none"
                            clearOnSelect={false}
                            dropdownHeight="200px"
                        />
                    </div>
                    <div>
                        <SignupLabel label="Name of organisation" required />

                        <SignupInput
                            type="text"
                            name="nameOfOrg"
                            value={formData.nameOfOrg}
                            onChange={handleChange}
                            placeholder="Name of Org."
                        />
                    </div>
                </SignupContainer>

                <h3 className="text-xl font-semibold mb-4">Enter contact details:</h3>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <SignupLabel label="First Name" required />
                        <div className="flex">
                            {/* Dropdown for Title (Mr, Mrs, Ms) */}
                            <Select
                                options={tagName}
                                onChange={(values) => setOptions(values)}
                                searchable={true}
                                placeholder=""
                                values={[]}
                                className="!w-[80px] mt-3.5 !border-b !border-b-black !border-t-white !border-l-white !border-r-white p-2 outline-none rounded-none mr-2"
                                clearOnSelect={false}
                                dropdownHeight="200px"
                            />

                            {/* Input for First Name */}
                            <SignupInput
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-3/4 border border-b-black p-2 outline-none rounded-none border-l-0 border-r-0 border-t-0"
                                placeholder="Enter First name"
                            />
                        </div>
                    </div>

                    <div>
                        <SignupLabel label="Last Name" required />
                        <SignupInput
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Enter Last name"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <SignupLabel label="Email Address" required />

                        <SignupInput
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                        />
                    </div>
                    <div>
                        <SignupLabel label="Phone Number" required />
                        <div className="flex mt-0">
                            <SignupInput
                                type="text"
                                name="phoneCode"
                                value={formData.phoneCode}
                                onChange={handleChange}
                                className="w-1/4 border border-b-black outline-none p-2 rounded-none border-l-0 border-r-0 border-t-0 mr-2"
                                placeholder="Code"
                            />
                            <SignupInput
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-3/4 border border-b-black p-2 outline-none rounded-none border-l-0 border-r-0 border-t-0"
                                placeholder="Agency Ph. Number"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-6">

                    <div>
                        <SignupLabel label="Country" required />
                        <Select
                            options={country}
                            onChange={(values) => setOptions(values)}
                            searchable={true}
                            placeholder="Select Country"
                            values={[]}
                            className="mt-3 w-full !border-b !border-b-black !border-t-white !border-l-white !border-r-white p-2 outline-none rounded-none"
                            clearOnSelect={false}
                            dropdownHeight="200px"
                        />
                    </div>
                    <div>
                        <SignupLabel label="State" required />
                        <Select
                            options={country}
                            onChange={(values) => setOptions(values)}
                            searchable={true}
                            placeholder="Select State"
                            values={[]}
                            className="mt-3 w-full !border-b !border-b-black !border-t-white !border-l-white !border-r-white p-2 outline-none rounded-none"
                            clearOnSelect={false}
                            dropdownHeight="200px"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <SignupLabel label="City/Town" required />

                        <Select
                            options={country}
                            onChange={(values) => setOptions(values)}
                            searchable={true}
                            placeholder="Select City/Town"
                            values={[]}
                            className="mt-3 w-full !border-b !border-b-black !border-t-white !border-l-white !border-r-white p-2 outline-none rounded-none"
                            clearOnSelect={false}
                            dropdownHeight="200px"
                        />
                    </div>
                    <div>
                        <SignupLabel label="Address line" required />
                        <SignupInput
                            type="text"
                            name="address"
                            value={formData.address1}
                            onChange={handleChange}
                            placeholder="Input Address" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                        <SignupLabel label="Zip / Postal Code" required />
                        <SignupInput
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="Enter Zip / Postal Code" />
                    </div>
                </div>

                <div className="flex items-center justify-start mb-6">
                    {/* <button
                        type="button"
                        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                    >
                        Upload document
                    </button> */}
                    <div className="text-sm text-gray-600">
                        By creating an account you are agreeing to our{' '}
                        <Link href="#" className="text-blue-500">T & C</Link>.
                    </div>
                </div>


                <div className="flex justify-start">

                    <div>
                        <Button
                            text='Submit'
                            onClick={() => { }}
                            className="flex w-[300px] text-center rounded-full items-center justify-center"
                        />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default SignupForm;
