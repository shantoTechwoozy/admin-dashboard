"use client"
import { useState } from "react";
import AgentLogin from "@/components/common/auth/AgentLogin";

const Page = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true); // Assuming modal state handling
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  return (
    <div>
      {isLoginModalOpen && (
        <AgentLogin
        />
      )}

    </div>
  );
};

export default Page;
