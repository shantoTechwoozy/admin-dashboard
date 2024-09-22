"use client";
import Input from "@/components/common/inputs/Input";
import Logo from "@/components/common/Logo";
import { IconAuthentication } from "@/icons";
import { useState } from "react";
import LoginFormFooter from '@/components/common/auth/FormFooter';

const UserSignup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !password || !retypePassword) {
            alert("Please fill in all fields");
            return;
        }

        if (password !== retypePassword) {
            alert("Passwords do not match!");
            return;
        }

        const formData = {
            firstName,
            lastName,
            email,
            password,
        };

        console.log("Form submitted:", formData);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setRetypePassword("");
    };

    return (
        <div className="max-w-screen h-[60vh] flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
            <Logo isDark className="mb-5" />
            <form
                onSubmit={handleSubmit}
                className="flex lg:flex-row gap-5 flex-col items-center justify-center dark:bg-gray-900 rounded-xl overflow-hidden"
            >
                {/* Left Side - Registration Form */}
                <div className="w-full">
                    <p className="m-0 text-[16px] font-semibold dark:text-white mb-2">Agent Register</p>
                    {/* First Name and Last Name */}
                    <div className="flex gap-5">
                        <Input
                            className="rounded-xl"
                            placeHolder="First Name"
                            type="text"
                            parentClassName="w-full flex flex-col gap-1"
                            value={firstName}
                            onChange={setFirstName}
                        />
                        <Input
                            className="rounded-xl"
                            placeHolder="Last Name"
                            type="text"
                            parentClassName="w-full flex flex-col gap-1"
                            value={lastName}
                            onChange={setLastName}
                        />
                    </div>

                    {/* Email ID */}
                    <Input
                        className="rounded-xl"
                        placeHolder="Email ID"
                        type="email"
                        parentClassName="w-full flex flex-col gap-2 mt-2"
                        value={email}
                        onChange={setEmail}
                    />

                    {/* Password */}
                    <Input
                        className="rounded-xl"
                        placeHolder="Password"
                        type="password"
                        parentClassName="w-full flex flex-col gap-2 mt-2"
                        value={password}
                        onChange={setPassword}
                    />

                    {/* Re-enter Password */}
                    <Input
                        className="rounded-xl"
                        placeHolder="Re Enter Password"
                        type="password"
                        parentClassName="w-full flex flex-col gap-2 mt-2"
                        value={retypePassword}
                        onChange={setRetypePassword}
                    />

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full mt-5 py-2 bg-orange-500 hover:bg-orange-700 focus:ring-offset-orange-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
                    >
                        Register
                    </button>
                </div>

                <div>Or</div>

                {/* Right Side - Social Media Login */}
                <div className="w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-center">
                        <div className="flex flex-row lg:flex-col justify-center gap-4">
                            <button className="flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                <IconAuthentication.Facebook />
                                <span>Log In with Facebook</span>
                            </button>
                            <button className="bg-[#D1483C] flex items-center justify-center gap-2 py-2 px-4 bg-red-600 hover:bg-red-800 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                                <IconAuthentication.Google />
                                <span>Log In with Google</span>
                            </button>
                        </div>
                        <LoginFormFooter name="Already have an account?" registration="Login" href="/signin/user" />

                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserSignup;
