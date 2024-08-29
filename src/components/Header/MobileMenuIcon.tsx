import { IconTopBar } from "@/icons";
import { images } from "@/images/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface _PropsTypes {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuIcon: React.FC<_PropsTypes> = ({ setIsSidebarOpen }) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
      <button
        aria-controls="sidebar"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
      >
        <IconTopBar.menu className="text-xl" />
      </button>

      <Link className="block flex-shrink-0 lg:hidden" href="/">
        <Image width={32} height={32} src={images.logoIcon} alt="Logo" />
      </Link>
    </div>
  );
};

export default MobileMenuIcon;
