import React from "react";
import Logo from "../common/Logo";
import { IconSidebar } from "@/icons";

interface _PropsTypes {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarLogo: React.FC<_PropsTypes> = ({ setSidebarOpen }) => {
  return (
    <div className="flex items-center justify-center gap-3 px-6 py-5.5 lg:py-6.5">
      <Logo isDark={false} />

      <button
        onClick={() => setSidebarOpen((prev) => !prev)}
        aria-controls="sidebar"
        className="block lg:hidden"
      >
        <IconSidebar.backButton className="text-2xl" />
      </button>
    </div>
  );
};

export default SidebarLogo;
