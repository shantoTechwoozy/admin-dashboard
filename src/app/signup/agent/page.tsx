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
        <div className="max-w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
            <div className="flex lg:flex-row flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                {/* Left Side - Registration Form */}
                <div className="w-full p-8">
                    <div className="flex flex-col items-center justify-center gap-2 mb-8">
                        <Logo isDark={false} />
                        <p className=" m-0 text-[16px] font-semibold dark:text-white">Agent Register</p>
                    </div>

                    {/* */}
                    <div className="flex gap-5">
                        <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" label="Type of organisation*" placeHolder="" type="select" parentClassName="w-full flex flex-col gap-1" value={firstName} onChange={setFirstName} />
                        <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" label="Name of organization*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={lastName} onChange={setLastName} />
                    </div>

                    <h2 className="flex font-bold mt-2 ml-2">Enter contact details:</h2>

                    <div className="flex gap-5 mt-2">
                        <div className="flex flex-1 gap-2">
                            <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" label="First Name*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={firstName} onChange={setFirstName} />
                            <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1 mt-8" value={firstName} onChange={setFirstName} />
                        </div>
                        <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" label="Last Name" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={lastName} onChange={setLastName} />
                    </div>
                    {/* Email ID  */}
                    <div className="flex gap-5 mt-2">
                        <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" label="Address line 1*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={firstName} onChange={setFirstName} />
                        <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" label="Address line 2" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={lastName} onChange={setLastName} />
                    </div>
                    <div className="flex gap-5 mt-2">
                        <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" label="City / Town*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={firstName} onChange={setFirstName} />
                        <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" label="Country*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={lastName} onChange={setLastName} />
                    </div>
                    <div className="flex gap-5 mt-2">
                        <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" label="Email Address*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={firstName} onChange={setFirstName} />
                        <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" label="Phone Number*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={lastName} onChange={setLastName} />
                    </div>
                    <div className="flex gap-5 mt-2">
                        <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" label="Preferred Currency*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={firstName} onChange={setFirstName} />
                        <Input className="shadow-none outline-none border-b-2 border-l-0 border-r-0 border-t-0 border-black" label="Zip / Postal Code*" placeHolder="" type="text" parentClassName="w-full flex flex-col gap-1" value={lastName} onChange={setLastName} />
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
