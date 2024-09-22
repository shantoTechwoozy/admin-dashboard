"use client";
import LoginForm from "@/components/common/auth/LoginForm";
import FormFooter from "@/components/common/auth/FormFooter";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { BaseApiUrl } from "../../../../env";

interface AgentLoginProps {
    onOpenSignupModal: () => void;
    onCloseLoginModal: () => void;
}

const AgentLogin: React.FC<AgentLoginProps> = ({ onOpenSignupModal, onCloseLoginModal }) => {
    const [loginData, setLoginData] = useState({ agentID: "", password: "" });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(BaseApiUrl + "/agent/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const result = await response.json();
                toast.success(result.message);
                console.log(result);
                setLoginData({
                    agentID: "",
                    password: "",
                });

                router.push("/search-engine");
            } else {
                toast.error("Failed to login with these credentials");
            }
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="px-12 py-8">
            <LoginForm
                title="Agent Login"
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
                onRegisterClick={() => {
                    onOpenSignupModal();
                    onCloseLoginModal();
                }}
            />
            <ToastContainer />
        </div>
    );
};

export default AgentLogin;
