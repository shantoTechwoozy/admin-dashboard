import { images } from "@/images/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Image width={176} height={32} src={images.logo} alt="Logo" priority />
    </Link>
  );
};

export default Logo;
