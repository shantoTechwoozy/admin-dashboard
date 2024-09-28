"use client";
import KeepInput from "@/components/keep-react/KeepInput";
import { Button, ModalTitle } from "keep-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const AgentLogin = () => {
  const [loginData, setLoginData] = useState({ agentID: "", password: "" });
  const router = useRouter();

  const [agent, setAgent] = useState({
    agentID: "",
    password: "",
  });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setAgent({
      ...agent,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Agent Login</ModalTitle>
      <KeepInput placeholder="Agent ID" />
      <KeepInput placeholder="Enter your password" />
      <Button>Login</Button>
    </div>
  );
};

export default AgentLogin;
