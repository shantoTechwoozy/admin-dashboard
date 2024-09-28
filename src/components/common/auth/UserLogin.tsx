"use client";
import FormFooter from "@/components/common/auth/FormFooter";
import LoginForm from "@/components/common/auth/LoginForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface UserLoginProps {
    onOpenSignupModal: () => void;
    onCloseLoginModal: () => void;
}
const UserLogin: React.FC<UserLoginProps> = ({ onOpenSignupModal, onCloseLoginModal }) => {
    //agentID means userName
    const [loginData, setLoginData] = useState({ agentID: "", password: "" });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    console.log("Data fetched", loginData);
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
    }
    return (
        <div className="px-12 py-8">
            <LoginForm
                title="User Login"
                loginData={loginData}
                setLoginData={setLoginData}
                onSubmit={onSubmit}
                isLoading={loading}
            />
            <FormFooter
                name="Agent"
                registration="Register"
                href="#" // Use '#' or a valid href
                forgetTitle="Forget Password"
            />
            <ToastContainer />
        </div>
    );
};

export default UserLogin;
