import { images } from "@/images/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface _PropsTypes {
  isDark: boolean;
}
const Logo: React.FC<_PropsTypes> = ({ isDark }) => {
  return (
    <Link href="/">
      <Image width={176} height={32} src={isDark ? images.logoDark : images.logo} alt="Logo" priority />
    </Link>
  );
};

export default Logo;
