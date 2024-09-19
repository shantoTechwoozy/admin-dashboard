"use client";
import LoginFormFooter from "@/components/common/auth/FormFooter";
import LoginForm from "@/components/common/auth/LoginForm";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AgentLoginPage = () => {
  const [loginData, setLoginData] = useState({ agentID: "", password: "" });
  const router = useRouter();

  /**Redux state */
  const { isLoading } = useStoreState((state: any) => state.auth);
  const { login } = useStoreActions((actions: any) => actions.auth);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login({ credentials: loginData, router });
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 flex min-h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:mx-auto sm:w-115">
        <div className="dark:bg-gray-900 flex min-h-90 items-center justify-center rounded-[50px] bg-white text-left shadow-lg">
          <div className="flex h-full flex-col items-center justify-center">
            <LoginForm
              title="Agent Login"
              loginData={loginData}
              setLoginData={setLoginData}
              onSubmit={onSubmit}
              isLoading={isLoading}
            />
            <LoginFormFooter
              name="Agent"
              registration="Register"
              href="/signup/agent"
              forgetTitle="Forget Password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentLoginPage;
