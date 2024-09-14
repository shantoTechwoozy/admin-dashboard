"use client";
import Input from "@/components/common/inputs/Input";
import { useState } from "react";

interface PropsTypes {
    title: string;
    onSubmit: (username: string, password: string) => void;
}

const LoginForm: React.FC<PropsTypes> = ({ title, onSubmit }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Basic validation
        if (!username || !password) {
            setError("Username and password are required");
            return;
        }

        // Pass the values to the parent component or API handler
        onSubmit(username, password);
        setError(null); // Clear error on successful submission
    };

    return (
        <form
            className="flex flex-1 w-full mt-2 flex-col justify-center items-center h-full select-none"
            onSubmit={handleSubmit}
        >
            <p className="mb-5 text-[16px] font-semibold dark:text-white">{title}</p>
            <Input
                className="rounded-2xl text-center"
                placeHolder="User Name"
                type="text"
                parentClassName="w-full mt-2 flex flex-col gap-2 items-center"
                value={username}
                onChange={setUserName}
            />
            <Input
                className="rounded-2xl text-center"
                placeHolder="Password"
                type="password"
                parentClassName="w-full flex flex-col gap-2 mt-5"
                value={password}
                onChange={setPassword}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
                type="submit"
                className="w-full mt-5 py-2 bg-orange-500 hover:bg-orange-700 focus:ring-offset-orange-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-2xl cursor-pointer select-none"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;
