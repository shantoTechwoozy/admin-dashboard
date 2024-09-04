"use client";

import ClickOutside from "@/components/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";
import cn from "@/utils/cn";
import SidebarLogo from "./SidebarLogo";
import SidebarNav from "./SidebarNav";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={cn(
          `fixed left-0 top-0 z-9999 flex h-screen w-72.5 -translate-x-full flex-col overflow-y-hidden bg-secondary duration-300 ease-linear dark:bg-boxdark lg:translate-x-0`,
          {
            "translate-x-0": sidebarOpen,
          },
        )}
      >
        <SidebarLogo setSidebarOpen={setSidebarOpen} />
        <SidebarNav pageName={pageName} setPageName={setPageName} />
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
