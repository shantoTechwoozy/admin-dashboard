"use client";
import KeepInput from "@/components/keep-react/KeepInput";
import { Button, ModalTitle } from "keep-react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import FormFooter from "./FormFooter";
import { ToastContainer } from "react-toastify";

const AgentLogin = () => {


  const [agent, setAgent] = useState({
    agentID: "",
    password: "",
  });

  return (
    <div className="flex flex-col gap-4">
      <ModalTitle>Agent Login</ModalTitle>
      <KeepInput placeholder="Agent ID" />
      <KeepInput placeholder="Enter your password" />
      <Button>Login</Button>
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
export default AgentLogin;
