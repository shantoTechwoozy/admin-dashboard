import React from "react";
import { nanoid } from "nanoid";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import { MenuLists } from "./MenuList";

interface _PropsTypes {
  pageName: string;
  setPageName: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarNav: React.FC<_PropsTypes> = ({ pageName, setPageName }) => {
  return (
    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <nav className="mt-2 px-4 py-4 lg:mt-2 lg:px-6">
        {MenuLists.map((group, groupIndex) => (
          <div key={nanoid()}>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              {group.name}
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {group.menuItems.map((menuItem, menuIndex) => (
                <SidebarItem
                  key={nanoid()}
                  item={menuItem}
                  pageName={pageName}
                  setPageName={setPageName}
                />
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SidebarNav;
