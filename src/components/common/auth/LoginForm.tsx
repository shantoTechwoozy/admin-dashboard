"use client"
import AgenLoginFormFooter from "@/components/common/auth/LoginFormFooter";
import Input from "@/components/common/inputs/Input";
import Logo from "@/components/common/Logo";
import { useState } from "react";


interface _PropsTypes {
    title: string;
}

const LoginForm: React.FC<_PropsTypes> = ({ title }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-1 w-full mt-2 flex-col justify-center items-center h-full select-none">
            <p className="m-0 text-[16px] font-semibold dark:text-white">{title}</p>
            <Input className="rounded-xl" placeHolder="User Name" type="text" parentClassName="w-full mt-2 flex flex-col gap-2" value={username} onChange={setUserName} />
            <Input className="rounded-xl" placeHolder="Password" type="password" parentClassName="w-full flex flex-col gap-2 mt-5" value={password} onChange={setPassword} />
            <button className="w-full mt-5 py-2 bg-orange-500 hover:bg-orange-700 focus:ring-offset-orange-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none">
                Login
            </button>
        </div>

    );
};

export default LoginForm;
