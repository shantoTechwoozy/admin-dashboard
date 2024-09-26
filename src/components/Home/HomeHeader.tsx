"use client";
import Logo from "@/components/common/Logo";
import MobileMenu from "@/components/main/MobileMenu";
import { IconHomePage } from "@/icons";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import AgentLogin from "../common/auth/AgentLogin";
import AgentSignup from "../common/auth/AgentSignup";
import UserLogin from "../common/auth/UserLogin";
import UserSignup from "../common/auth/UserSignup";
import Button from "../common/buttons/Button";

export default function HomeHeader() {
  const [isUserLoginOpen, setIsUserLoginOpen] = useState(false);
  const [isUserSignupOpen, setIsUserSignupOpen] = useState(false);
  const [isAgentLoginOpen, setIsAgentLoginOpen] = useState(false);
  const [isAgentSignupOpen, setIsAgentSignupOpen] = useState(false);

  return (
    <header className="sticky left-0 top-0 z-999 w-full bg-[url('/images/banner/banner.webp')]">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <Logo isDark={false} />

        <div className="hidden items-center lg:flex lg:gap-x-8">
          <Button
            onClick={() => setIsUserLoginOpen(true)}
            text="Sign in"
            className="w-16 rounded-none bg-transparent p-0 font-thin text-white"
          />
          <div className="flex h-12 w-[1px] bg-white"></div>
          <Button
            onClick={() => setIsUserSignupOpen(true)}
            text="Sign Up"
            className="w-16 rounded-none bg-transparent p-0 font-thin text-white"
          />

          <div className="flex">
            <div className="h-6 w-6 rounded-full bg-white"></div>
            <Button
              onClick={() => setIsUserLoginOpen(true)}
              text="Welcome MD"
              className="w-35 rounded-none bg-transparent p-0 font-thin text-white"
            />
          </div>

          <Button
            onClick={() => setIsAgentLoginOpen(true)}
            text="Agent Login"
            className="w-35 rounded-full font-bold text-black"
          />

          {/* User Login Modal */}
          <Modal
            open={isUserLoginOpen}
            onClose={() => setIsUserLoginOpen(false)}
            center
            classNames={{ modal: "customModal" }}
          >
            <UserLogin
              onOpenSignupModal={() => setIsUserSignupOpen(true)}
              onCloseLoginModal={() => setIsUserLoginOpen(false)}
            />
          </Modal>

          {/* User Signup Modal */}
          <Modal
            open={isUserSignupOpen}
            onClose={() => setIsUserSignupOpen(false)}
            center
            classNames={{ modal: "customModal" }}
          >
            <UserSignup />
          </Modal>

          {/* Agent Login Modal */}
          <Modal
            open={isAgentLoginOpen}
            onClose={() => setIsAgentLoginOpen(false)}
            center
            classNames={{ modal: "customModal" }}
          >
            <AgentLogin
              onOpenSignupModal={() => setIsAgentSignupOpen(true)}
              onCloseLoginModal={() => setIsAgentLoginOpen(false)}
            />
          </Modal>

          {/* Agent Signup Modal */}
          <Modal
            open={isAgentSignupOpen}
            onClose={() => setIsAgentSignupOpen(false)}
            center
            classNames={{ modal: "customModal" }}
          >
            <AgentSignup />
          </Modal>

          <IconHomePage.Phone
            className="rounded-full bg-primary p-1 text-black"
            size={35}
          />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
