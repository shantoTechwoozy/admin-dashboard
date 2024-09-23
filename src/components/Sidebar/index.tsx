import cn from "@/utils/cn";
import SidebarLogo from "./SidebarLogo";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
  return (
    <aside
      className={cn(
        `h-screen w-14 hover:w-67 duration-300 fixed top-0 left-0 z-999 bg-secondary dark:bg-boxdark`
      )}
    >
      <SidebarLogo />
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
