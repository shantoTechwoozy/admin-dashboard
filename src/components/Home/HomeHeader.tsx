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

    const onOpenUserLoginModal = () => setIsUserLoginOpen(true);
    const onCloseUserLoginModal = () => setIsUserLoginOpen(false);

    const onOpenUserSignupModal = () => setIsUserSignupOpen(true);
    const onCloseUserSignupModal = () => setIsUserSignupOpen(false);

    const onOpenAgentLoginModal = () => setIsAgentLoginOpen(true);
    const onCloseAgentLoginModal = () => setIsAgentLoginOpen(false);

    const onOpenAgentSignupModal = () => setIsAgentSignupOpen(true);
    const onCloseAgentSignupModal = () => setIsAgentSignupOpen(false);

    return (

        <header className="absolute inset-x-0 top-0 z-50 bg-[url('/images/banner/banner.webp')]">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex justify-between lg:flex-1">
                    <Logo isDark={false} />
                </div>

                <div className="hidden items-center lg:flex lg:gap-x-8">
                    <Button
                        onClick={onOpenUserLoginModal}
                        text="Sign in"
                        className="bg-transparent p-0 rounded-none w-16 text-white font-thin"
                    />
                    <div className="bg-white h-12 flex w-[1px]"></div>
                    <Button
                        onClick={onOpenUserSignupModal}
                        text="Sign Up"
                        className="bg-transparent p-0 rounded-none w-16 text-white font-thin"
                    />

                    <div className="flex">
                        <div className="rounded-full bg-white w-6 h-6"></div>
                        <Button
                            onClick={onOpenUserLoginModal}
                            text="Welcome MD"
                            className="bg-transparent p-0 rounded-none w-35 text-white font-thin"
                        />
                    </div>

                    <Button
                        onClick={onOpenAgentLoginModal}
                        text="Agent Login"
                        className="rounded-full w-35 text-black font-bold"
                    />

                    {/* User Login Modal */}
                    <Modal
                        open={isUserLoginOpen}
                        onClose={onCloseUserLoginModal}
                        center
                        classNames={{ modal: "customModal" }}
                    >
                        <UserLogin
                            onOpenSignupModal={onOpenUserSignupModal}
                            onCloseLoginModal={onCloseUserLoginModal}
                        />
                    </Modal>

                    {/* User Signup Modal */}
                    <Modal
                        open={isUserSignupOpen}
                        onClose={onCloseUserSignupModal}
                        center
                        classNames={{ modal: "customModal" }}
                    >
                        <UserSignup />
                    </Modal>

                    {/* Agent Login Modal */}
                    <Modal
                        open={isAgentLoginOpen}
                        onClose={onCloseAgentLoginModal}
                        center
                        classNames={{ modal: "customModal" }}
                    >
                        <AgentLogin
                            onOpenSignupModal={onOpenAgentSignupModal}
                            onCloseLoginModal={onCloseAgentLoginModal}
                        />
                    </Modal>

                    {/* Agent Signup Modal */}
                    <Modal
                        open={isAgentSignupOpen}
                        onClose={onCloseAgentSignupModal}
                        center
                        classNames={{ modal: "customModal" }}
                    >
                        <AgentSignup />
                    </Modal>

                    <IconHomePage.Phone className="bg-primary rounded-full p-1 text-black" size={35} />
                </div>
                <MobileMenu />
            </nav>
        </header>
    );
}
