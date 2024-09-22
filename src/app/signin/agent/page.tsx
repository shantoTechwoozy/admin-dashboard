"use client"
import { useState } from "react";
import AgentLogin from "@/components/common/auth/AgentLogin";

const Page = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true); // Assuming modal state handling
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  // Define what happens when the signup modal should open
  const onOpenSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  // Define what happens when the login modal should close
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
