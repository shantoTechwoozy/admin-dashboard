import { nanoid } from "nanoid";
import React from "react";
import { MenuLists } from "./sidebarArrays/MenuList";
import SidebarItem1 from "./SidebarItem";


const SidebarNav = () => {
  return (
    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      <nav className="mt-2 py-4 lg:mt-2 ">
        {MenuLists.map((group) => (
          <div key={nanoid()}>
            <h3 className="bg-primary px-2 py-3 text-center text-sm font-semibold text-white">
              {group.name}
            </h3>

            <div className="mb-6 flex flex-col gap-1.5">
              {group.menuItems.map((item) => {
                return <SidebarItem1 key={nanoid()} item={item} />;
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SidebarNav;
