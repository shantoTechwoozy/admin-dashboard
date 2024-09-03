"use client"
import AgenLoginFormFooter from "@/components/common/auth/AgenLoginFormFooter";
import Input from "@/components/common/inputs/Input";
import Logo from "@/components/common/Logo";
import React, { useState } from "react";

const AgentLoginPage = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
            <div className="relative py-3 sm:w-115 sm:mx-auto">
                <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                    <div className="flex flex-col justify-center items-center h-full select-none">
                        <div className="flex flex-col items-center justify-center gap-2 mb-8">
                            <Logo />
                            <p className="m-0 text-[16px] font-semibold dark:text-white">Agent Log In</p>
                        </div>
                        <Input className="rounded-xl" placeHolder="User Name" type="text" parentClassName="w-full flex flex-col gap-2" value={username} onChange={setUserName} />
                        <Input className="rounded-xl" placeHolder="Password" type="password" parentClassName="w-full flex flex-col gap-2 mt-5" value={password} onChange={setPassword} />

                        <button className="w-full mt-5 py-2 bg-orange-500 hover:bg-orange-700 focus:ring-offset-orange-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
                            Login
                        </button>
                        <AgenLoginFormFooter />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentLoginPage;
