import { nanoid } from "nanoid";
import { usePathname } from "next/navigation";
import React from "react";
import { MenuLists } from "./sidebarArrays/MenuList";
import SidebarItem1 from "./SidebarItem";
interface _PropsTypes {
  pageName: string;
  setPageName: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarNav: React.FC<_PropsTypes> = ({ pageName, setPageName }) => {
  const pathname = usePathname();
  return (
    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <nav className="mt-2 py-4 lg:mt-2 ">
        {MenuLists.map((group) => (
          <div key={nanoid()}>
            <h3 className="bg-graydark px-4 py-3 text-sm font-semibold text-bodydark2">
              {group.name}
            </h3>

            <div className="mb-6 flex flex-col gap-1.5">
              {group.menuItems.map((item) => {
                return (
                  <SidebarItem1
                    key={nanoid()}
                    // isActive={item.route === pathname}
                    item={item}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SidebarNav;
