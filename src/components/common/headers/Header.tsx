"use client";

import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import MobileMenu from "@/components/main/MobileMenu";

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-secondary">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex justify-between lg:flex-1">
          <Logo isDark={false} />
        </div>
        <div className="flex lg:hidden"></div>
        <div className="hidden lg:flex lg:gap-x-8">
          <Link
            className="text-md text-gray-900 flex items-center p-2 font-thin leading-6 lg:text-white"
            href="/signup"
          >
            Sign up
          </Link>
          <Link
            href="/signin"
            className="text-md w-32 rounded-full bg-orange-500 px-3 py-3 text-center font-semibold leading-6 text-white hover:bg-orange-700"
          >
            Sign in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            
          </div> */}
        {/* Mobile Men  u */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Header;
