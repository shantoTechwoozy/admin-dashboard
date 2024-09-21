"use client"
import { useState } from "react";
import AgentLogin from "@/components/common/auth/AgentLogin";

const Page = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true); // Assuming modal state handling
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const onOpenSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const onCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      {isLoginModalOpen && (
        <AgentLogin
          onOpenSignupModal={onOpenSignupModal}
          onCloseLoginModal={onCloseLoginModal}
        />
      )}
    </div>
  );
};

export default Page;
