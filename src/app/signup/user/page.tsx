"use client";
import Input from "@/components/common/inputs/Input";
import Logo from "@/components/common/Logo";
import { IconAuthentication } from "@/icons";
import { useState } from "react";

const UserRegistrationPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
            <div className="flex lg:flex-row flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                {/* Left Side - Registration Form */}
                <div className="w-full lg:w-1/2 p-8">
                    <div className="flex flex-col items-center justify-center gap-2 mb-8">
                        <Logo isDark />
                        <p className="m-0 text-[16px] font-semibold dark:text-white">Agent Register</p>
                    </div>

                    {/* First Name and Last Name */}
                    <div className="flex gap-5">
                        <Input className="rounded-xl" placeHolder="First Name" type="text" parentClassName="w-full flex flex-col gap-1" value={firstName} onChange={setFirstName} />
                        <Input className="rounded-xl" placeHolder="Last Name" type="text" parentClassName="w-full flex flex-col gap-1" value={lastName} onChange={setLastName} />
                    </div>
                    {/* Email ID  */}
                    <Input className="rounded-xl" placeHolder="Email ID" type="text" parentClassName="w-full flex flex-col gap-2 mt-2" value={email} onChange={setEmail} />

                    {/* Password */}
                    <Input className="rounded-xl" placeHolder="Password" type="text" parentClassName="w-full flex flex-col gap-2 mt-2" value={password} onChange={setPassword} />

                    {/* Re-enter Password*/}
                    <Input className="rounded-xl" placeHolder="Re Enter Password" type="text" parentClassName="w-full flex flex-col gap-2 mt-2" value={retypePassword} onChange={setRetypePassword} />

                    {/* Register Button */}
                    <button className="w-full mt-5 py-2 bg-orange-500 hover:bg-orange-700 focus:ring-offset-orange-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
                        Register
                    </button>
                </div>
                <div>Or</div>
                {/* Right Side - Social Media Login */}
                <div className="w-full lg:w-1/2 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-center">
                        <div className="flex flex-row lg:flex-col justify-center gap-4">
                            <button className="flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                <IconAuthentication.facebook />
                                <span>Log In with Facebook</span>
                            </button>
                            <button className="bg-[#D1483C] flex items-center justify-center gap-2 py-2 px-4 bg-red-600 hover:bg-red-800 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                                <IconAuthentication.google />
                                <span>Log In with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRegistrationPage;
