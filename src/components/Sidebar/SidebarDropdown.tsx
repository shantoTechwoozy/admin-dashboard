import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "@/utils/cn";

const SidebarDropdown = ({ items }: any) => {
  const pathname = usePathname();
  return (
    <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
      {items?.map((item: any, index: number) => (
        <li key={index}>
          <Link
            href={item.route}
            className={cn(
              `group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white`,
              {
                "text-white": pathname === item.route,
              },
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarDropdown;
