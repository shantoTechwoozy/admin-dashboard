"use client"
import React from "react";
import Logo from "../common/Logo";
import { IconSidebar } from "@/icons";

const SidebarLogo = () => {
  return (
    <div className="flex items-center justify-center gap-3 px-6 py-8 lg:py-8">
      <Logo isDark={false} />

      {/* <button
        onClick={() => { }}
        aria-controls="sidebar"
        className="absolute -right-5"
      >
        <IconSidebar.BackButton className="p-2 text-white rounded-full w-10 h-10 border border-white bg-secondary" />
        <IconSidebar.OpenButton className="p-2 text-white rounded-full w-10 h-10 border border-white bg-secondary" />
      </button> */}
    </div>
  );
};

export default SidebarLogo;
