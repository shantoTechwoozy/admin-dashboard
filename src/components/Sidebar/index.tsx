import cn from "@/utils/cn";
import SidebarLogo from "./SidebarLogo";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
  return (
    <aside
      className={cn(
        `fixed left-0 top-0 z-999 h-screen w-64 bg-secondary duration-700 dark:bg-boxdark`,
      )}
    >
      <SidebarLogo />
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
