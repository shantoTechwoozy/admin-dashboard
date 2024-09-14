"use client";
import LoginForm from "@/components/common/auth/LoginForm";
import LoginFormFooter from "@/components/common/auth/LoginFormFooter";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { BaseApiUrl } from "../../../../env";

const AgentLoginPage = () => {
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
      } else toast.error("Failed to login with this credentials");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 flex min-h-screen w-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:mx-auto sm:w-115">
        <div className="dark:bg-gray-900 flex min-h-90 items-center justify-center rounded-[50px] bg-white text-left shadow-lg">
          <div className="flex h-full flex-col items-center justify-center">
            <LoginForm
              title="Agent Login"
              loginData={loginData}
              setLoginData={setLoginData}
              onSubmit={onSubmit}
              isLoading={loading}
            />
            <LoginFormFooter name="Agent" registration="Register" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AgentLoginPage;
