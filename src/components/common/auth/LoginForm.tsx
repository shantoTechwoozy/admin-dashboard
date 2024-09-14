"use client";
import Input from "@/components/common/inputs/Input"; // Importing the actual Input component
import BtnLoader from "../Loader/BtnLoader";
import Button from "../buttons/Button";

interface LoginInput {
  // Renamed the interface to avoid conflict
  agentID: string;
  password: string;
}

interface PropsTypes {
  title: string;
  isLoading?: boolean;
  loginData: LoginInput; // Correct type for loginData
  setLoginData: (data: LoginInput) => void; // Correct typing for the setter function
  onSubmit: (e: any) => void;
}

const LoginForm: React.FC<PropsTypes> = ({
  title,
  setLoginData,
  loginData,
  onSubmit,
  isLoading,
}) => {
  return (
    <form className="mt-2 flex h-full w-full flex-1 select-none flex-col items-center justify-center">
      <p className="mb-5 text-[16px] font-semibold dark:text-white">{title}</p>

      <Input
        className="rounded-2xl text-center"
        placeHolder="Agent ID"
        type="text"
        parentClassName="w-full mt-2 flex flex-col gap-2 items-center"
        value={loginData.agentID}
        onChange={(e) =>
          setLoginData({ ...loginData, agentID: e.target.value })
        }
      />

      <Input
        className="rounded-2xl text-center"
        placeHolder="Password"
        type="password"
        parentClassName="w-full flex flex-col gap-2 mt-5"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
      />

      <Button
        text="Login"
        onClick={onSubmit}
        isLoading={isLoading}
        className="mt-5 w-full rounded-2xl py-2.5"
      />
    </form>
  );
};

export default LoginForm;
