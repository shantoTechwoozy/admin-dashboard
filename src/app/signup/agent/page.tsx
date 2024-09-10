"use client";
import Input from "@/components/common/inputs/Input";
import Logo from "@/components/common/Logo";
import { useState } from "react";

const AgentRegistrationPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800">
            <div className="flex lg:flex-row flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                {/* Left Side - Registration Form */}
                <div className="w-full p-8">
                    <div className="flex flex-col items-center justify-center gap-2 mb-8">
                        <p className=" m-0 text-[16px] font-semibold dark:text-white">Agent Register</p>
                    </div>

                    {/* Organization Type and Name */}
                    <div className="flex gap-5">
                        <Input className="shadow-none outline-none rounded-none border border-slate-600 border-r-0 border-t-0 border-l-0" label="Type of organisation*" placeHolder="" type="select" parentClassName="w-full flex flex-col gap-1" value={firstName} onChange={setFirstName} />
                        <Input className="shadow-none outline-none rounded-none border border-slate-600 border-r-0 border-t-0 border-l-0" label="Name of organization*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={lastName} onChange={setLastName} />
                    </div>

                    <h2 className="flex font-bold mt-2 ml-2">Enter contact details:</h2>

                    {/* Title and First Name */}
                    <div className="flex gap-5 mt-6">
                        <div className="flex flex-1 gap-2 items-center">
                            {/* Title Dropdown */}

                            <div className="w-1/4 mt-8.5">
                                <select
                                    className="w-full shadow-none outline-none rounded-none border border-slate-600 border-r-0 border-t-0 border-l-0 p-2"
                                >
                                    <option value="Mr">Mr.</option>
                                    <option value="Mrs">Mrs.</option>
                                    <option value="Ms">Ms.</option>
                                </select>
                            </div>

                            {/* First Name Input */}
                            <Input
                                className="shadow-none outline-none rounded-none border border-slate-600 border-r-0 border-t-0 border-l-0 p-2 flex-1"
                                label="First Name*"
                                placeHolder="Enter First Name"
                                type="text"
                                parentClassName="w-full flex flex-col gap-1"
                                value={firstName}
                                onChange={setFirstName}
                            />
                        </div>

                        {/* Last Name Input */}
                        <Input
                            className="shadow-none outline-none rounded-none border border-slate-600 border-r-0 border-t-0 border-l-0 p-2 w-full"
                            label="Last Name*"
                            placeHolder="Enter Last Name"
                            type="text"
                            parentClassName="w-full flex flex-col gap-1"
                            value={lastName}
                            onChange={setLastName}
                        />
                    </div>

                    {/* Address Fields */}
                    <div className="flex gap-5 mt-2">
                        <Input className="shadow-none outline-none rounded-none border border-slate-600 border-r-0 border-t-0 border-l-0" label="Address line 1*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={firstName} onChange={setFirstName} />
                        <Input className="shadow-none outline-none rounded-none border border-slate-600 border-r-0 border-t-0 border-l-0" label="Address line 2" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={lastName} onChange={setLastName} />
                    </div>
                    <div className="flex gap-5 mt-2">
                        <Input className="shadow-none outline-none rounded-none border border-slate-600 border-r-0 border-t-0 border-l-0" label="City / Town*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={firstName} onChange={setFirstName} />
                        <Input className="shadow-none outline-none rounded-none border border-slate-600 border-r-0 border-t-0 border-l-0" label="Country*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={lastName} onChange={setLastName} />
                    </div>
                    <div className="flex gap-5 mt-2">
                        <Input className="shadow-none outline-none rounded-none border border-slate-600 border-r-0 border-t-0 border-l-0" label="Email Address*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={firstName} onChange={setFirstName} />
                        <Input className="shadow-none outline-none rounded-none border border-slate-600 border-r-0 border-t-0 border-l-0" label="Phone Number*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={lastName} onChange={setLastName} />
                    </div>
                    <div className="flex gap-5 mt-2">
                        <Input className="shadow-none outline-none rounded-none border border-slate-600 border-r-0 border-t-0 border-l-0" label="Zip / Postal Code*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={lastName} onChange={setLastName} />
                    </div>

                    {/* Register Button */}
                    <button className="w-full mt-5 py-2 bg-orange-500 hover:bg-orange-700 focus:ring-offset-orange-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgentRegistrationPage;
