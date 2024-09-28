import cn from "@/utils/cn";
import SidebarLogo from "./SidebarLogo";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
  return (
    <aside
      className={cn(
        `fixed left-0 top-0 z-50 h-screen w-14 hover:w-64 bg-secondary-500 duration-500 dark:bg-boxdark`,
      )}
    >
      <SidebarLogo />
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
