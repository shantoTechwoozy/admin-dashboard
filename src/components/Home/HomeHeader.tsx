"use client";
import Logo from "@/components/common/Logo";
import MobileMenu from "@/components/main/MobileMenu";
import { IconHomePage } from "@/icons";
import { useState } from "react";

import "react-responsive-modal/styles.css";
import AgentLogin from "../common/auth/AgentLogin";
import { Button } from "keep-react";
import KeepModal from "../keep-react/KeepModal";
import UserLogin from "../common/auth/UserLogin";
import UserSignup from "../common/auth/UserSignup";
import AgentSignup from "../common/auth/AgentSignup";

export default function HomeHeader() {
  const [isUserLoginOpen, setIsUserLoginOpen] = useState(false);
  const [isUserSignupOpen, setIsUserSignupOpen] = useState(false);
  const [isAgentLoginOpen, setIsAgentLoginOpen] = useState(false);
  const [isAgentSignupOpen, setIsAgentSignupOpen] = useState(false);

  return (
    <header className="sticky left-0 top-0 z-10 w-full bg-[url('/images/banner/banner.webp')]">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <Logo isDark={false} />

        <div className="hidden items-center lg:flex lg:gap-x-3">
          <KeepModal
            modalOver={
              <Button variant="link" className="text-white">
                Sign in
              </Button>
            }
          >
            <UserLogin
              onOpenSignupModal={() => setIsUserSignupOpen(true)}
              onCloseLoginModal={() => setIsUserLoginOpen(false)}
            />
          </KeepModal>

          <div className="flex h-12 w-[1px] bg-white"></div>
          <KeepModal
            modalOver={
              <Button variant="link" className="text-white">
                Sign Up
              </Button>
            }
            className="w-3/5"
          >
            <UserSignup />
          </KeepModal>

          <KeepModal
            modalOver={
              <Button color="primary" className="rounded-full">
                Agent Login
              </Button>
            }
          >
            <AgentLogin />
          </KeepModal>

          <Button className="rounded-full">
            <IconHomePage.Phone size={20} />
          </Button>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
