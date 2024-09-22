"use client"
import UserLogin from "@/components/common/auth/UserLogin";
import { useState } from "react";

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
        <UserLogin
          onOpenSignupModal={onOpenSignupModal}
          onCloseLoginModal={onCloseLoginModal}
        />
      )}

    </div>
  );
};

export default Page;
