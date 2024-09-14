"use client";
import Input from "@/components/common/inputs/Input"; // Importing the actual Input component

interface LoginInput { // Renamed the interface to avoid conflict
    agentID: string;
    password: string;
}

interface PropsTypes {
    title: string;
    loginData: LoginInput; // Correct type for loginData
    setLoginData: (data: LoginInput) => void; // Correct typing for the setter function
}

const LoginForm: React.FC<PropsTypes> = ({ title, setLoginData, loginData }) => {
    return (
        <form className="flex flex-1 w-full mt-2 flex-col justify-center items-center h-full select-none">
            <p className="mb-5 text-[16px] font-semibold dark:text-white">{title}</p>

            <Input
                className="rounded-2xl text-center"
                placeHolder="Agent ID"
                type="text"
                parentClassName="w-full mt-2 flex flex-col gap-2 items-center"
                value={loginData.agentID}
                onChange={(e) => setLoginData({ ...loginData, agentID: e.target.value })}
            />

            <Input
                className="rounded-2xl text-center"
                placeHolder="Password"
                type="password"
                parentClassName="w-full flex flex-col gap-2 mt-5"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />

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
