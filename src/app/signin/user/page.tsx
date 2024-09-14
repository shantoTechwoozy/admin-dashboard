"use client";
import LoginForm from "@/components/common/auth/LoginForm";
import LoginFormFooter from "@/components/common/auth/LoginFormFooter";
import { useState } from "react";

const UserLoginPage = () => {
  //agentID means userName
  const [loginData, setLoginData] = useState({ agentID: "", password: "" });

  console.log("Data fetched", loginData);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 flex min-h-screen w-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:mx-auto sm:w-115">
        <div className="dark:bg-gray-900 flex min-h-90 items-center justify-center rounded-[50px] bg-white text-left shadow-lg">
          <div className="flex h-full flex-col items-center justify-center">
            <LoginForm
              title="User Login"
              loginData={loginData}
              setLoginData={setLoginData}
              onSubmit={() => {}}
            />
            <LoginFormFooter name="User" registration="Register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;
