"use client"
import LoginForm from "@/components/common/auth/LoginForm";
import LoginFormFooter from "@/components/common/auth/LoginFormFooter";
import { useState } from "react";

const UserLoginPage = () => {
    const [loading, setLoading] = useState(false);

    const handleLogin = async (username: string, password: string) => {
        setLoading(true);
        try {
            console.log("Login attempt:", { username, password });
            setTimeout(() => {
                alert("Login successful!");
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error("Login failed:", error);
            setLoading(false);
        }
    };

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
            <div className="relative py-3 sm:w-115 sm:mx-auto">
                <div className="flex justify-center items-center min-h-90 text-left bg-white dark:bg-gray-900 rounded-[50px] shadow-lg">
                    <div className="flex flex-col justify-center items-center h-full">
                        <LoginForm title="Agent Login" onSubmit={handleLogin} />
                        <LoginFormFooter name="Agent" registration="Register" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLoginPage;
