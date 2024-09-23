"use client"
import { IconSidebar } from "@/icons";
import { images } from "@/images/images";
import cn from "@/utils/cn";
import { useStoreState } from "easy-peasy";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icons } from "react-toastify";
interface PropsTypes {
  isDark: boolean;
  className?: string;
}
const Logo: React.FC<PropsTypes> = ({ isDark, className }) => {
  const { isSidebarOpen } = useStoreState((state: any) => state.sidebar)
  return (
    <Link href="/" className={cn(className)}>
      <Image width={176} height={32} src={isDark ? images.logoDark : images.logo} alt="Logo" priority className="min-w-10" />
    </Link>
  );
};
export default Logo;
