"use client";
import React from "react";
import Button from "../common/buttons/Button";
import Link from "next/link";
import Logo from "../common/Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-secondary p-4 text-white">
      <div className="text-xl font-bold">
        {" "}
        <Logo isDark={false} />
      </div>
      <div className="flex items-center space-x-4">
        <select className="border-b-2 border-white bg-transparent p-1 text-white">
          <option>USD</option>
          <option>EUR</option>
        </select>
        <Link href="#" className="hover:underline">
          Sign In
        </Link>
        <Link href="#" className="hover:underline">
          Sign Up
        </Link>
        <div className="text-sm">Welcome MD</div>
        <Button text="Agent Login" onClick={() => {}} />
      </div>
    </header>
  );
};

export default Header;
